var Progress = require('../index');
var progress = new Progress({
    maxLength: 30,
    clean:false
});

progress.start();

setTimeout(function() {
    progress.end();
}, 10 * 1000);