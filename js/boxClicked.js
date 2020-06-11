AFRAME.registerComponent('box-clicked', {

  // Maintain the score here
  // See https://aframe.io/docs/0.8.0/core/component.html for full component documentation
  schema: {
    score: {type: 'number', default: 0}
  },

  init: function() {

    var el = this.el;  						// Reference to the component's entity.
    var scoreEl = el.querySelector('#score') // Grab the score text element
    var data = this.data;

    el.addEventListener('box-clicked', function () {
      // Bump the score data
      data.score++;
      // Send an event to the score element with the new score value
      scoreEl.emit('update-score', {newScore: data.score});
    });

  }
  // ...
});