## JS压缩

```javascript
module.exports = {
  mode: 'production'
};
```

`mode:'production'`,指的是整个项目处于生产模式下，执行 `webpack` , 则自动输出压缩的JS代码(在当前最新的webpack版本下)

## CSS打包

安装解析css使用的loader

`npm install --save-dev css-loader` , 它是用来处理css文件中的url()

`npm install --save-dev style-loader` , 它是用来将css插入到页面的style标签

配置webpack.config.js文件

```javascript
module:{
    rules:[
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
```
将css文件引入到项目入口文件，在之后的执行过程中css相关的loader会将css解析为js模块一块输出到和入口文件对应的出口文件上

```javascript
//entry.js，引入css,之后css将被解析为js模块，输出到指定目录的entry.js中
import index from  './index.css';
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

## HTML发布

一般情况下，所有的工程文件(包含html文件）都放在src目录下，项目完成后，作为发布版本所有文件要放到dist目录下，所以需将index.html文件放回src目录下，并且该html文件不必再引入js

在webpack中，要实现html的指定输出，要进行特别的配置，然后通过`webpack`指令打包，项目会自动分析所有入口文件同时在输出时自动引入到最终的页面的js模块中

安装开发依赖 `html-webpack-plugin`

**~~`npm install --save-dev html-webpack-plugin`~~ , 正常方式安装的版本会引起报错**

`npm install --save-dev html-webpack-plugin@5.0.0-alpha.9`,安装此特定版本方可正常使用

添加webpack.config.js配置

```javascript
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ],
```
项目完成后，可以正常地输出
