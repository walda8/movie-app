import React, { useState } from 'react';
import Search from './components/moovisearch';
import MoviList from './components/moovilist'
import AddMovie from './components/mooviadd';

function App() {
  let MooviInfo=[
    {
        id: Math.random(),
        name: 'Mission Impossible',
        image: <img src='/MI.jpg' style={{width:'250px', higt:'250px'} } />,
        type:'Action',
        rate:5,
    },
    {
        id: Math.random(),
        name: 'The Notebook',
        image: <img src='/nb.jpg' style={{width:'250px', higt:'250px'} } />,
        type:'Romance',
        rate:4,
    },
    {
        id: Math.random(),
        name: 'Joker',
        image: <img src='/jo.jpg' style={{width:'250px', higt:'250px'} }/>,
        type:'Drame',
        rate:2,
    },
    {
        id: Math.random(),
        name: 'Paranormal Activities',
        image: <img src='/pn.jpg' style={{width:'250px', higt:'250px'} }/>,
        type:'Horror',
        rate:5,
    },
    {
        id: Math.random(),
        name: 'The place',
        image: <img src='/tp.jpg' style={{width:'250px', higt:'250px'} }/>,
        type:'Drame',
        rate:1,
    }

]


  const[movies,setMovies]=useState(MooviInfo);
  const[filtredname,setFiltredname]=useState('');
  const[filtredrate,setFiltredrate]=useState(0);




  return (
    <div className="App">
      <Search setFiltredname={setFiltredname} setFiltredrate={setFiltredrate}/> 
      
      <MoviList movies={movies} filtredname={filtredname} filtredrate={filtredrate} />
      <AddMovie movies={movies} setMovies={setMovies} />
    
    </div>
  );
}


export default App;
