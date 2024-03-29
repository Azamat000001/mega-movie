import React, { useState } from 'react'
import './Creater.css'

const Creater = ({setNewTitle, setNewYear, setNewSummary, setNewGenres, setNewRating, setNewRuntime, setNewPoster, createMovie, CheckAdminsCode}) => {
  const [ isAdmin, setIsAdmin ] = useState(false)
  return (
    <div className='creater'>
            { isAdmin ? (
                <div className=' creater_movie'>
                  <h1>you can recommend movies</h1>
                  <h1>to other users</h1>
                  <input 
                      placeholder="Title..." 
                      onChange={(e) => {
                      setNewTitle(e.target.value)
                    }}
                  />
                  <input 
                      type="number"
                      placeholder="Year..." 
                      onChange={(e) => {
                      setNewYear(e.target.value)
                    }}
                  />
                  <input  
                      placeholder="Summary..."
                      onChange={(e) => {
                      setNewSummary(e.target.value)
                    }}
                  />
                  <input 
                    type="number" 
                    placeholder="raiting..."
                    onChange={(e) => {
                      setNewRating(e.target.value)
                    }}
                  />
                  <input
                  type="number" 
                  placeholder="runtime..."
                  onChange={(e) => {
                    setNewRuntime(e.target.value)
                  }}
                  />
                  <input  
                      placeholder="Poster..."
                      onChange={(e) => {
                      setNewPoster(e.target.value)
                    }}
                  />
                  <button onClick={createMovie}>Create Movie</button>
                  <p>Recommend your favorite movies to other users</p>
                  <p>after creating the movie, refresh the page</p>
              </div>
            
            ) : (
              <div className='creator_movie'>
                <h1>To stay Admin</h1>
                <h1>Enter 12 digit code</h1>

                <input
                  id="input"
                  type="password"
                  placeholder='Enter code :)'
                //   onChange={(value) => {
                //     CheckAdminsCode(value)
                //   }}
                />
                <input
                  id="btn"
                  type="button"
                  placeholder='check code'
                  onClick={CheckAdminsCode()}
                />
                <button   onClick={setIsAdmin(true)}></button>
              </div>
            ) }
          </div>
  )
}

export default Creater
