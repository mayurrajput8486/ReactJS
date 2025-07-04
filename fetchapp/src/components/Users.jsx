import axios from 'axios'
import { useEffect, useState } from 'react'
const Users = () => {
    const [users, setUsers] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const getData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')

            console.log(response)

            const result = response.data
            console.log(result)
            setUsers(result)
        } catch (error) {
            console.log('Error while fetching data. Please check url once...')
            setError('Error while fetching data. Please check url once...')
        } finally {
            setLoading(false)
        }

    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <h2 className="text-center">Users Details</h2>
            {
                loading ? (<h2>Loading...</h2>) : error ? (<h3 style={{ color: 'red' }}>{error}</h3>) : (
                    <table className='table table-dark'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>username</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>Zipcode</th>
                                <th>Contact</th>
                                <th>Company</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.address.street}</td>
                                            <td>{user.address.city}</td>
                                            <td>{user.address.zipcode}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.company.name}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                )
            }
        </div>
    )
}

export default Users