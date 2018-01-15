import auth0 from 'auth0-js';

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain:"accimeesterlin.auth0.com",
        clientID:"2ESI8M39WEteSxMjXO3U6jPuaDIpaTkr",
        redirectUri:"http://localhost:3000/dashboard",
        // audience:"https://YOUR_AUTH0_DOMAIN/userinfo",
        responseType:"token id_token",
        scope:"openid"
    });


    login(){
        this.auth0.authorize();
    }
};