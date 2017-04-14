(function($){
  $(function(){

  $('.slider').slider();
  $('.button-collapse').sideNav();
	$('.scrollspy').scrollSpy();
  $('.modal').modal({
       dismissible: true, // Modal can be dismissed by clicking outside of the modal
       opacity: .5, // Opacity of modal background
       in_duration: 300, // Transition in duration
       out_duration: 200, // Transition out duration
       starting_top: '4%', // Starting top style attribute
       ending_top: '10%', // Ending top style attribute
       ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
       },
       complete: function() {  } // Callback for Modal close
     }
   );

	$('.button-collapse').sideNav({
		menuWidth: 240, // Default is 240
		closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
	});

  $('.parallax').parallax();
	}); // end of document ready
})(jQuery); // end of jQuery name space
