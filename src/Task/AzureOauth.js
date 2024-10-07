import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider, useMsal, useIsAuthenticated } from "@azure/msal-react";
import { Button } from "@mui/material";
const msalConfig = {
    auth: {
        clientId: "YOUR_AZURE_CLIENT_ID",
        authority: "https://login.microsoftonline.com/common",
        redirectUri: "http://localhost:3000",
    },
};
const pca = new PublicClientApplication(msalConfig);

const AzureOauth = () => {
    const { instance } = useMsal();
    const isAuthenticated = useIsAuthenticated();
    const loginHandler = () => {
        instance.loginPopup().then(response => {
            console.log(response);
        }).catch(error => {
            console.log('Login failed:', error);
        });
    };
    return (
        <div>
            {!isAuthenticated && <Button onClick={loginHandler}>Login with Azure</Button>}
        </div>
    );
};
export default () => (
    <MsalProvider instance={pca}>
        <AzureOauth />
    </MsalProvider>
);