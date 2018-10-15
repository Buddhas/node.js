const fs = require('fs')
const path = require('path')
const url = path.join(`${__dirname}`,'1')

//同步写入
{
    fs.writeFileSync(url,'我是同步写入')
}

//异步写入
{
    fs.writeFile(url,'我是异步写入',(err,data)=>{
        if(!err){
            console.log('异步写入成功')
        }
    })
}
//两种方法会擦除原来的内容
