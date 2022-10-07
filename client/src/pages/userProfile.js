import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from '@apollo/client';

import {USER_QUERY, QUERY_ME} from '../utils/queries';
import Auth from '../utils/Authentication'

const UserProfile = () => {
    const {name: userParam} = useParams();
    // load data from graphql

    const {loading, data} = useQuery(userParam ? USER_QUERY : QUERY_ME, {
        variables: {name: userParam},
    })
    const User = data?.me || data?.user || data
    console.log(User)

    if(Auth.loggedIn() && Auth.getUser().data.name === userParam) {
        return <Navigate to="/me" />
    }

    if(loading) {
        return <div>Loading ...</div>
    }

    if(!user?.name) {
        return (
            <h4>Please log in to see content !</h4>
        );
    }


    return (
       <div>
            <div className="flex-row justify-center">
                <h4>Viewing {userParam ? `${User.name}'s` : 'your'} profile</h4>

            </div>
       </div>
    )
}

export default UserProfile;