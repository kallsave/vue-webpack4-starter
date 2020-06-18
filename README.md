# vue-cli2升级到webpack7, babel7模板

## 前言
- vue-cli2和vue-cli3都是非常优秀的cli,vue-cli2有着webpack3的最佳实践,
而vue-cli3更是升级到了webpack4和babel7,带来了更多的性能优化方案

- 然而vue-cli3不再暴露出webpack的配置,而是通过vue.config.js去添加插件的方式,这确实能降低框架使用的门槛.但是有时候也需要更改某些依赖配置或者进一步提升性能,就会觉得vue-cli3碍手碍脚.

- 所以这个模板就应运而生了.既保持vue-cli2的项目结构,又结合了vue-cli3带来的优化功能

## webpack4重要的更新
- 1. webpack-cli被独立出来,需要和webpack分开安装
- 2. mode: 可选值['development', 'production'],会分别设置process.env.NODE_ENV为['development', 'production'],考虑到项目环境很多,不采用这种方式设置环境变量,使用cross-env设置process.env.NODE_ENV.
在production模式下会压缩打包出来的代码,这个特性可以去掉vue-cli2的一些压缩插件
- 3. 废弃了CommonsChunkPlugin,采用了optimization新的API
- 4. 新的css提取插件mini-css-extract-plugin,让css也可以做分割加载

## babel7重要的更新
- 1. babel7的包以@babel开头
- 2. babel7带来了"useBuiltIns": "usage",这个属性会根据配置的browsers去core-js里面按需加载全局垫片polyfill。而babel6是通过babel-plugin-transform-runtime来自动按需加载局部垫片(不污染全局API而是使用沙箱模式),但是babel6无法编译类似Array.includes这种API
- 3. babel7的一些插件依然没有,有时候要同时使用babel7和babel6的插件

## 最后
- 由于wepback,babel的插件更新频繁和本人水平有限,模板报错和优化欢迎issue,pr.
- star让更多人来维护下去

