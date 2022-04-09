import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';


const auth = getAuth(app);
const Orders = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h4>This is order page</h4>
            <p> {user? user.displayName : 'Nobody else'} </p>
        </div>
    );
};

export default Orders;