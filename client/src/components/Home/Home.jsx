import React,{useContext} from 'react';
import UserContext from '../context'
import UserInput from '../UserInput/UserInput'
import UserOutPut from '../UserOutPut/UserOutPut'

import './Home.css';

export default function Home() {

    const {  user } = useContext(UserContext);


    return (
        <div className="home"> 
            <p>home</p>
{user.name|| 'no'}
            <h1>{user.auth ?<UserOutPut/>:<UserInput/>}</h1>
        </div>
    )
}


