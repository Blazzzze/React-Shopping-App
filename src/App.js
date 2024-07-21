// // import React from 'react';
// // import logo from './Deadpool3-1.png'; 
// // import './App.css';
// // import Node from './components/Node';
// // import { useState } from "react";
// // import axios from 'axios';
// // import { useEffect } from 'react';
// // import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// // import Navbar from './components/Navbar';
// // import Home from './components/Home';
// // import About from './components/About';
// // import Product from './components/Product';
// // import Profile from './components/Profile';
// import React, { useState, useEffect } from 'react';
// // import { Route, Routes, useNavigate } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes,useNavigate } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import Product from './components/Product';
// import Profile from './components/Profile';
// import ProductDetails from './components/ProductDetails';
// import { auth } from './firebase';
// import './App.css';
// // function App() {
// //   // Original code
// //   for (let i = 0; i < 10; i++) {
// //     console.log(i);
// //   }

// //   // Render the component
// //   const ar = "Deadpool vs Wolverine";
// //   const notes = [{name: "Deadpool"}, {name: "Wolverine"}]
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />  
// //         <h1 className="yellow">{ar}</h1> 
// //         <Node nots={notes}/>
// //         {/* <h2>{App()}</h2> */}
// //         {/* <p>
// //            Edit <code>src/App.js</code> and save to reload.
// //         </p> */}
// //         <a
// //           className="App-link"
// //           href="https://youtu.be/73_1biulkYk?feature=shared"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Watch the trailer Now!!
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }


// // function App() {
// //   const [myName, setMyName] = useState("Aryan");
// //   const [myCounter,setMyCounter] = useState(0);
// //   const notes = [
// //     { name: "helloWorld", key: "sgdhwegdw" },
// //     { name: "Dishes" },
// //     { name: "AryanWorld" },
// //   ];

// //   const changeName = () => {
// //     if (myName === "Aryan") {
// //       setMyName("Shubham");
// //     } else {
// //       setMyName("Aryan");
// //     }
// //   };
// //   // const incrementCounter=() =>{
// //   //   setMyCounter(myCounter+1);
// //   // }
// //   // const decrementCounter=() =>{
// //   //   setMyCounter(myCounter-1);
// //   // }
// //   const changeCounter = (value) => {
// //     setMyCounter(myCounter + value);
// //   }

// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <h1>{myName}</h1>
// //         <button onClick={changeName}>Change Name</button>
// //         <h2>{myCounter}</h2>
// //         <button onClick={() => changeCounter(1)}>Increase</button>
// //         <button onClick={() => changeCounter(-1)}>Decrease</button>
// //         {/* <button onClick={incrementCounter}>Increase</button>
// //         <button onClick={incrementCounter}>Increase</button>
// //         <button onClick={decrementCounter}>Decrease</button>
// //         {/* <Node notes={notes} myName={myName} /> */}
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // function App() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [age, setAge] = useState(0);
// //   const [rememberMe, setRememberMe] = useState(false);

// //   const onSubmit = (e) => {
// //     e.preventDefault();
// //     // do the job
// //   };

// //   return (
// //     <div
// //       className="App"
// //       style={{
// //         height: "100vh",
// //         border: "2px solid red",
// //         display: "flex",
// //         flexDirection: "row",
// //         alignItems: "center",
// //         justifyContent: "center",
// //       }}
// //     >
// //       <form
// //         style={{
// //           display: "flex",
// //           flexDirection: "column",
// //           width: "200px",
// //           border: "2px solid blue",
// //         }}
// //         onSubmit={onSubmit}
// //       >
// //         <input
// //           placeholder="email"
// //           type="text"
// //           value={email}
// //           onChange={(e) => {
// //             setEmail(e.target.value);
// //           }}
// //         />
// //         <input
// //           placeholder="password"
// //           type="password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //         />
// //         <input
// //           placeholder="age"
// //           type="number"
// //           value={age}
// //           onChange={(e) => {
// //             if (e.target.value > 100) {
// //               alert("Value can't be greater than 100 !");
// //             } else {
// //               setAge(e.target.value);
// //             }
// //           }}
// //           min={0}
// //           max={100}
// //         />
// //         <input 
// //           placeholder='remember me'
// //           type="checkbox" 
// //           // value={true}
// //           checked={rememberMe}
// //           onChange={(e) => setRememberMe(e.target.checked)}
// //         />
// //         <button type="submit">Submit</button>
// //       </form>
// //     </div>
// //   );
// // }

