<!DOCTYPE HTML>
<html>
	<head>
		<title>ImDevinC</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		
		<?php
			require 'functions.php';
		?>
		
		<link href='http://fonts.googleapis.com/css?family=Kavoon' rel='stylesheet' type='text/css'>
		<link href='./css/font-awesome.min.css' rel='stylesheet' type='text/css'>
		<link href='./css/looper.css' rel='stylesheet' type='text/css'>
		<link href='./css/style.css' rel='stylesheet' type='text/css'>
	</head>
	<body>
		<?php include_once("analyticstracking.php") ?>
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
						<div class="item">
							<div class="description">Loading Github events...</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="page-wrapper">
			<div id="page" class="container">
				<div id="content">
					<header>Projects</header>
					<div class="box-style">
						<div class="image">
							<a href="https://github.com/ImDevinC/AndroidMyTLCSync" target="_blank" alt="MyTLC Sync for Android"><img src="images/androidmytlc.png" alt="AndroidMyTLC Sync" /></a>
						</div>
						<div class="content">
							<h3>MyTLC Sync for Android <span class="coming-soon">(Decommissioned)</span></h3>
							<p>An Android application designed to download an employees schedule from a website and import the schedule into their calendar on their device.</p>
							<ul>
								<li><i class="fa fa-check-circle-o"> </i> Allows for secure storage of logon credentials</li>
								<li><i class="fa fa-check-circle-o"> </i> Users can set sync times to automatically download schedule</li>
								<li><i class="fa fa-check-circle-o"> </i> Has multiple theme options</li>
								<li><i class="fa fa-check-circle-o"> </i> Customizable alarm settings for events</li>
							</ul>
						</div>
					</div>
					<div class="box-style">
						<div class="image">
							<a href="https://github.com/ImDevinC/iOSMyTLCSyncv2" target="_blank" alt="MyTLC Sync for iOS"><img src="images/iosmytlc.png" alt="MyTLC Sync for iOS" /></a>
						</div>
						<div class="content">
							<h3>MyTLC Sync for iOS <span class="coming-soon">(Decommissioned)</span></h3>
							<p>An iOS application designed to download an employees schedule from a website and import the schedule into their calendar on their device.</p>
							<ul>
								<li><i class="fa fa-check-circle-o"> </i> Allows for secure storage of logon credentials</li>
								<li><i class="fa fa-check-circle-o"> </i> Has multiple theme options</li>
								<li><i class="fa fa-check-circle-o"> </i> Customizable alarm settings for events</li>
							</ul>
						</div>
					</div>
					<div class="box-style">
						<div class="image">
							<a href="http://www.imdevinc.com/pokemon" target="_blank" alt="Pokemon Battle Scene Creator"><img src="images/pokemon.png" alt="Pokemon Battle Scene Creator" /></a>
						</div>
							<div class="content">
							<h3>Pokemon Battle Scene Creator</h3>
							<p>A website designed for a recurring situation on <a href="http://www.reddit.com/r/pokemon" target="_blank" alt="/r/pokemon">/r/pokemon</a> where users want to make battle scenes.</p>
							<ul>
								<li><i class="fa fa-check-circle-o"> </i> Allows for complete randomization of all values</li>
								<li><i class="fa fa-check-circle-o"> </i> Optimized for mobile display</li>
								<li><i class="fa fa-check-circle-o"> </i> Saves image directly to computer for easy use</li>
							</ul>
						</div>
					</div>
					<div class="box-style">
						<div class="image">
							<a href="http://www.imdevinc.com/hangry" target="_blank" alt="Hangry"><img src="images/hangry.png" alt="Hangry" /></a>
						</div>
						<div class="content">
							<h3>Hangry</h3>
							<p>A web application to help you find a place to eat!</p>
							<ul>
								<li><i class="fa fa-check-circle-o"> </i> Uses geolocation or allows for manual location entry</li>
								<li><i class="fa fa-check-circle-o"> </i> Optimized for mobile display</li>
							</ul>
						</div>
					</div>
					<div class="box-style">
						<div class="image">
							<a href="https://play.google.com/store/apps/details?id=com.layer8apps.stopwatch.main" target="_blank" alt="Bigtimer"><img src="images/bigtimer.webp" alt="Bigtimer for Android" /></a>
						</div>
						<div class="content">
							<h3>Bigtimer</h3>
							<p>An easy to use stopwatch requested by a Reddit user. <a href="https://www.google.com/url?q=http://bit.ly/1pMp7FS&sa=D&usg=AFQjCNHBtFvSpermOZ4xqI4wS0zw_d0AzQ">Link to request</a></p>
							<ul>
								<li><i class="fa fa-check-circle-o"> </i> Simple interface</li>
								<li><i class="fa fa-check-circle-o"> </i> Large buttons for easy use</li>
								<li><i class="fa fa-check-circle-o"> </i> Customizeable view</li>
							</ul>
						</div>
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
					<li><a href="https://plus.google.com/+DevinCollins" alt="+ImDevinC" target="_blank"><i class="fa fa-google-plus-square"> </i></a></li>
					<li><a href="http://www.linkedin.com/in/imdevinc/" alt="In/ImDevinC" target="_blank"><i class="fa fa-linkedin"> </i></a></li>
					<li><a href="http://pgp.mit.edu/pks/lookup?op=get&search=0x43BF0B591C48C523" alt="PGP Key" target="_blank"><i class="fa fa-lock"> </i></a></li>
				</ul>
			</div>
		</div>
		<div id="copyright" class="container">
			<p>Copyright (c) 2015</p>
		</div>
		<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
		<script src="./js/humane.js"></script>
		<script src="./js/looper.js"></script>
		<script src="./js/script.js"></script>
	</body>
</html>