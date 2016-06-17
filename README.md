# superman-progress

一个好玩的进度条。─=≡Σ((( つ•̀ω•́)つ

## Install 

```
$ npm install superman-progress --save
```

## Usage

调用`start`方法启动进度条，调用`end`方法手动关闭  
[example](./example/start-end.js)

```
var Progress = require('superman-progress');
var progress = new Progress();

progress.start();
setTimeout(function() { 
    progress.end();   // end in 10 seconds
}, 10 * 1000);
```
手动设置`setInterval`并在其中调用`render`方法  
[example](./example/custom-interval.js)

```
var progress = new Progress({
    content:'loading ...  ─=≡Σ((( つ•̀ω•́)つ'
});

var timer = setInterval(function () {
  progress.render();
}, 100);

setTimeout(function() {
    clearInterval(timer);
    progress.clear();
}, 20 * 1000);
```

## Options
`Progress`构造函数接受一个对象参数，有以下配置项

- content：显示的进度条内容，默认是一个超人`'─=≡Σ((( つ•̀ω•́)つ'`。
- clean：结束的时候是否清空进度条。布尔值，默认清空。
- stream：进度条输出流。默认是`process.stderr`。  
- interval:渲染的时间间隔，默认100毫秒。
- maxLength:可显示的最大长度。默认50个字符长度。

## Methods

- start：启动进度条，调用`start`方法的话必须通过`end`方法终止。
- end：终止进度条。
- render：渲染进度条，如果是手动设置定时器的话，在定时器中调用该方法。
- clear：清空进度条。

## Thanks
progress：[https://github.com/visionmedia/node-progress](https://github.com/visionmedia/node-progress)  
node-progress：[https://github.com/mauriciogior/node-progress](https://github.com/mauriciogior/node-progress)

## License
MIT