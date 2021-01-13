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