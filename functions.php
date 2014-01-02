<?php

	require_once("php_fast_cache.php");

	$cache = new phpFastCache();

	$eventCount = 6;

	if ($_GET["type"] == "events") {
		echo loadGithubEvents();
	}

	function deleteCache($key = null) {
		if ($key == null) {
			phpFastCache::cleanup();
		} else {
			phpFastCache::delete($key);
		}
	}

	function getGithubData($url, $key) {
		$result = phpFastCache::get($key);

		if ($result == null) {
			$ch = curl_init($url);

			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

			curl_setopt($ch, CURLOPT_USERAGENT, 'ImDevinC');

			curl_setopt($ch, CURLOPT_HTTPHEADER, array('Authorization: token f2f4daf1cd4465016d78e8ab923163987935e893'));

			$result = json_decode(curl_exec($ch), true);

			if (array_key_exists('message', $result)) {
				return null;
			}

			phpFastCache::set($key, $result, 60);
		}

		return $result;
	}

	function loadGithubEvents() {
		$events = getGithubData('https://api.github.com/users/ImDevinC/events/public', 'github_events');

		if ($events == null) {
			return '<div class="alert alert-danger">There was an issue loading Github repos for ImDevinC.  Please try again later or visit <a href="http://www.github.com/ImDevinC" target="_blank">Github</a>.</div>';
		}

		$list = '';

		$count = 0;
		foreach($events as $event) {
			if ($event['type'] == 'PushEvent') {
				$repo = $event['repo']['name'];
				foreach($event['payload']['commits'] as $commit) {
					$list .= '<div class="item"><div class="description">' . $commit['message'] . '</div>' .
								'<div class="time"><time datetime="' . $event['created_at'] . '">' . $event['created_at'] .'</time> in ' . 
								'<a href="https://github.com/' . $repo . '/commit/' . $commit['sha'] . '" target="_blank">' . $repo . '</a>' .
								'</div></div>';
					$count++;
					if ($count >= $GLOBALS['eventCount']) {	
				 		break 2;
					}
				}
			} else if ($event['type'] == 'CreateEvent') {
				$repo = $event['repo']['name'];
				$list .= '<div class="item"><div class="description">' . $event['payload']['description'] . '</div>' .
								'<div class="time"><time datetime="' . $event['created_at'] . '">' . $event['created_at'] .'</time> in ' . 
								'<a href="https://github.com/' . $repo . '" target="_blank">' . $repo . '</a>' .
								'</div></div>';
				$count++;
			}
			if ($count >= $GLOBALS['eventCount']) {	
		 		break;
			}
		}

		return $list;
	}

?>