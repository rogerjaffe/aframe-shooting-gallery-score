/* global AFRAME, BOX_SPEED */

AFRAME.registerComponent('score', {

	// Save the current score in this component
	schema: {
		score: {type: 'number', default: 0}
	},

	// Define listener for the bump-score event that is sent from the box 
	// when it's clicked
	init: function() {
    this.el.addEventListener('bump-score', this.bumpScore.bind(this));
	},

	// Add one to the score and emit an 'update-score' message to the 
	// score text entity
	bumpScore: function() {
		this.data.score++;
		let scoreEl = this.el.querySelector('#score');
		scoreEl.emit('update-score', {newScore: this.data.score})
	} 


});