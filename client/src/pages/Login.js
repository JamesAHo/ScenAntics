import React, {UseState} from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN_QUERY } from '../utils/queries';
import {Auth} from "../utils/Authentication"
import Header from '../components/Header';

export default function LoginPage(){
    return(
        <>
            <Header
                heading = "Please login"
                paragraph = "If you don't have an account please signup."
                linkName = "Signup"
                linkUrl = "/signup"
                />
        </>
    )
}