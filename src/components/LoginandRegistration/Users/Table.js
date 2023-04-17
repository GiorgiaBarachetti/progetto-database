import React from 'react'
import apiUsers from '../../../apiUsers.json'

const users = apiUsers.users;

function Table() {
  return <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>MAIL</th>
                        </tr>
                    </thead>
                    <tbody>
                            {users.map((user, index) => {
                                    <tr key={index}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                    </tr>
                            })}
                        
                    </tbody>
                </table>
}

export default Table
