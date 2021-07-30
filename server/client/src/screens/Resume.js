import React, { useState }  from 'react';
function Resume()
{
    const [name,setName]=useState('');
    const [mailid,setMailid]=useState('');
    const [experience,setExperience]=useState('');
    const [education,setEducation]=useState('');
    const [skills,setSkills]=useState('');
    const [salary,setSalary]=useState('');
    const [url,setUrl]=useState('');
    const [link,setLink]=useState('');
    function submit()
    {
        fetch('/upload-resume',{
            method:'post',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                name,
                mailid,
                experience,
                education,
                skills,
                portfolio:url,
                salary,
            })
        })
        .then(res=>res.json())
        .then(res=>setLink(res));
    }
    return (
        <div className="card white form">
            <br/>
            <h5 style={{textAlign:"center"}}>Enter the fields</h5>
            <br />
            <div className="content">
            <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Name </span>
                </div>&nbsp;&nbsp;
                <input type="text" className="form-control" value={name}  onChange={(eve)=>setName(eve.target.value)} />
             </div>
             <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Mail Id </span>
                </div>&nbsp;&nbsp;
                <input type="email" className="form-control" value={mailid}  onChange={(eve)=>setMailid(eve.target.value)}/>
             </div>
             <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Education</span>
                </div>&nbsp;&nbsp;
                <textarea  className="form-control" value={education}  onChange={(eve)=>setEducation(eve.target.value)}/>
             </div>
             <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Experience </span>
                </div>&nbsp;&nbsp;
                <input type="text" className="form-control" value={experience}  onChange={(eve)=>setExperience(eve.target.value)}/>
             </div>
             <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Skills </span>
                </div>&nbsp;&nbsp;
                <input type="text" className="form-control" value={skills}  onChange={(eve)=>setSkills(eve.target.value)}/>
             </div>
             <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Current CTC </span>
                </div>&nbsp;&nbsp;
                <input type="text" className="form-control" value={salary}  onChange={(eve)=>setSalary(eve.target.value)}/>
             </div>
             <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Portfolio Site</span>
                </div>&nbsp;&nbsp;
                <input type="text" className="form-control" value={url}  onChange={(eve)=>setUrl(eve.target.value)} placeholder="https://example.com"/>
             </div>
             <button type="button" className="btn btn-primary submit" onClick={()=>submit()}>Submit</button> <br /><br />
             <a href={link} download="true" ><button type="button" className="btn btn-primary submit" >Download</button></a>
             <br />
             </div>
             <br />
             <b><em>&nbsp;&nbsp;&nbsp;&nbsp;*Note : Skills and Education Separated by comma's.</em></b>
             <br />
        </div>
    )
}
export default Resume;