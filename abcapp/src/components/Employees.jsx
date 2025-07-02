import axios from "axios"
import { useEffect, useState } from "react"
const Employees = () => {
    const [emp, setEmp] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const getData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            //console.log(response)

            const result = await response.data
            //console.log(result)
            setEmp(result)
        } catch {
            setError('Failed to Fetch')
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <h2>Employees datails </h2>
            {
                loading ? <h3>loading...</h3> : error ? (<h3>{error}</h3>) : (
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Sr.No</th>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    emp.map((e, index) => {
                                        return (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{e.name}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                )
            }

        </div>
    )
}

export default Employees