import React, {useEffect, useState, useContext} from 'react';
import {UsersType} from "../../types";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";

const UserResults = () => {

     // @ts-ignore
    const {users, searchUsers, loading} = useContext(GithubContext)

    // useEffect(() => {
    //     fetchUsers()
    // }, [])


    if (!loading){
        return (
            <div className={'grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 h-auto'}>
                {users.map((user: UsersType) => {
                    return (
                        <UserItem key={user.id} user={user}/>
                    )
                })}
            </div>
        );
    }else {
        return <Spinner/>
    }


};

export default UserResults;
