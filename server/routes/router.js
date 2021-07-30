const { Blob } = require('buffer');
const fs =require('fs');
const PDFDoc=require('pdfkit');
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: "yash06",
    api_key: "424976527633366",
    api_secret: "w6Sve3oCCp0zoPdGEaTk5vtc6qs",
});
const Router = async (fastify,options,done)=>{
    fastify.post('/upload-resume',async (req,res)=>{
       const {name,mailid,experience,education,skills,salary,portfolio}=req.body;
       const edu=education.split(",");
       const skill=skills.split(',');
       try 
       {
            const doc=new PDFDoc();
            doc.pipe(fs.createWriteStream('client/src/screens/report.pdf'))
            doc 
            .fontSize(20)
            .text('Resume File',110,60)
            .fontSize(15)
            .moveDown()
            var docname='Name: '+name;
            var docmail='Mail Id: '+mailid;
            var docexp='Experience: '+experience;
            var docedu='Education: \n';
            var docskill='Skills: \n';
            var docsal='Current CTC: '+salary;
            var docport='Personal Wesite: '+portfolio;
            var count=1;
            for(var i of edu)
            {
                docedu+='       '+count+'. '+i+'\n';
                count+=1;
            }
            count=0;
            for (var i of skill)
            {
                count+=1;
                docskill+='       '+count+'. '+i+'\n';
            }
            doc.text(docname);
            doc.text(docmail)
            doc.text(docexp)
            doc.text(docedu)
            doc.text(docskill)
            doc.text(docsal)
            doc.text(docport)
            doc.end();
            try 
            {
                var result;
                try {
                    result =  await cloudinary.uploader.upload('client/src/screens/report.pdf',{format:"jpg"});
                }catch(err)
                {
                    console.log(err);
                }
                console.log(result.secure_url);
                var data1=''+result.secure_url;
                console.log(typeof(data1));
                if (data1.length !== 0)
                res.code(201).send(JSON.stringify(data1));
                else
                {
                    "Print Gaii....."
                }
              } catch (err) {
                console.error(err)
              }
       } 
       catch(error) 
       {
            console.log(error);
       }
    })
    done();
}
module.exports=Router;