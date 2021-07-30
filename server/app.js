const fastify=require('fastify')();
const express=require('fastify-express')
const PORT= process.env.PORT||5001;
fastify.register(require('./routes/router'))
fastify.register(express)
const start= async ()=>
{
    if(process.env.NODE_ENV=="production"){
        fastify.use(express.static('client/build'))
            const path=require('path')
            fastify.get("*",(req,res)=>{
                res.sendFile(path.resolve(__dirname,'client','build','index.html'))
            })
            }
    try 
    {
        await fastify.listen(PORT);
        console.log("Server Running on Port ",PORT);    
    } 
    catch (error) 
    {
        fastify.log.error(error);
        process.exit(1);
    }
}
start();