// // function App() {
// //   const [notes, setNotes] = useState([]);
// //   const [updatingNote, setUpdatingNote] = useState(false);

// //   const [note, setNote] = useState({
// //     name: "",
// //     exp: "",
// //     role: "",
// //     education: [],
// //   });

// //   const onCreate = (e) => {
// //     e.preventDefault();
// //     const totalNotes = notes.length;
// //     setNotes([
// //       ...notes,
// //       {
// //         ...note,
// //         createdAt: new Date().toDateString(),
// //         index: totalNotes,
// //       },
// //     ]);
// //     setNote({
// //       name: "",
// //       exp: "",
// //       role: "",
// //       education: [],
// //     });
// //   };

// //   const changeTHisNote = (note) => {
// //     setUpdatingNote(true);
// //     setNote(note);
// //   };

// //   const updateNote = (e) => {
// //     e.preventDefault();
// //     const tempNotes = [...notes];
// //     tempNotes[note.index] = note;
// //     setNotes(tempNotes);
// //     setNote({
// //       name: "",
// //       exp: "",
// //       role: "",
// //       education: [],
// //     });
// //     setUpdatingNote(false);
// //   };

// //   const deleteNote = (ind) => {
// //     const tempNotes = [...notes];
// //     tempNotes.splice(ind, 1);
// //     setNotes(tempNotes);
// //   };

// //   const handleEducationChange = (e, index) => {
// //     const updatedEducation = note.education.map((edu, i) =>
// //       i === index ? e.target.value : edu
// //     );
// //     setNote({
// //       ...note,
// //       education: updatedEducation,
// //     });
// //   };

// //   const addEducationField = () => {
// //     setNote({
// //       ...note,
// //       education: [...note.education, ""],
// //     });
// //   };

// //   return (
// //     <div
// //       className="App"
// //       style={{
// //         height: "100vh",
// //         border: "2px solid red",
// //         display: "flex",
// //         flexDirection: "column",
// //         overflowY: "auto",
// //       }}
// //     >
// //       <h1>MODE: {updatingNote ? "UPDATE" : "CREATE"}</h1>
// //       <form
// //         style={{
// //           display: "flex",
// //           flexDirection: "column",
// //           width: "200px",
// //           border: "2px solid blue",
// //         }}
// //         onSubmit={updatingNote ? updateNote : onCreate}
// //       >
// //         <input
// //           type="text"
// //           value={note.name}
// //           onChange={(e) => setNote({ ...note, name: e.target.value })}
// //           placeholder="Name"
// //         />
// //         <input
// //           type="number"
// //           value={note.exp}
// //           onChange={(e) => setNote({ ...note, exp: e.target.value })}
// //           placeholder="Experience"
// //         />
// //         <input
// //           type="text"
// //           value={note.role}
// //           onChange={(e) => setNote({ ...note, role: e.target.value })}
// //           placeholder="Role"
// //         />
// //         {note.education.map((edu, index) => (
// //           <input
// //             key={index}
// //             type="text"
// //             value={edu}
// //             onChange={(e) => handleEducationChange(e, index)}
// //             placeholder="Education"
// //           />
// //         ))}
// //         <button type="button" onClick={addEducationField}>Add Education</button>
// //         <button type="submit">{updatingNote ? "Update" : "Create"}</button>
// //       </form>

