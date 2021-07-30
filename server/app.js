const fastify=require('fastify')();
const PORT= process.env.PORT||5001;
fastify.register(require('./routes/router'))
const start= async ()=>
{
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