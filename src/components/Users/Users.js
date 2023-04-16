import React from 'react'
import { useEffect } from 'react'

function Users() {

    const fetchUsers = async () => {
        const response = await fetch('http://localhost:3000/users')
        const dataJson = await response.json()
        console.log(dataJson)
    }

    useEffect(()=>{
        fetchUsers()
    },[])
  return (
    <div>
      <Table/>
    </div>
  )
}

export default Users
