import React from 'react';
import { Carousel } from "@material-tailwind/react";
// import { useState, useEffect } from "react";
// import { format } from "date-fns";
// import { useMemo } from "react";
const Home = () => {
  return (
    // <div className="p-4">
    //   <h2 className="text-2xl font-bold mb-4">Special Offers</h2>
    //   <div className="carousel">
    //     <div className="carousel-item">
    //       <img src="https://via.placeholder.com/800x300.png?text=Offer+1" alt="Offer 1" />
    //       <p>Offer 1</p>
    //     </div>
    //     <div className="carousel-item">
    //       <img src="https://via.placeholder.com/800x300.png?text=Offer+2" alt="Offer 2" />
    //       <p>Offer 2</p>
    //     </div>
    //     <div className="carousel-item">
    //       <img src="https://via.placeholder.com/800x300.png?text=Offer+3" alt="Offer 3" />
    //       <p>Offer 3</p>
    //     </div>
    //   </div>
    // </div>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
  <div class="carousel-container overflow-x-auto whitespace-nowrap">
    <div class="carousel-item inline-block mx-2">
      <img
        src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
        alt="Burger" class="w-full h-auto object-cover rounded-lg" />
    </div>
    <div class="carousel-item inline-block mx-2">
      <img
        src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
        alt="Burger" class="w-full h-auto object-cover rounded-lg" />
    </div>
    <div class="carousel-item inline-block mx-2">
      <img
        src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
        alt="Burger" class="w-full h-auto object-cover rounded-lg" />
    </div>
    <div class="carousel-item inline-block mx-2">
      <img
        src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
        alt="Burger" class="w-full h-auto object-cover rounded-lg" />
    </div>
    <div class="carousel-item inline-block mx-2">
      <img
        src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
        alt="Burger" class="w-full h-auto object-cover rounded-lg" />
    </div>
    <div class="carousel-item inline-block mx-2">
      <img
        src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
        alt="Burger" class="w-full h-auto object-cover rounded-lg" />
    </div>
    <div class="carousel-item inline-block mx-2">
      <img
        src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
        alt="Burger" class="w-full h-auto object-cover rounded-lg" />
    </div>
  </div>
</div>


    // <div className="p-4">
    //   <h2 className="text-2xl font-bold mb-4">Special Offers</h2>
    //   <Carousel className="rounded-xl">
    //     <img
    //       src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
    //       alt="image 1"
    //       className="h-full w-full object-cover"
    //     />
    //     <img
    //       src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
    //       alt="image 2"
    //       className="h-full w-full object-cover"
    //     />
    //     <img
    //       src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
    //       alt="image 3"
    //       className="h-full w-full object-cover"
    //     />
    //   </Carousel>
    // </div>
  );
}

export default Home;

// const App = () => {
//   const [selectedNum, setSelectedNum] = useState(10);
//   const time = useTime();
//   // const allPrimes = [];
//   // for (let counter = 2; counter < selectedNum; counter++) {
//   //   console.log("Counter");
//   //   if (isPrime(counter)) {
//   //     allPrimes.push(counter);
//   //   }
//   // }
//   const allPrimes = useMemo(() => {
//     const result = [];
//     for (let counter = 2; counter < selectedNum; counter++) {
//       console.log("Counter");
//       if (isPrime(counter)) {
//         result.push(counter);
//       }
//     }
//     return result;
//   }, [selectedNum]);
//   return (
//     <div className="flex flex-col">
//       <p className="text-xl font-bold text-center">
//         {format(time, "hh:mm:ss")}
//       </p>
//       <input
//         className="border border-black mt-20"
//         value={selectedNum}
//         onChange={(e) => setSelectedNum(e.target.value)}
//       />
//       <p>
//         There are {allPrimes.length} primes between 1 and {selectedNum}
//       </p>
//       <p>{allPrimes.join(", ")}</p>
//     </div>
//   );
// };
// function isPrime(number) {
//   let isPrime = true;

//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   return isPrime;
// }

// function useTime() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const intervalId = window.setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => {
//       window.clearInterval(intervalId);
//     };
//   }, []);

//   return time;
// }

// export default App;

// import { useState } from "react";
// import HomeChild1 from "./HomeChild1";
// import { HomeContext } from "../context/HomeContext";

// const Home = () => {
//   const [name, setName] = useState("Durgesh");
//   const fn = () => {};
//   return (
//     <HomeContext.Provider value={{ name: name, setName: setName }}>
//       <div className="border-2 border-amber-900 p-6">
//         <p>I am a Home Component</p>
//         <input value={name} onChange={(e) => setName(e.target.value)} />
//         <HomeChild1 />
//       </div>
//     </HomeContext.Provider>
//   );
// };

// export default Home;