// //       <div style={{ display: "flex", flexDirection: "column" }}>
// //         <h2>List of Employees:</h2>
// //         {notes.map((note, noteIndex) => (
// //           <div
// //             style={{ display: "flex", flexDirection: "column", width: "300px" }}
// //             key={note.createdAt + noteIndex}
// //           >
// //             <p>Name: {note.name}</p>
// //             <p>Experience: {note.exp}</p>
// //             <p>Role: {note.role}</p>
// //             <p>Education:</p>
// //             {note.education.map((edu, eduIndex) => (
// //               <p key={eduIndex}>{edu}</p>
// //             ))}
// //             <button onClick={() => changeTHisNote(note)}>Edit</button>
// //             <button onClick={() => deleteNote(note.index)}>Delete</button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // function App() {
// //   const [albums, setAlbums] = useState([]);
// //   const [cartCount, setCartCount] = useState(0);
// //   const fetchAlbums = async () => {
// //     try {
// //       const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
// //       setAlbums(response.data);
// //     } catch (error) {
// //       console.error('Error fetching albums data:', error);
// //     }
// //   };
// //   useEffect(() => {
// //     fetchAlbums();
// //   }, []);
// //   const handleAddToCart = () => {
// //     setCartCount(cartCount + 1);
// //   };

// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <h1>Album Shopping Page</h1>
// //         <p>Cart: {cartCount} items</p>
// //       </header>
// //       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
// //         {albums.map(album => (
// //           <div key={album.id} className="album-card">
// //             <h3>{album.title}</h3>
// //             <button onClick={handleAddToCart}>Add to Cart</button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// function App() {
//   const [cartCount, setCartCount] = useState(0);
//   const [cartItems, setCartItems] = useState([]);
//   const [isAuthenticated, setAuthenticated] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(user => {
//       if (user) {
//         setAuthenticated(true);
//         navigate('/products');
//       } else {
//         setAuthenticated(false);
//       }
//     });
//     return () => unsubscribe();
//   }, [navigate]);

//   return (
//     // <Router>
//       <div className="App">
//         <Navbar cartCount={cartCount} />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/profile" element={<Profile setAuthenticated={setAuthenticated} />} />
//           <Route path="/products" element={<Product cartCount={cartCount} setCartCount={setCartCount} cartItems={cartItems} setCartItems={setCartItems} />} />
//           <Route path="/products/:id" element={<ProductDetails cartCount={cartCount} setCartCount={setCartCount} cartItems={cartItems} setCartItems={setCartItems} />} />
//         </Routes>
//       </div>
//     // </Router>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import Product from './components/Product';
// import Profile from './components/Profile';
// import ProductDetails from './components/ProductDetails';
// import { auth } from './firebase';
// import './App.css';

// function App() {
//   const [cartCount, setCartCount] = useState(0);
//   const [cartItems, setCartItems] = useState([]);
//   const [isAuthenticated, setAuthenticated] = useState(false);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(user => {
//       if (user) {
//         setAuthenticated(true);
//       } else {
//         setAuthenticated(false);
//       }
//     });
//     return () => unsubscribe();
//   }, []);

//   return (
//     <div className="App">
//       <Navbar cartCount={cartCount} />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/profile" element={<Profile setAuthenticated={setAuthenticated} />} />
//         <Route path="/products" element={isAuthenticated ? <Product cartCount={cartCount} setCartCount={setCartCount} cartItems={cartItems} setCartItems={setCartItems} /> : <Navigate to="/profile" />} />
//         <Route path="/products/:id" element={isAuthenticated ? <ProductDetails cartCount={cartCount} setCartCount={setCartCount} cartItems={cartItems} setCartItems={setCartItems} /> : <Navigate to="/profile" />} />
//       </Routes>
//     </div>
//   );
// }

// // export default App;
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom'; // Import Navigate here
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import Product from './components/Product';
// import Profile from './components/Profile';
// import ProductDetails from './components/ProductDetails';
// import Cart from './components/Cart';
// import { auth } from './firebase';
// import './App.css';

