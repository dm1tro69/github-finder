import React, {FC} from 'react';
import {UsersType} from "../../types";
import {Link} from "react-router-dom";

type UserItemType = {
    user: UsersType
}

const UserItem:FC<UserItemType> = ({user}) => {
    return (
        <div className={'card shadow-md compact side bg-base-100'}>
            <div className={'flex-row items-center space-x-4 card-body'}>
               <div>
                  <div className={'avatar'}>
                      <div className={'rounded-full shadow w-14 h-14'}>
                          <img src={user.avatar_url} alt="avatar"/>
                      </div>
                  </div>
               </div>
                <div>
                  <h2 className={'card-title'}>{user.login}</h2>
                    <Link className={'text-base-content text-opacity-40'} to={`/users/${user.login}`}>Visit Profile</Link>
                </div>
            </div>

        </div>
    );
};

export default UserItem;
