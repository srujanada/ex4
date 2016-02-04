$(document).ready(function() {
  console.log("ready");
  
  
  //hover on #mints
  $('img#mints').hover(function() {
  	console.log("hover over #mints");
  	$(this).attr('src','images/mintsOpen.png');
  	$(this).animate({
  		width: '175',
  		height: '175',
  	},200,'swing');
  }, function() {	//second function
  	$(this).attr('src','images/mintsClose.png');
  	$(this).animate({
  		width: '150',
  		height: '150',
  	},200,'swing');
  }); 	//close the hover function for #mints
  
  
  //hover on #phone
  $('img#phone').hover(function() {
  	console.log("hover over #phone");
  	$(this).attr('src','images/phoneOpen.png');
  	$(this).animate({
  		width: '175',
  		height: '175',
  	},200,'swing');
  }, function() {	//second function
  	$(this).attr('src','images/phoneClose.png');
  	$(this).animate({
  		width: '150',
  		height: '150',
  	},200,'swing');
  }); 	//close the hover function for #phone


  //hover on #ears
  $('img#ears').hover(function() {
  	console.log("hover over #ears");
  	$(this).attr('src','images/earsOpen.png');
  	$(this).animate({
  		width: '175',
  		height: '175',
  	},200,'swing');
  }, function() {	//second function
  	$(this).attr('src','images/earsClose.png');
  	$(this).animate({
  		width: '150',
  		height: '150',
  	},200,'swing');
  }); 	//close the hover function for #ears
  
  
  //hover on #chaps
  $('img#chaps').hover(function() {
  	console.log("hover over #chaps");
  	$(this).attr('src','images/chapsOpen.png');
  	$(this).animate({
  		width: '175',
  		height: '175',
  	},200,'swing');
  }, function() {	//second function
  	$(this).attr('src','images/chapsClose.png');
  	$(this).animate({
  		width: '150',
  		height: '150',
  	},200,'swing');
  }); 	//close the hover function for #chaps
  
  
  //hover on #drive
  $('img#drive').hover(function() {
  	console.log("hover over #drive");
  	$(this).attr('src','images/driveOpen.png');
  	$(this).animate({
  		width: '175',
  		height: '175',
  	},200,'swing');
  }, function() {	//second function
  	$(this).attr('src','images/driveClose.png');
  	$(this).animate({
  		width: '150',
  		height: '150',
  	},200,'swing');
  }); 	//close the hover function for #drive



  //make the images for the projects (2 versions: one closed, one open for hover)
  //make it clickable, description expands in a slide from the center
  
  $('img#mints').click(function() {
  	console.log('click for img#mints');
  	$('section#mintsOverlay').animate({
  		width: '100%',
  		left: '0',
  	}); //close animate function for #mintsOverlay
  	$('section#mintsOverlay h4').css('visibility','visible');
  	return false;
  });	//close click function for img#mints
  
  
  $('img#phone').click(function() {
  	console.log('click for img#phone');
  	$('section#phoneOverlay').animate({
  		width: '100%',
  		left: '0',
  	}); //close animate function for #phoneOverlay
  	$('section#phoneOverlay h4').css('visibility','visible');
  	return false;
  });	//close click function for img#phone
  
  
  $('img#ears').click(function() {
  	console.log('click for img#ears');
  	$('section#earsOverlay').animate({
  		width: '100%',
  		left: '0',
  	}); //close animate function for #earsOverlay
  	$('section#earsOverlay h4').css('visibility','visible');
  	return false;
  });	//close click function for img#ears
  
  
  $('img#chaps').click(function() {
  	console.log('click for img#chaps');
  	$('section#chapsOverlay').animate({
  		width: '100%',
  		left: '0',
  	}); //close animate function for #chapsOverlay
  	$('section#chapsOverlay h4').css('visibility','visible');
  	return false;
  });	//close click function for img#chaps
  
  
  $('img#drive').click(function() {
  	console.log('click for img#drive');
  	$('section#driveOverlay').animate({
  		width: '100%',
  		left: '0',
  	}); //close animate function for #driveOverlay
  	$('section#driveOverlay h4').css('visibility','visible');
  	return false;
  });	//close click function for img#drive
  
  
  $('nav.close').click(function() {
  	console.log('click for nav.close');
  	$('section.overlay').css('width','0px');
  	$('section.overlay h4').css('visibility','hidden');
  	return false;
  });	//close click function for nav.close
  
});		//close the jQuery ready function
  