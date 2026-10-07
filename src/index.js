import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';
import {data} from './books.js';
import Book from './Book.js';
import {greeting} from './testing/testing';

function BookList() {
  console.log(greeting);
return (
 <section className='booklist'>
   {data.map ((books) => {
     
     return (
       <Book key={books.id} {...books}></Book>
     )
   })}
  
 </section>
  ); 

}

  const complexExample = (author) => {
      console.log(author);
  }


ReactDom.render(<BookList />, document.getElementById('root')); 