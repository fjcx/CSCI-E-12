<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<?php include("inc/htmlhead.php"); ?>
	<!-- including page specific css -->
	<link rel="stylesheet" href="css/featuredStyle.css" type="text/css"/> 
	<script type="text/javascript">
	/* including js for featured slideshow - only on index page */
	$(document).ready(function(){
		$("#featured").tabs({fx:{opacity: "toggle"}}).tabs("rotate", 5000, true);
		
		/* make featured images hyperlinks */
		$(".ui-tabs-panel").click(function(){
			window.location=$(this).find("a").attr("href");
			return false;
		});
	});
	</script>
</head>
<body id="part1">
	<div class="container">
		<!-- header -->
		<div id="header" class="column span-24 last">
			<?php include("inc/header.php"); ?>
		</div>
		<!-- navigation -->
		<div id="navigation" class="column span-24 last">
			<?php include("inc/nav.php"); ?>
		</div>
		<!-- featured content slider -->
		<div id="highlights" class="column span-24 last">
			<?php include("inc/featured.php"); ?>
		</div>
		<!-- primary content section -->
		<div id="primary" class="column span-24 last">
			<div id="mainBody">
				<h2>NEWS</h2>
				<h4>Local cycling news in the Boston area</h4>
				<?php include("inc/newsContent1.php"); ?>
				<h2>EVENTS</h2>
				<h4>Local groups and city-sponsored cycling events happening soon</h4>
				<?php include("inc/eventsContent1.php"); ?>
			</div>
		</div>
		<!-- footer -->
		<div id="footer" class="column span-24 last">
			<?php include("inc/footer.php"); ?>
		</div>
	</div>	
</body>
</html>