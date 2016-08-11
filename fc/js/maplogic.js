// defining some global vars
var gmarkers = [];
var htmls = [];
var markerCount = 0;
var map ;
// An array of tabs
var tabsArray = ["","",""];
var markerGroups = { "group0": [], "group1": [], "group2": []};
var boundsGroups = { "group0": new GLatLngBounds(), "group1": new GLatLngBounds(), "group2": new GLatLngBounds()};

// listener event 
function myclick(markerNum) {
	gmarkers[markerNum].openInfoWindowHtml(htmls[markerNum]);
}

// function called when toggling between tabs/marker groups
function toggleGroup(group) {
	// toggling which markers to deisplay on map
	for (var j = 0; j < gmarkers.length; j++) {
		var marker = gmarkers[j];
		marker.hide();
	}
	
	for (var j = 0; j < markerGroups[group].length; j++) {
		var marker = markerGroups[group][j];
		if (marker.isHidden()) {
			marker.show();
		} else {
			marker.hide();
		}
	} 
	// calculating the correct zoom, center and map bounds for the tab/group selected
	map.setZoom(map.getBoundsZoomLevel(boundsGroups[group]));
	map.setCenter(boundsGroups[group].getCenter());
}

$(document).ready(function(){
	if (GBrowserIsCompatible()) {
	
		// A function to create the marker, set up the event window and add marker into the specific tab list
		function createMarker(point, name, html, desc, groupNum) {
			var marker = new GMarker(point);
			// add onclick listener to maker to display html window
			GEvent.addListener(marker, "click", function() {
				marker.openInfoWindowHtml(html);
			});
			// add marker to gmarkers array
			gmarkers[markerCount] = marker;
			htmls[markerCount] = html;

			// Add the entry to list in the specific tab as assigned by group var
			var tabListHtml = '<li><a href="javascript:myclick(' + markerCount + ')"><h4>' + name + '</h4><p>' + desc + '</p><\/a></li>';
			
			// 'group' defines which tab list the marker is added to
			var group = "group"+groupNum;
			markerGroups[group].push(marker);	// create groups for toggling
			boundsGroups[group].extend(point);	// create bounds for group zooming

			tabsArray[groupNum] += tabListHtml;
			
			// increment total marker counter
			markerCount++;
			return marker;
		}
		  
		// create the map and add controls
		map = new GMap2(document.getElementById("map_canvas"));
		map.addControl(new GLargeMapControl());
		map.addControl(new GMapTypeControl());
		// setting arbitrary center as will be set by toggleGroups
		// *** Note: toggleGroups works out the correct zoom distance and size for each tablist after it is generated from the xml file
		map.setCenter(new GLatLng( 42.35447,-71.05915), 14);	

		// *** Note: all marker data is defined in an xml file, and so map marker list is dynamically generated ***
		// Read the data from localRes.xml
		GDownloadUrl("resources/localRes.xml", function (doc) {
			var xmlDoc = GXml.parse(doc);
			var markers = xmlDoc.documentElement.getElementsByTagName("marker");
			
			for (var j = 0; j < markers.length; j++) {
				// obtain the attribues of each marker
				var lat = parseFloat(markers[j].getAttribute("lat"));
				var lng = parseFloat(markers[j].getAttribute("lng"));
				var grpNum = parseInt(markers[j].getAttribute("group"));
				var point = new GLatLng(lat,lng);
				var html = markers[j].getAttribute("html");
				var label = markers[j].getAttribute("label");
				var desc = markers[j].getAttribute("desc");
				// create the marker
				var marker = createMarker(point, label, html, desc, grpNum);
				map.addOverlay(marker);
			}
			
			// set default shown to group0 - and setting bounds
			toggleGroup("group0"); 
			document.getElementById("sidebar0").innerHTML = tabsArray[0];
			document.getElementById("sidebar1").innerHTML = tabsArray[1];
			document.getElementById("sidebar2").innerHTML = tabsArray[2];
		});	
    } else {
      alert("Sorry, the Google Maps API is not compatible with this browser");
    }
});