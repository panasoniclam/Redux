import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { bindActionCreators } from 'redux';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
 //state
 let appState = {
   data: [
     {title:'go to the office',isFinisnish:true},
     {title:'prepare tasks for today',isFinisnish:false},
     {title:'Team metting',isFinisnish:false},
     {title:'Commit tasks changes',isFinisnish:false}
     
   ]
 }
//action
const Finisnishtask = (index)=>{
  return{
    type:'FINISNISH',
    atIndex : index
  };
}
const Deletetask = (index)=>{
  return{
    type:'DELETE',
    atIndex: index
  }
}
//REducer
const taskList  = (state=appState,action)=>{
 let newTaskList = state.data;
  switch(action.type){
    case 'FINISNISH':
        newTaskList[action.atIndex].isFinisnish= true;
        return{...state,data:newTaskList};
   
    case 'DELETE':
     newTaskList = newTaskList.filter((item,i)=>{i !== action.atIndex})
     return{...state,data:newTaskList};
    
  }
  return state;
}
//store
const store = createStore(taskList,appState);

class App extends Component {
  render() {
    return (
     <Provider store ={store}>
        
     </Provider>
      
    );
  }
}

export default App;
