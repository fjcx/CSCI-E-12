// nav: i am here ###
$(document).ready(function(){
	var mybodyid = $('body').attr('id');
	var mynavid = '#nav' + mybodyid;
	/* e.g. for 3.shtml:
	  mybodyid is 'part3'
	  mynavid  is '#navpart3'
	*/
	var cssid = 'iamhere' + mybodyid;
	$(mynavid).attr('id',cssid);
});