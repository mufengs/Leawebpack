## 开启一个简单的项目

- 创建一个项目目录
- 创建子目录src
- 创建子目录dist
- dist目录中添加一个index.html页面
- src目录添加一个entry.js
- `npm init`,初始化项目

## 安装webpack

全局安装

`npm install -g webpack`

`npm install -g webpack-cli`

安装成功验证

`webpack -v`

终端会显示

``webpack 5.13.0 ``

``webpack-cli 4.3.1``

本地安装

``npm install --save-dev webpack``

## 配置 `webpack.config.js`,同时要具备模板，入口，出口项

```javascript
let path=require('path')
module.exports={
  mode: 'development',
  entry:'./src/entry.js',
  output:{
    path: path.resolve(__dirname,'dist'),
    filename:'out.js'
  }
}
```

## 开始将entry.js文件输出到dist目录下,生成out.js

```html
<!--index.html-->
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="./out.js"></script>
  <title>webpack start</title>
</head>
<body>
  <h3 id='ted'></h3>
</body>
</html>
```

```javascript
// entry.js
window.onload = function () {
  let core = document.getElementById('ted')
  core.innerHTML = "开始webpack之旅"
  let body = document.body
  let ulist = document.createElement('ul')
  let list = document.createElement('li')
  let txt = document.createTextNode('添加webpack.config.js文件')
  let list1 = document.createElement('li')
  let txt1 = document.createTextNode('配置模块、入口、出口部分')
  let list2 = document.createElement('li')
  let txt2 = document.createTextNode('执行webpack,输出文件到指定目录')
  body.appendChild(ulist)
  ulist.appendChild(list)
  ulist.appendChild(list1)
  ulist.appendChild(list2)
  list.appendChild(txt)
  list1.appendChild(txt1)
  list2.appendChild(txt2)
}
```

`执行webpack，完成输出,成功向index页面添加了内容!`