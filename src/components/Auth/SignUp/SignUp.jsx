// import { db } from '../../../firebase/firebase-config';
// import React, { useEffect, useState } from "react";
// import "./SignUp.css"
// import { 
//         collection, 
//         getDocs, 
//         addDoc, 
//         updateDoc, 
//         deleteDoc, 
//         doc 
// } from 'firebase/firestore'






// function SignUp () {
//   const [ newName, setNewName ] = useState("")
//   const [ newAge, setNewAge] = useState(0)
//   const [ newPassword, setNewPassword ] = useState("")

//   const [ users, setUsers ] = useState([]);
//   const usersCollectionRef = collection(db, 'users');


//   const createUser = async () => {
//     await addDoc(usersCollectionRef, { name: newName, password: newPassword, age: Number(newAge)  })
//   } 

//   const updateUser = async (id, age) => {
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

// export default SignUp;



import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../../firebase/firebase-config";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signUp}>
        <h1>Create Account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