// function App() {
//   const [cartCount, setCartCount] = useState(0);
//   const [cartItems, setCartItems] = useState([]);
//   const [isAuthenticated, setAuthenticated] = useState(false);
//   const [isCartOpen, setCartOpen] = useState(false);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(user => {
//       if (user) {
//         setAuthenticated(true);
//       } else {
//         setAuthenticated(false);
//       }
//     });
//     return () => unsubscribe();
//   }, []);

//   return (
//       <div className="App">
//         <Navbar cartCount={cartCount} />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route
//             path="/profile"
//             element={<Profile setAuthenticated={setAuthenticated} />}
//           />
//           <Route
//             path="/products"
//             element={
//               isAuthenticated ? (
//                 <Product
//                   cartCount={cartCount}
//                   setCartCount={setCartCount}
//                   cartItems={cartItems}
//                   setCartItems={setCartItems}
//                 />
//               ) : (
//                 <Navigate to="/profile" />
//               )
//             }
//           />
//           <Route
//             path="/products/:id"
//             element={
//               isAuthenticated ? (
//                 <ProductDetails
//                   cartCount={cartCount}
//                   setCartCount={setCartCount}
//                   cartItems={cartItems}
//                   setCartItems={setCartItems}
//                 />
//               ) : (
//                 <Navigate to="/profile" />
//               )
//             }
//           />
//           <Route
//             path="/cart"
//             element={
//               isAuthenticated ? (
//                 <Cart
//                   cartCount={cartCount}
//                   setCartCount={setCartCount}
//                   cartItems={cartItems}
//                   setCartItems={setCartItems}
//                 />
//               ) : (
//                 <Navigate to="/profile" />
//               )
//             }
//           />
//         </Routes>
//       </div>
//   );
// }

// export default App;
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import Product from './components/Product';
// import Profile from './components/Profile';
// import ProductDetails from './components/ProductDetails';
// import Cart from './components/Cart';
// import { auth } from './firebase';
// import { CartProvider } from './context/CartContext';
// import './App.css';

// function App() {
//   const [isAuthenticated, setAuthenticated] = useState(false);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(user => {
//       if (user) {
//         setAuthenticated(true);
//       } else {
//         setAuthenticated(false);
//       }
//     });
//     return () => unsubscribe();
//   }, []);

//   return (
//     <CartProvider>
//       <div className="App">
//         {/* <Router> */}
//           <Navbar />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route
//               path="/profile"
//               element={<Profile setAuthenticated={setAuthenticated} />}
//             />
//             <Route
//               path="/products"
//               element={
//                 isAuthenticated ? (
//                   <Product />
//                 ) : (
//                   <Navigate to="/profile" />
//                 )
//               }
//             />
//             <Route
//               path="/products/:id"
//               element={
//                 isAuthenticated ? (
//                   <ProductDetails />
//                 ) : (
//                   <Navigate to="/profile" />
//                 )
//               }
//             />
//             <Route
//               path="/cart"
//               element={
//                 isAuthenticated ? (
//                   <Cart />
//                 ) : (
//                   <Navigate to="/profile" />
//                 )
//               }
//             />
//           </Routes>
//         {/* </Router> */}
//       </div>
//     </CartProvider>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Profile from './components/Profile';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import { auth } from './firebase';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <CartProvider>
      {/* <Router> */}
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/profile"
              element={<Profile setAuthenticated={setAuthenticated} />}
            />
            <Route
              path="/products"
              element={
                isAuthenticated ? (
                  <Product />
                ) : (
                  <Navigate to="/profile" />
                )
              }
            />
            <Route
              path="/products/:id"
              element={
                isAuthenticated ? (
                  <ProductDetails />
                ) : (
                  <Navigate to="/profile" />
                )
              }
            />
            <Route
              path="/cart"
              element={
                isAuthenticated ? (
                  <Cart />
                ) : (
                  <Navigate to="/profile" />
                )
              }
            />
          </Routes>
        </div>
      {/* </Router> */}
    </CartProvider>
  );
}

export default App;
