import React from "react";
import h from './Users.module.css'
import UserPhoto from '../../imgg/humo.jpeg'
import {NavLink} from "react-router-dom";

let Users = (props) => {
    {
        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span className={props.currentPage === p && h.selected}
                                     onClick={() => {
                                         props.onPageChange(p);
                                     }}>{p}</span>
                    })}
                </div>

                {
                    props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : UserPhoto} className={h.photo}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => {
                                props.unfollow(u.id)
                            }}>UnFollow</button>
                            : <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                        </span>
                    </span>
                    </div>)
                }
            </div>

        );
    }
}

export default Users;