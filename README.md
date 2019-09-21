const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/restro100').then(()=>
console.log('connected to mongoDb')).catch(error=>error)

//schema
const menuSchema=new mongoose.Schema({
itemName:String,
price:String,
description:String,
menuType:String

})

//create model
const Menu =mongoose.model('Menu',menuSchema)


async function craeteMenu(item_name,price,description)
{
    const menu= new Menu({
        itemName:item_name,
        price:price,
        description:description,
        menuType:'main course'

    
    })
    const result=await menu.save()
    console.log(result)
    return "menu saved"

}
craeteMenu()
//fetch menu data 

async  function getMenu()
{
    const menus = await Menu.find()
    console.log(menus)
}
getMenu()
module.exports.craeteMenu=craeteMenu;
