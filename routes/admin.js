var express = require('express');
const { render }= require('../app');
const productHelp = require('../helpers/product-help');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:"shop now",
      price:"aed 88",
      description:"Wear your quirky thoughts",
      image:"https://10d06a4d12b851f1b2d5-6729d756a2f36342416a9128f1759751.ssl.cf3.rackcdn.com/1000005064985-Drs203-Red-Fuchsia-1000005064985_01-517.jpg"
    },
    {
      name:"shop now",
      price:" 75 aed",
      description:"fashin for every one",
      image:"https://www2.splashfashions.com/in/sites/default/files/Homepage-Inbanner-Styles-02.jpg" 
    },
    {
      name:"shop now",
      price:"Under AED 999",
      description:"great value store",
      image:"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/pre-landing-Women-03Jan2020.jpg"
    },
    {
      name:"shop now",
      price:"55 aed",
      description:"fashion favorites",
      image:"https://www2.splashfashions.com/in/sites/default/files/Homepage-Inbanner-Styles-01.jpg"
    }
  ]
  res.render('admin/view-products',{admin:true,products})
  
});
router.get('./add-product',function(req,res){
  res.render('admin/add-product')
  console.log(res.body);
})
router.post('./add-product',(req,res)=>{
  console.log(res.body);
  console.log(res.files.Image);

  productHelp.addProduct(req.body,(result)=>{
    let image=req.files.Image
    image.mv('../public/product-images'+id+'.jpg',(err,done)=>{
      if(!err){
        res.render("admin/add-product")
       }
    })
    
  })
})
module.exports = router;
