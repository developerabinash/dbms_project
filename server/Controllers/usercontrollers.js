
const { connectToDatabase, sql } = require('../models/model');
exports.getUserData = async(req, res) => {
    const {name,password} = req.body;
    console.log('Received data:');
    await connectToDatabase();
    const result = await sql.query`insert into customer (c_name,c_password) values (${name}, ${password})`;
    const c_id = await sql.query`select top 1 c_id,c_name from customer order by c_id desc`;
    console.log('c_id',c_id);
    res.json({ message: 'Signup successful' ,id:c_id.recordset[0].c_id,username:c_id.recordset[0].c_name});
}
exports.checkUserData = async(req, res) => {
    const {name,password} = req.body;
    console.log('Received data:');
    await connectToDatabase();
    try{
    const result = await sql.query`select c_id,c_name,c_password from customer where c_name=${name} and  c_password=${password}`;
   if(result){
    res.json({ message: 'login successful' ,id:result.recordset[0].c_id,username:result.recordset[0].c_name});
}
}catch(err)
{
    console.log('error',err)
    res.json({ message: 'login unsuccessful'}) 
}
}
exports.getUserOrder = async(req, res) => {
    console.log(req.body)
    const {c_id,name,address,phone,email}=req.body[0]
    const {product_id,quantity,unit_price,total_price}=req.body[1]
    await connectToDatabase();
    const result1 = await sql.query`insert into orders (c_id,name,address,phone,email) values (${c_id},${name}, ${address},${phone},${email})`;
    const ord_id = await sql.query`select top 1 o_id from orders order by o_id desc`;
const o_id=ord_id.recordset[0].o_id;
const result2 = await sql.query`insert into orders_detail (o_id,c_id,product_id,quantity,unit_price,total_price) values (${o_id}, ${c_id},${product_id},${quantity},${unit_price},${total_price})`;
res.json({ message: 'order placed successful'});    

}
exports.updateName = async(req, res) => {
    console.log(req.body);
    const {name,password,c_id} = req.body;
    await connectToDatabase();
    const result=await sql.query`select c_password from customer where c_id=${c_id}`;
    console.log(result)
    const db_password = result.recordset[0].c_password;
    if(name===''||name===null||name===undefined){
        res.json({ message: 'name undefined'});   
    }
    else if(db_password===password&&name!==''&&name!==null&&name!==undefined){
        await sql.query`update  customer set c_name=${name} where c_id=${c_id}`;
        res.json({ message: 'name updated sucessfully',username:name});  
    }
    else{
        res.json({ message: 'incorrect password'});     
    }
}
exports.updatePassword = async(req, res) => {
    console.log(req.body);
    const {o_password,n_password,c_id} = req.body;
    await connectToDatabase();
    const result=await sql.query`select c_password from customer where c_id=${c_id}`;
    console.log(result)
    const db_password = result.recordset[0].c_password;
    if(db_password===o_password){
        await sql.query`update  customer set c_password=${n_password} where c_id=${c_id}`;
        res.json({ message: 'password changed sucessfully'});  
    }
    else{
        res.json({ message: 'incorrect password'});     
    }
}