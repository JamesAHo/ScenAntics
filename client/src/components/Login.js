import React, {UseState} from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN_QUERY } from '../utils/queries';
import {Auth} from "../utils/Authentication"
import Header from '../components/Header';
import Login from '../components/Login';

export default function LoginPage(){
    return(
        <>
            
            <Login/>
        </>
    )
}