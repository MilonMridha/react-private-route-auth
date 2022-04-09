import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';


const auth = getAuth(app)

const Login = () => {

    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(() =>{
            navigate(from,  { replace: true })
        })
    }
    return (
        <div>

            <h4>Welcome to login page</h4>
            <button onClick={handleGoogleSignIn}>SignIn with Google</button>
            <br />
            <br />
            <input type="text" placeholder='email' />
            <br />
            <input type="password" name="" id="" placeholder='password' />
            <br />
            <button>Login</button>
        </div>
    );
};

export default Login;