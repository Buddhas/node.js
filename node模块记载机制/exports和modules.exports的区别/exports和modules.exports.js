exports.area = () =>{
    console.log('我是exports.area')
}
module.exports.area = ()=>{
    console.log('我是modules.exports.area')
}
console.log(exports === module.exports)