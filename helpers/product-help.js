var db=require('../config/connection')
var collections=require('../config/collections')
module.exports ={
    addProduct:(product)=>{
        console.log(product);

        db.get().collection('product').insertOne(product).then((data)=>{
            console.log(data.ops[0]._id)
            callback(data)
        })
    }
}