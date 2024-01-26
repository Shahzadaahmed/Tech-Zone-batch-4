// import React from "react";
// import { objA, arr, names } from "./test";

// // Note: Importing required components...!
// import HomeComponent from "@/components/home-component/header-component";
// // import HomeComponent from "../components/home-component/home-component";

// const App = () => {
//   // console.log('component rendered!');
//   // console.log('Object: ', objA);
//   // console.log('Array: ', arr);
//   // console.log('Names: ', names);

//   // const a = 2;
//   // const b = 4;
//   // console.log(a + b);

//   return (
//     // <div>
//     //   <h1> Welcome to Next JS! 😄 </h1>
//     //   <h2> Hello React JS and Next JS </h2>
//     // </div>

//     <>
//       {/* <h1> Welcome to Next JS! 😄 </h1> */}
//       {/* <h2> Hello React JS and Next JS </h2> */}
//       {/* <h1> I bought a kg {objA.item} today! </h1> */}
//       {/* <h3> {`I bought a kg ${objA.item} today!`} </h3> */}
//       {/* <h1> Home </h1> */}

//       <HomeComponent
//         heading={"Home"}
//         // vegetableDetails={objA}
//       />

//       {/* <ul>
//         {
//           names.map((item, index) => {
//             return (
//               <li key={index}> {index + 1}: {item} </li>
//             );
//           })
//         }
//       </ul> */}
//     </>
//   );
// };

// export default App;















// "use client";

// import React from 'react';

// const App = () => {

//   // console.log('Hello world!');

//   // Click handler...!
//   // const handleClick = () => {
//   //   console.log('Working fine!');
//   // };

//   // let count = 0;
//   // let booleanVal = false;

//   // Counter handler...!
//   // const handleCounter = () => {
//   //   // count = count + 1;
//   //   // console.log(count);

//   //   booleanVal = !booleanVal;
//   //   console.log(booleanVal);
//   // };

//   return (
//     <>
//       <h1> Next JS class! </h1>

//       {/* <button onClick={handleCounter}> Counter </button> */}

//       {/* <button onClick={handleClick}> Click </button> */}
//     </>
//   );
// };

// export default App;


// import React, { useState } from 'react';

// const App = () => {

//   let [count, setCount] = useState(0);
//   let [disablePlusBtn, setDisablePlusBtn] = useState(false);
//   let [disableMinusBtn, setdisableMinusBtn] = useState(false);

//   // Increament counter handler...!
//   const increamentCounter = () => {
//     setCount(count + 1);
//     setdisableMinusBtn(false);

//     if (count >= 9) setDisablePlusBtn(true);
//     else setDisablePlusBtn(false);
//   };

//   // Decreament counter handler...!
//   const decreamentCounter = () => {
//     setCount(count - 1);
//     setDisablePlusBtn(false);

//     if (count <= 1) setdisableMinusBtn(true);
//     else setdisableMinusBtn(false);
//   };

//   return (
//     <>
//       <h1> Next JS class! </h1>
//       <h1> {`Count: ${count}`} </h1>

//       <button
//         onClick={increamentCounter}
//         disabled={disablePlusBtn}
//       >
//         Increament Counter
//       </button>

//       <button
//         onClick={decreamentCounter}
//         disabled={disableMinusBtn}
//       >
//         Decreament Counter
//       </button>
//     </>
//   );
// };

// export default App;


// import React, { useState } from 'react';
// import Image from 'next/image';

// import pokemonImg from "@/images/pokemon.png";
// import moltressImg from "@/images/moltress.jpg";
// import bulbOff from "@/images/Img1.gif";
// import bulbOn from "@/images/Img2.gif";

// import "@/styles/app-module.css";

// const App = () => {

//   // States...!
//   const [bulbStatus, setBulbStatus] = useState(false);

//   const bulbHandler = () => setBulbStatus(!bulbStatus);

//   return (
//     <>
//       <h1> {`Bulb ${bulbStatus ? 'On' : 'Off'}`} </h1>

//       <Image
//         src={bulbStatus ? bulbOn : bulbOff}
//         height={200}
//         width={200}
//         alt='Bulb'
//         priority={true}
//       />

//       <button onClick={bulbHandler}>
//         {`${!bulbStatus ? 'On' : 'Off'}`}
//       </button>
//     </>
//   );
// };







// const App = () => {

//   // States...!
//   const [visibleEl, setVisibleEl] = useState(false);
//   const [inputVal, setInputVal] = useState("");

//   // const changeElement = () => {
//   //   setVisibleEl(true);
//   // };

//   const submitHandler = () => {
//     console.log(inputVal);
//     setInputVal("");
//   };

//   return (
//     <>
//       {/* <h1> Conditional Rendering in Next JS! </h1> */}

//       {/* {
//         (visibleEl)
//           ?
//           (<h2> Learn Next JS instead of React JS! </h2>)
//           :
//           (<h2> Learn React JS for advance web and app development! </h2>)
//       } */}

//       {/* <button onClick={changeElement}> Chnage Element </button> */}

