/* import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from "axios"
import { useEffect, useState } from 'react'
const App = () => {

  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const API_KEY = '605f350c'

  const getMovies = async () =>{
    try{
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
      console.log(response)

      response.data.Response === 'True' ? setMovies(response.data.Search) : setError(res.data.Error)
    }catch(error){
      setError('Something went wrong. Please try again.');
    }finally{
      setLoading(false);
    }
    
  }
  useEffect(()=>{
    getMovies()
  },[])
  return (
    <div>
      
    </div>
  )
}

export default App */
/*
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from "axios"
import { useState } from 'react'

const App = () => {
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const API_KEY = '605f350c'

  const getMovies = async () => {
    if (!query) return setError('Please enter a movie name');
    setLoading(true);
    setError('');

    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
      console.log(response)
      if (response.data.Response === 'True') {
        setMovies(response.data.Search);
        setError('');
      } else {
        setMovies([]);
        setError(response.data.Error);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <div className="fs-1 fw-bold text-center mt-3">
        🎬 Movies Search App
      </div>

      <div className='bg-dark text-center w-75 rounded-2 mx-auto mt-3 p-4'>
        <input 
          type='search'
          className='form-control'
          placeholder='Enter Movie Name'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className='btn btn-outline-warning mt-3' onClick={getMovies}>Search</button>
      </div>

      <div className='mt-4 text-center'>
        {loading && <h2>Loading...</h2>}
        {error && <h4 className='text-danger'>{error}</h4>}
      </div>

      <div className="row mt-4">
        {movies.map((movie, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow">
              <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
              <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">Year: {movie.Year}</p>
                <p className="card-text">Type: {movie.Type}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App */

import axios from "axios"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react"

const App = () => {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('')

  const APIKEY = '605f350c'
  const getMovies = async () => {

    if (!query) return setError('Please Enter Movie Name')
    setLoading(true)
    setError('')
    try {
      const res = await axios.get(`https://www.omdbapi.com/?apikey=${APIKEY}&s=${query}`)
      console.log(res)
      if (res.data.Response === 'True') {
        setMovies(res.data.Search)
        setError('')
      } else {
        setMovies([])
        setError(res.data.Error)
       
      }
    } catch (error) {
      setError('Something went wrong')
    } finally {
      setLoading(false)
    }


  }
  return (
    <div className="container">
      <div className="bg-primary p-4 text-center w-50 mx-auto rounded-3">
        <h1>Movies Search App</h1>
        <input
          type="text"
          className="mt-3 form-control"
          placeholder="Type Movie Name and click on search.."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="mt-3 btn btn-warning" onClick={getMovies}>Search</button>
      </div>

      <div className="text-danger text-center">
        {loading && <h3>Loading...</h3>}
        {error && <h4 className='text-danger'>{error}</h4>}
      </div>

      <div className="row mt-4">
        {
          movies.map((movie, index) => {
            return (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100 shadow">
                  <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
                  <div className="card-body">
                    <h5 className="card-title">{movie.Title}</h5>
                    <p className="card-text">Year: {movie.Year}</p>
                    <p className="card-text">Type: {movie.Type}</p>
                  </div>
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
