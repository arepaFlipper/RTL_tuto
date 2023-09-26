import { useState, useEffect } from 'react'

const Users = () => {
  const [users, setUsers] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    ;(async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users',
        )
        const data = await response.json()
        setUsers(data.map((user: { name: string }) => user.name))
      } catch (error) {
        console.log(
          `⚗️ %cUsers.tsx:13 - error`,
          'font-weight:bold; background:#40bf00;color:#fff;',
        )
        console.log(error)
        setError('Error fetching users')
      }
    })()
  }, [])
  return (
    <div>
      <h1>Users</h1>
      {error && <p>{error}</p>}
      <ul>
        {users.map((user) => {
          return <li key={user}>{user}</li>
        })}
      </ul>
    </div>
  )
}

export default Users
