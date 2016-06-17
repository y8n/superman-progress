/*
    ─=≡Σ((( つ•̀ω•́)つ

    superman-progress
    version:v0.1.0
    author:YangJiyuan https://github.com/y8n
*/
var util = require('util');
var SUPERMAN = '─=≡Σ((( つ•̀ω•́)つ';

// constructor
function Progress(opt) {
    opt = opt || {};
    this.content = opt.content || SUPERMAN;
    this.clean = util.isUndefined(opt.clean) ? true : !!opt.clean;
    this.stream = opt.stream || process.stderr;
    this.interval = isNaN(opt.interval) ? 100 : Number(opt.interval) || 100;
    this.maxLength = isNaN(opt.maxLength) ? 50 : Number(opt.maxLength) || 50;

    this._barStr = '';
    this.count = 0;
}
Progress.prototype.start = function() {
    var progress = this;

    progress.stream.clearLine(0);
    if(progress.timer){
        clearInterval(progress.timer);
        progress.timer = null;
    }
    progress.timer = setInterval(function() {
        progress.render();
    }, progress.interval);
};
Progress.prototype.render = function() {
    var len = this.content.length;
    var reg = new RegExp('\\s*' + this.content[0] + '$');
    var char = this.content[len - ++this.count];
    this._barStr = (util.isUndefined(char) ? ' ' : char) + this._barStr;
    if (this._barStr.length >= this.maxLength) {
        this._barStr = this._barStr.slice(0, -1);
        if (this._barStr.match(reg)) {
            this._barStr = '';
            this.count = 0;
        }
    }
    this.stream.cursorTo(0);
    this.stream.write(this._barStr);
    this.stream.clearLine(1);
};
Progress.prototype.end = function() {
    if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
        if (this.clean) {
            this.clear();
        } else {
            this.stream.write('\n');
        }
    }
};
Progress.prototype.clear = function() {
    this.stream.clearLine();
    this.stream.cursorTo(0);
};
module.exports = Progress;