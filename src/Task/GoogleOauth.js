import React from 'react'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';


const GoogleOauth = ({ onSuccess }) => {
    return (
        <div>
            <GoogleOAuthProvider clientId="338796880909-ig7dp6qbpi7grd85fdoqd93ol8kcqr0b.apps.googleusercontent.com">
                <GoogleLogin
                    onSuccess={(credentialResponse) => {
                        console.log(credentialResponse);
                        onSuccess(credentialResponse);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </GoogleOAuthProvider>
        </div>
    )
}

export default GoogleOauth