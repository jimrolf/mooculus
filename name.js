define(['jquery', 'tincan'], function($, TinCan) {
    var target = this;
    
    target.width("100%");
    target.height(300);

    target.append( $('<div class="input-group">' +
		     '  <input type="text" class="form-control">' +
		     '  <span class="input-group-btn">' +
		     '    <button class="btn btn-default" type="button">Go!</button>' +
		     '  </span>' +
		     '</div>') );

    $('.btn', target).click( function() {
	var text = $('input', target).val();
	alert(text);
    });
    
    /*
    target.trigger( 'ximera:answer-needed' );

    target.persistentData(function(event) {
	if (target.persistentData( 'correct'))
	    target.css('background-color','#DFE');
	else
	    target.css('background-color','#EEE');	    
    });
    
    target.click( function() {
	target.persistentData( 'correct', true );
	target.trigger( 'ximera:correct' );
    });*/
});
