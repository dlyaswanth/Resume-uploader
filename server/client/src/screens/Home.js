import React from 'react'
import GoogleLogin from 'react-google-login'
import {useHistory} from 'react-router'
import M from 'materialize-css'
function Home()
{
    const history=useHistory('');
    function login()
    {
        M.toast({html:"Logged In ",classes:"green"});
        history.push('/upload-resume');
    }
    function failure()
    {
        M.toast({html:"Error Occured in login",classes:"red"});
        history.push('/');
    }
    return (
        <div className="card">
            <div className="card-body">
                <h5>Sign in with</h5>
                <br /> <br />
                <GoogleLogin 
                className="googlelogin"
                width='800px'
                clientId='' //use user client id 
                buttonText='Login with Google'
                onSuccess={()=>login()}
                onFailure={()=>failure()}
                />
            </div>
        </div>
    )
}
export default Home;
