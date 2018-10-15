const fs = require('fs')
const path = require('path')
const url = path.join(`${__dirname}`,'1')

//同步写入
{
    fs.writeFileSync(url,'我是同步写入')
}

