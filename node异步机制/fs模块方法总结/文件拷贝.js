const fs = require('fs')
const path = require('path')
const url = path.join(`${__dirname}`,'1')

//同步拷贝
{
    fs.copyFileSync(url,'2.txt')
}

//异步拷贝
{
    fs.copyFile(url,'2.txt',(err,data)=>{
        console.log('异步拷贝成功')
    })
}
