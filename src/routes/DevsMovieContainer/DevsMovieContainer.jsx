import { db } from '../../firebase/firebase_config';
import React, { useEffect, useState } from "react";
import './DevsMovieContainer.css'
import { 
        collection, 
        getDocs, 
        addDoc, 
        updateDoc, 
        deleteDoc, 
        doc 
} from 'firebase/firestore'
import DevsMovie from '../../components/DevsMovie/DevsMovie';
import Creater from './Creater/Creater';

const DevsMovieContainer = () => {
  const [ isLoading, setIsLoading ] = useState(false)
  const [ isAdmin, setIsAdmin ] = useState(false)
  const [ adminsCode, setAdminsCode ] = useState('315920it');
  

  const CheckAdminsCode = (value) => {
   setIsAdmin(true)
  }

  const [ newTitle, setNewTitle ] = useState("")
  const [ newYear, setNewYear] = useState(0)
  const [ newGenres, setNewGenres ] = useState("")
  const [ newPoster, setNewPoster ] = useState("")
  const [ newSummary, setNewSummary ] = useState("")
  const [ newRating, setNewRating ] = useState(0)
  const [ newRuntime, setNewRuntime ] = useState(0)
  const [ newLanguage, setNewLanguage ] = useState('')

  const [ movies, setMovies ] = useState([]);
  const moviesCollectionRef = collection(db, 'movie');

  console.log(collection(db, "movie"))

  const createMovie = async () => {
    await addDoc(moviesCollectionRef, { title: newTitle, year: Number(newYear), runtime: Number(newRuntime), rating: Number(newRating), genres: newGenres, summary: newSummary, language: newLanguage  })
  } 

  
    useEffect(() => {
      const getMovies = async () => {
        setIsLoading(true);
        const data = await getDocs(moviesCollectionRef);
        setMovies(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        setIsLoading(false)
      }

      getMovies()
    }, [])

    useEffect(() => {
      const getMovies = async () => {
        const data = await getDocs(moviesCollectionRef);
        setMovies(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      }

      getMovies()
    }, [])

  return (
    
      <div className='dev-container'>
          <Creater
            setNewTitle={setNewTitle}
            setNewYear={setNewYear}
            setNewSummary={setNewSummary} 
            setNewGenres={setNewGenres} 
            setNewRating={setNewRating} 
            setNewRuntime={setNewRuntime} 
            setNewPoster={setNewPoster} 
            createMovie={createMovie} 
            CheckAdminsCode={CheckAdminsCode}
          />
          {isLoading ? (
                <div className="loader">
                  <div className="spinner"></div>
                </div> 
              ) : (
                <div className="movies">
                  {movies.map((movie) => (
                    <div className="movie">
                      
                        <DevsMovie
                          id={movie.id}
                          poster={movie.poster} 
                          title={movie.title}
                          year={movie.year}
                          genres={movie.genres}
                          rating={movie.rating}
                          summary={movie.summary}
                          language={movie.language}
                          runtime={movie.runtime}
                        />
                      
                    </div> 
                ))}
              </div>
            )}
        </div>
  );
}

export default DevsMovieContainer;




{/* // import { db } from '../../../firebase/firebase-config';
// import React, { useEffect, useState } from "react";
// import "./SignUp.css"
// import {  */}
{/* //         collection, 
//         getDocs, 
//         addDoc, 
//         updateDoc, 
//         deleteDoc, 
//         doc 
// } from 'firebase/firestore'






// function SignUp () { */}
{/* //   const [ newName, setNewName ] = useState("")
//   const [ newAge, setNewAge] = useState(0)
//   const [ newPassword, setNewPassword ] = useState("")

//   const [ users, setUsers ] = useState([]);
//   const usersCollectionRef = collection(db, 'users');


//   const createUser = async () => {
//     await addDoc(usersCollectionRef, { name: newName, password: newPassword, age: Number(newAge)  })
//   }  */}

{/* //   const updateUser = async (id, age) => {
//     const userDoc = doc(db, 'users', id);
//     const newFields = {age: age + 1};
//     await updateDoc(userDoc, newFields);
//   } 

//   const deleteUser = async (id) => {
//     const userDoc = doc(db, 'users', id);
//     await deleteDoc(userDoc);
//   }

//   useEffect(() => {
//     const getUsers = async () => {
//       const data = await getDocs(usersCollectionRef);
//       setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
//     }

//     getUsers()
//   }, [])

//   return (
//     <div className="app">

//       <input 
//         placeholder="Name..." 
//         onChange={(e) => {
//           setNewName(e.target.value)
//         }}
//       />
//       <input 
//         placeholder="Password..." 
//         onChange={(e) => {
//           setNewPassword(e.target.value)
//         }}
//       />
//       <input 
//         type="number" 
//         placeholder="Age..."
//         onChange={(e) => {
//           setNewAge(e.target.value)
//         }}
//       />
//       <button onClick={createUser}>Create user</button>
//       {users.map((user) => {
//         return (
//           <div> 
//              {" "}
//              <h1>Name: {user.name}</h1>
//              <h1>Age: {user.age}</h1>
//              <h1>Password: {user.password}</h1>
//              <button
//               onClick={() => {
//                 updateUser(user.id, user.age)
//               }}
//              >
//               {" "}
//               Increas Age
//              </button>
//              <button 
//               onClick={() => {
//                 deleteUser(user.id)
//               }}
//              >Delete User</button>
//           </div>
//         ); 
//       })}

      
//     </div>
//   );

  
// }

// export default SignUp; */}
