var db=require('../config/connection')
var collections=require('../config/collections')
const bcrypt= require('bcrypt')
module.exports ={
    doSignup:(userData)=>{
        return new Promise(async(resolve,reject)=>{
            userData.Password=await bcrypt.hash(userData.Password,10)
            db.get().collection(collections.USER_COLLECTION).insertOne(userData).then((data)=>{
                console.log(data.ops[0])
            resolve(data.ops[0])
            })

        })
        
    },
    doLogin:(userData)=>{
        return new Promise(async (resolve,reject)=>{
            let loginstatus=false
            let response={}
            let user=await db.get().collection(collections.USER_COLLECTION).findOne({Email:userData.Email})
            if(user){
                bcrypt.compare(userData.Password,user.Password).then((status)=>{
                    if(status){
                        console.log("login success");
                        response.user=user
                        response.status=true 
                        resolve(response)
                    }else{
                        console.log('login failed');
                        resolve({status:false})
                    }
                })
            }else{
                console.log("login failed");
                resolve({status:false})
            }
        }) 
        
    }
}     