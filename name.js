define(['jquery', 'tincan'], function($, TinCan) {
    var target = this;
    
    target.width("100%");
    target.height(300);

    target.persistentData(function(event) {
	if (target.persistentData( 'name.number')) {
	    target.empty();
	    target.append( $('<p>name = ' + target.persistentData( 'name') + '</p>') );
	} else {
	    target.empty();	    
	    target.append( $('<div class="input-group">' +
			     '  <input type="text" class="form-control">' +
			     '  <span class="input-group-btn">' +
			     '    <button class="btn btn-default" type="button">Finish Exam</button>' +
			     '  </span>' +
			     '</div>') );
	    
	    $('.btn', target).click( function() {
		var text = $('input', target).val().toLowerCase().trim();
		text = text.replace(/@.*/, '');
		
		if (text.match( /^[a-z]+\.[0-9]+$/ )) {
		    target.persistentData( 'name.number', text );
		    alert('Student ' + text + '@osu.edu has finished this exam.');
		} else {
		    alert('Your email address should be your @osu.edu email.  It must consist of all or some portion of your last name, a dot, and a number.');
		    return false;
		}
	    });
	}
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
	target.trigger( 'ximera:correct' );
    });*/
});
