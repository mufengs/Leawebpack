/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
eval("window.onload = function () {\r\n  let core = document.getElementById('ted')\r\n  core.innerHTML = \"开始webpack之旅\"\r\n  let body = document.body\r\n  let ulist = document.createElement('ul')\r\n  let list = document.createElement('li')\r\n  let txt = document.createTextNode('添加webpack.config.js文件')\r\n  let list1 = document.createElement('li')\r\n  let txt1 = document.createTextNode('配置模块、入口、出口部分')\r\n  let list2 = document.createElement('li')\r\n  let txt2 = document.createTextNode('执行webpack,输出文件到指定目录')\r\n  body.appendChild(ulist)\r\n  ulist.appendChild(list)\r\n  ulist.appendChild(list1)\r\n  ulist.appendChild(list2)\r\n  list.appendChild(txt)\r\n  list1.appendChild(txt1)\r\n  list2.appendChild(txt2)\r\n}\n\n//# sourceURL=webpack://leawebpack/./src/entry.js?");
/******/ })()
;