import React,{useState,useEffect} from 'react';
import './App.css';
import Todo from './todo';
import firebase from 'firebase/app';
import db from './firebase';
import { Button, FormControl, InputLabel,Input } from '@material-ui/core';

function App() {
  const [todos,setTodos]= useState(['abc','jhk'])
  const [input,setInput]= useState('');

 useEffect(()=>{
 db.collection('todos').orderBy('timestamp','desc').onSnapshot(Snapshot=>{
  setTodos(Snapshot.docs.map( doc=> ({id:doc.id,todo:doc.data().todo})))
 })
 },[]);

  const addTodo=(event)=>{

    event.preventDefault(); //will stop refresh the whole page
   
    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })

    setTodos([...todos,input]);
    setInput(' ');
  }
  return (
    <div className="App">
      <h1>hello mach!</h1>
      <form>
      
 
      <FormControl>
        <InputLabel>write a todo</InputLabel>
        <Input value={input} onChange={event=>setInput(event.target.value)}/>
      </FormControl>
 
      <Button disabled={!input} type="submit" onClick={addTodo}  variant="contained" color="primary">
        Add todo
      </Button>
      </form>
      <ul>
        {todos.map(todo=>(
          <Todo todo={todo}/>
          //<li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
