jQuery(document).ready(function() {
	jQuery('.content').addClass('visible').viewportChecker({
	    classToAdd: 'animated bounceInUp', // Class to add to the elements when they are visible
	    offset: 100,
	   });   
});
    
//jQuery(document).ready(function() {
//    setTimeout(function() {
//        $('.content').viewportChecker({
//         classToAdd: 'animated bounceInUp', // Class to add to the elements when they are visible
//         offset: 100,
//        }); 
//    }, 100);
//});
    
$('.bottom').click(function() {
	$('.content').viewportChecker({
	    classToAdd: 'animated bounceOutUp', // Class to add to the elements when they are visible
	    offset: 100    
    });
    setTimeout(function() {
        $('.content2').viewportChecker({
            classToAdd: 'visible animated bounceInUp', // Class to add to the elements when they are visible
            offset: 100    
        });
    }, 800);
});  