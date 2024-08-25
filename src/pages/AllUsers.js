import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/base';

const AllUsers = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(`${BASE_URL}/users`).then((response) => {
            response.json().then((postDetails) => {
                setUsers(postDetails);
                // console.log(postDetails)
            });
        });
    }, []);
    console.log(users)
    return (
        <div>AllUsers
            <div>
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Emails</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, i) => (
                                <tr key={user.id}>
                                    <th scope="row">{i +1 }</th>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllUsers