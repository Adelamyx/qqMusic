# qqmusic

> A Vue.js project
>参考：
> [vue-music-rainjoy](https://github.com/zhouyu1993/vue-music-rainjoy)
[song--vue](https://github.com/Verazzr/song--vue)

## 1.环境搭建
[搭建Vue脚手架](http://www.jianshu.com/p/1626b8643676)
```
1.安装node.js成功后,输入node -v，如果出现相应的版本号，则说明安装成功
2.装淘宝镜像成功后，输入cnpm -v，如果出现相应的版本号，则说明安装成功
3.安装webpack，打开命令行工具输入：npm install webpack -g，安装完成之后输入 webpack -v，如下图，如果出现相应的版本号，则说明安装成功。
4.安装vue-cli脚手架构建工具，打开命令行工具输入：npm install vue-cli -g，安装完成之后输入 vue -V（注意这里是大写的“V”），如果出现相应的版本号，则说明安装成功。
```
## 2.vue-cli来构建项目
```
1.cd 目录路径(存放项目的目录，自己定)
2.安装vue脚手架输入：vue init webpack exprice ，注意这里的“exprice” 是项目的名称可以说是随便的起名，但是需要主要的是“不能用中文”。
3.cd exprice（这里是自己建工程的名字）
4.安装项目依赖：npm install，因为自动构建过程中已存在package.json文件，所以这里直接安装依赖就行。不要从国内镜像cnpm安装(会导致后面缺了很多依赖库)，但是但是如果真的安装“个把”小时也没成功那就用：cnpm install 吧
5.安装 vue 路由模块 vue-router 和网络请求模块 vue-resource，输入：cnpm install vue-router vue-resource --save。

```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
