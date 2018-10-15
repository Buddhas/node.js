process.nextTick(()=>{
    console.log('nettick延迟执行一')
})
process.nextTick(()=>{
    console.log('nettick延迟执行二')
})
setImmediate(()=>{
    console.log('setImmediate延迟执行一')
    process.nextTick(()=>{
        console.log('强势插入')
    })
})

setImmediate(()=>{
    console.log('setImmediate延迟执行二')
})