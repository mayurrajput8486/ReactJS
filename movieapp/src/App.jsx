import { useState } from 'react'
import axios from 'axios'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const App = () => {
  const [movies,setMovies] = useState([])
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const APIKEY = 'ade6403a'

  const getMovies = async() =>{
    if(!query) return setError('Please Enter Movie Name..')
    setLoading(true)
    setError('')

    try{
      const result = await axios.get(`https://www.omdbapi.com/?apikey=${APIKEY}&s=${query}`)
      console.log(result)
      if(result.data.Response === 'True'){
        setMovies(result.data.Search)
        setError('')
      }else{
        setMovies([])
        setError(result.data.Error)
      }
    }catch(error){
      setError('Someting went wrong.Please Try Again..')
    }finally{
      setLoading(false)
    }

  }

  return (
    <div>
      <div className='bg-dark p-3 text-warning text-center fw-bold'>
          <div className='fs-1 '>
            &#128253;Movies Search App
          </div>
          <div className='w-50 mx-auto mt-4'>
            <input
              type='search'
              placeholder='Type Movie Name....'
              className='form-control w-100'
              onChange={(e)=>setQuery(e.target.value)}
            />
            <button className='btn btn-warning mt-3' onClick={getMovies}>Search</button>
          </div>
      </div>
      <div>
        {loading && <h2>Loading...</h2>}
        {error && <h2 className='text-danger text-center'>{error}</h2>}
      </div>

      <div className='row'>
        {
          movies.map((movie, index)=>{
            return(
              <div className='col-3 bg-secondary text-light' key={index}>
                <div className='text-center'>
                  <img src={movie.Poster} alt={movie.Title} className='w-75'/>
                </div>
                <div className='text-center'>
                  <h4>Movie Title : {movie.Title}</h4>
                  <h5>Movie Type : {movie.Type}</h5>
                  <h5>Year : {movie.Year}</h5>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App