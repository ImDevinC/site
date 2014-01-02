<!DOCTYPE HTML>
<html>
	<head>
		<title>Flat Website Template</title>
		<?php
			require 'functions.php';
		?>
		<link href='http://fonts.googleapis.com/css?family=Kavoon' rel='stylesheet' type='text/css'>
		<link href='./css/font-awesome.min.css' rel='stylesheet' type='text/css'>
		<link href='./css/looper.css' rel='stylesheet' type='text/css'>
		<link href='./css/style.css' rel='stylesheet' type='text/css'>
	</head>
	<body>
		<div id="header-wrapper">
			<div id="header" class="container">
				<div id="logo">
					<i class="fa fa-mobile"></i>
					<h1><a href="#">ImDevinC</a></h1>
					<i class="fa fa-desktop"></i>
				</div>
			</div>
		</div>
		<div class="clearfix"></div>
		<div id="featured-wrapper">
			<div id="featured" class="container">
				<header>Stuff I've done recently</header>
				<div id="looper" data-looper="go" class="looper slide">
					<div class="looper-inner">
						<?php
							echo loadGithubEvents();
						?>
					</div>
				</div>
			</div>
		</div>
		<div id="page-wrapper">
			<div id="page" class="container">
				<div id="content">
					<header>Projects</header>
					<div class="box-style">
						<a href="https://play.google.com/store/apps/details?id=com.layer8apps" target="_blank" alt="MyTLC Sync for Android"><img src="images/androidmytlc.png" alt="AndroidMyTLC Sync" /></a>
						<h3>MyTLC Sync for Android</h3>
						<p>Duis non imperdiet nisl, non lobortis ligula. Mauris ut ultricies purus. Morbi semper.</p>
					</div>
					<div class="box-style">
						<a href="#" alt="MyTLC Sync for iOS"><img src="images/iosmytlc.png" alt="MyTLC Sync for iOS" /></a>
						<h3>MyTLC Sync for iOS</h3>
						<p>Duis non imperdiet nisl, non lobortis ligula. Mauris ut ultricies purus. Morbi semper.</p>
					</div>
					<div class="box-style">
						<a href="http://www.imdevinc.com/pokemon" target="_blank" alt="Pokemon Battle Scene Creator"><img src="images/pokemon.png" alt="Pokemon Battle Scene Creator" /></a>
						<h3>Pokemon Battle Scene Creator</h3>
						<p>Duis non imperdiet nisl, non lobortis ligula. Mauris ut ultricies purus. Morbi semper.</p>
					</div>
					<div class="box-style">
						<a href="http://www.imdevinc.com/hangry" target="_blank" alt="Hangry"><img src="images/hangry.png" alt="Hangry" /></a>
						<h3>Hangry</h3>
						<p>Duis non imperdiet nisl, non lobortis ligula. Mauris ut ultricies purus. Morbi semper.</p>
					</div>
				</div>
			</div>
		</div>
		<div class="clearfix"></div>
		<div id="banner-wrapper">
			<div id="banner" class="container">
				<p>I develop web sites, mobile, and desktop applications</p>
			</div>
		</div>
		<div id="footer-wrapper">
			<div id="footer" class="container">
				<ul>
					<li><a href="mailto:devin@imdevinc.com" alt="Devin@ImDevinC.com" target="_blank"><i class="fa fa-envelope"> </i></a></li>
					<li><a href="http://www.twitter.com/ImDevinC" alt="@ImDevinC" target="_blank"><i class="fa fa-twitter"> </i></a></li>
					<li><a href="http://www.facebook.com/ImDevinC" alt="/ImDevinC" target="_blank"><i class="fa fa-facebook"> </i></a></li>
					<li><a href="http://www.github.com/ImDevinC" alt="/ImDevinC" target="_blank"><i class="fa fa-github"> </i></a></li>
					<li><a href="https://plus.google.com/103589571934391727961" alt="+ImDevinC" target="_blank"><i class="fa fa-google-plus-square"> </i></a></li>
					<li><a href="http://www.linkedin.com/in/imdevinc/" alt="In/ImDevinC" target="_blank"><i class="fa fa-linkedin"> </i></a></li>
				</ul>
			</div>
		</div>
		<div id="copyright" class="container">
			<p>Copyright (c) 2014</p>
		</div>
		<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
		<script src="./js/humane.js"></script>
		<script src="./js/looper.js"></script>
		<script type="text/javascript">
			$('time').humaneDates();
			$('.looper').looper();
		</script>
	</body>
</html>