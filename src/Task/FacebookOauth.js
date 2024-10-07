import React, { useState } from 'react';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { LoginSocialFacebook } from 'reactjs-social-login';

const FacebookOauth = ({ onSuccess }) => {
    const [profile, setProfile] = useState(null);

    return (
        <div>
            {!profile ? (
                <LoginSocialFacebook
                    appId="458756252885064"
                    onResolve={(response) => {
                        console.log(response);
                        setProfile(response.data);
                        onSuccess(response.data); 
                    }}
                    onReject={(error) => {
                        console.log(error);
                    }}
                >
                    <FacebookLoginButton />
                </LoginSocialFacebook>
            ) : (
                <p>Logged in as: {profile.name}</p>
            )}
        </div>
    );
};

export default FacebookOauth;
