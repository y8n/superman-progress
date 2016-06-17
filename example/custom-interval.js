var Progress = require('../index');
var progress = new Progress({
    content:'loading ...  ─=≡Σ((( つ•̀ω•́)つ'
});

var timer = setInterval(function () {
  progress.render();
}, 100);

setTimeout(function() {
    clearInterval(timer);
    progress.clear();
}, 10 * 1000);
