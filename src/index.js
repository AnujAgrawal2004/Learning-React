// // // var React = require('react');
// import React from 'react';
// // // var ReactDOM = require('react-dom');
// import ReactDOM from 'react-dom';

// ReactDOM.render([
// <h1>thapa technical </h1>,
// <p>Plz like and share</p>
// ],
// document.getElementById('root'));

// // //we can also do it by using : 

// // // var h1 = document.createElement('h1');
// // // h1.innerHTML = "Hello World";
// // // document.getElementById('root').appendChild(h1);




import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// const name="AKA";
// ReactDOM.render(
//     <>
//     <h1>my name is {name}</h1>
//     <p>sum of 2 and 3 is {2+3}</p>
//     </>,
//     document.getElementById('root')
// );


// const fname="Anuj";
// const lname="Agr";
// ReactDOM.render(
//     <h1>This is {`${fname} ${lname}`}</h1>,
//     document.getElementById('root')
// );

// const curdate=new Date().toLocaleDateString();
// const curtime=new Date().toLocaleTimeString();
// const name="Anuj Agrawal"
// ReactDOM.render([
//     <h1>My name is {name}</h1>,
//     <p>Today's date is {curdate}</p>,
//     <p>Today's date is {curtime}</p>
// ],
//     // <p>`${curdate}`</p>
// document.getElementById('root'));

const name="AKA";
const image="https://picsum.photos/200";
const image1="https://picsum.photos/250";
const link="https://www.thapatechnical.com/"
ReactDOM.render(<>
    <h1 style="color:#fa9191;">My name is {name}</h1>
    <div className='img_div'>
    <img src={image} alt="pic"/>
    
    <a href={link} target="_thapa">
        <img src={image1}/>
    </a>
    </div>
    </>
    ,
    document.getElementById('root')
) 