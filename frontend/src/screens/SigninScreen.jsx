import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { signin } from '../actions/userActions';
import {useNavigate} from "react-router-dom"
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

const SigninScreen = (props) => {

    const dispatch=useDispatch();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const navigate = useNavigate();

    const redirect=location.search ? location.search.split('=')[1]:'/';


    const userSignin=useSelector((state)=>state.userSignin);
    const {userInfo,loading,error}=userSignin;

    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(signin(email,password));
    }

    useEffect(()=>{
        if(userInfo){
            navigate(redirect);
        }
    },[userInfo]);

    return (
        <div>
            <form className='form' onSubmit={submitHandler}>
                <div>
                    <h1>Sign In</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <div>
                    <label htmlFor='email'>Email address</label>
                    <input type="email" id='email' placeholder='Enter email' required onChange={e =>setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type="password" id='password' placeholder='Enter Password' required onChange={e =>setPassword(e.target.value)}/>
                </div>
                <div>
                    <label/>
                    <button className='primary' type='submit'>Sign In</button>
                </div>
                <div>
                    <label/>
                    <div>
                        New customer? {' '} <Link to={`/register?redirect=${redirect}`}>Create youar account</Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SigninScreen;