//       <h1> Control components in React JS </h1>

//       <input
//         type='text'
//         placeholder='Write Something...'
//         value={inputVal}
//         onChange={(e) => {
//           // console.log(e.target.value)
//           setInputVal(e.target.value);
//         }}
//       />

//       <button onClick={submitHandler}> Submit </button>
//     </>
//   );
// };

// export default App;









/*
import React, { useState } from 'react';

const App = () => {

  // States...!
  const [inputVal, setInputVal] = useState("");
  const [todoData, setTodoData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [targetKey, setTargetKey] = useState("");

  // Note: Add item handler...!
  const addItemHandler = () => {
    // console.log(inputVal);

    let fetchData = [...todoData];
    fetchData.push(inputVal);
    setTodoData(fetchData);
    setInputVal("");
  };

  // Note: Delete item handler...!
  const deleteItemHandler = (key) => {
    // console.log('Index: ', key);

    let todoDataClone = [...todoData];
    // console.log('Rest Data: ' , todoDataClone);

    todoDataClone.splice(key, 1);
    setTodoData(todoDataClone);
  };

  // Note: Edit item handler...!
  const editItemHandler = (index, value) => {
    // console.log('Key: ', index, "Value: ", value);

    setInputVal(value);
    setTargetKey(index);
    setIsEdit(true);
  };

  // Note: Update item handler...!
  const updateItemHandler = () => {
    // console.log('Updated value: ', inputVal);

    let restData = [...todoData];
    // console.log('Rest data: ', restData);

    restData.splice(targetKey, 1, inputVal);
    setTodoData(restData);
    setInputVal("");
    setTargetKey("");
    setIsEdit(false);
  };

  // Note: Cancel item handler...!
  const cancelUpdating = () => {
    setInputVal("");
    setTargetKey("");
    setIsEdit(false);
  };

  return (
    <>
      <h1> Todo List App using Next JS! </h1>

      <div>
        <input
          type='text'
          placeholder='Write Something...'
          autoFocus
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />

        {
          (isEdit)
            ?
            (
              <>
                <button
                  onClick={updateItemHandler}
                  disabled={inputVal.trim().length < 1}
                >
                  Update Item
                </button>

                <button onClick={cancelUpdating}>
                  Cancel Item
                </button>
              </>
            )
            :
            (
              <button
                onClick={addItemHandler}
                disabled={inputVal.trim().length < 1}
              >
                Add Item
              </button>
            )
        }
      </div>

      <ul>
        {
          (todoData && todoData.length > 0)
            ?
            (
              todoData.map((item, index) => {
                return (
                  <li key={index}>
                    {item}

                    <button
                      onClick={() => deleteItemHandler(index)}
                      disabled={isEdit ? true : false}
                    >
                      Delete Item
                    </button>

                    <button onClick={() => editItemHandler(index, item)}>
                      Edit Item
                    </button>
                  </li>
                );
              })
            )
            :
            (<h3> No Data Found! 😢 </h3>)
        }
      </ul>
    </>
  );
};

export default App;
*/


/*
import React, { useState, useEffect } from 'react';

const App = () => {

  // const testing = () => {
  //   console.log('component rendered successfully');
  // };

  // testing();

  // let a = 10;
  // console.log(a);

  // let isCheck = false;
  // console.log(isCheck);

  // States...!
  let [count, setCount] = useState(0);
  let [toggler, setToggler] = useState(false);

  const increamentCounter = () => {
    // setCount(count++);
    setCount(count + 1);
  };

  const toggleBtn = () => setToggler(!toggler);

  // Note: It will work in every time...! 01
  useEffect(() => {
    console.log('I will run every time!');
  });

  // Note: It will when component rendered...! 02
  useEffect(() => {
    console.log('Component rendered successfully!');
  }, []);

  // Note: It will when count state will update...! 03
  useEffect(() => {
    console.log('Counter state is updating!');
  }, [count]);

  // Note: It will when toggler state will update...! 03
  useEffect(() => {
    console.log('Toggler is updating!');
  }, [toggler]);

  // Note: It will run when component unmount...! 04
  useEffect(() => {
    return () => {
      console.log('Component unmounted succcessfully!');
    };
  }, []);

  return (
    <div>
      <h1> Hooks in Next JS </h1>
      <h2> Count: {count} {count % 2 == 0 ? 'Even' : 'Odd'} </h2>

      <button onClick={increamentCounter}> Increament Count </button>

      <button onClick={toggleBtn}> Toggle </button>
    </div>
  );
};

export default App;

*/

"use client";
// Route: /

import React from 'react';
import { useRouter } from 'next/navigation';

import Header from '@/components/header/header';

const App = () => {

  const router = useRouter();

  // Move screen handler...!
  const goToAbout = () => {
    router.push("/about");
  };

  return (
    <div>
      <h1> Welcome to Next JS Routing! </h1>
      <Header screenName="Home" />

      <button onClick={goToAbout}> Go to about screen </button>
    </div>
  );
};

export default App;