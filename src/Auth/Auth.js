import { LemmyHttp, Login } from 'lemmy-js-client';
import { useContext, useState } from 'react';

const Auth = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleUNameChange = event => {
        setUsername(event.target.value);
    };    
    const handlePassChange = event => {
        setPassword(event.target.value);
    };

    const doLogin = async () => {
        let baseUrl = 'https://lemm.ee';
        let client = new LemmyHttp(baseUrl, LemmyHttp.headers);
        let loginForm = {
            username_or_email: username,
            password: password,
        };
        client.login(loginForm).then(
            (resp) => { localStorage.setItem("neon_token", resp.jwt) },
            (error) => { console.log(error) }
        );
    }

    return (
        <div>
            <p>Hello</p>
            <input  type="text" 
                    placeholder='username'
                    onChange={handleUNameChange}
                    value={username}>
            </input>
            <input  type="password" 
                    placeholder='password'
                    onChange={handlePassChange}
                    value={password}>
            </input>
            <button onClick={doLogin}>Login</button>
        </div>
    )
}


export default Auth