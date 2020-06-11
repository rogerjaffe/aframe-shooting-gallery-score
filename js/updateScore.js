AFRAME.registerComponent('update-score', {

  init: function() {

    var el = this.el;  						// Reference to the component's entity.

    el.addEventListener('update-score', function (data) {
    	// Event handler fires when the scene sends the update-score event
    	// to this component.  Update the score text that is displayed
    	var text = el.getAttribute('text');
    	text.value = 'Score: '+data.detail.newScore;
    	el.setAttribute('text', text);
    });

  }

});