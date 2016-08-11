<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<?php include("inc/htmlhead.php"); ?>
	<!-- including map specific imports, scripts -->
	<script src="http://maps.google.com/maps?file=api&amp;v=2&amp;key=AIzaSyDtPlx3c3wWPfQ4W9k9MZN0L0OhY2o708M" type="text/javascript"></script>
	<script type="text/javascript" src="js/maplogic.js" ></script>
	
	<!-- including page specific css -->
	<link rel="stylesheet" href="css/mapStyle.css" type="text/css"/> 
	<!-- custom rolled theme to match website styling -->
	<link rel="stylesheet" href="css/custom-theme/jquery-ui-1.8.20.custom.css" type="text/css" media="all" />

	<script type="text/javascript">
	/* including js for tabs - only needed on this page*/
	$(function(){
		$('#tabs').tabs();
	});
	</script>
</head>
<body id="part3">
	<div class="container">
		<!-- header -->
		<div id="header" class="column span-24 last">
			<?php include("inc/header.php"); ?>
		</div>
		<!-- navigation -->
		<div id="navigation" class="column span-24 last">
			<?php include("inc/nav.php"); ?>
		</div>
		<!-- primary content section -->
		<div id="primary" class="column span-24 last">
			<div id="mainBody">
				<h2>Local Cycling Resources</h2>
				<h4>Locations of cycling resources in the area  - Stores, Rental and Trails</h4>
			</div>
			<!-- tabs with javascript parsed list read from xml - see maplogic.js for the magic -->
			<div id="tabs" class="column span-8">
				<ul>
					<li><a href="#maptab0" onclick="toggleGroup('group0')">BIKE SHOPS</a>
					</li>
					<li><a href="#maptab1" onclick="toggleGroup('group1')">RENTAL</a>
					</li>
					<li><a href="#maptab2" onclick="toggleGroup('group2')">BIKE PATHS</a>
					</li>
				</ul>
				
				<div id="maptab0">
					<h5>Bike Shops around the Boston area:</h5>
					<ul id="sidebar0" class="markerlist"><li></li></ul>
				</div>
				
				<div id="maptab1">
					<h5>Hubway Stations (Rental) around the Boston area: (<a href="http://www.thehubway.com/">Join Hubway now</a>)</h5>
					<ul id="sidebar1" class="markerlist"><li></li></ul>
				</div>
				
				<div id="maptab2">
					<h5>Bike Trails around the Boston area:</h5>
					<ul id="sidebar2" class="markerlist"><li></li></ul>
				</div>			
			</div>
			
			<!-- map displaying markers parsed with javascript from xml list - see maplogic.js for the details 
				Note: map resizes and zooms when different tabs are pressed to fit those specific markers  -->
			<div id="canvas" class="column span-15 last">
				<div id="map_canvas" style="width: 600px; height: 700px; border: 1px solid black;"></div>
			</div>
		</div>
		<!-- footer -->
		<div id="footer" class="column span-24 last">
			<?php include("inc/footer.php"); ?>
		</div>
	</div>
</body>
</html>