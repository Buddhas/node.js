
//这里创建了file文件和文件夹，首先输出的是file文件下的模块
const file = require('./file')

//不是路径开头的直接到node_modules下找
const modules = require('modules')
modules.modules()
