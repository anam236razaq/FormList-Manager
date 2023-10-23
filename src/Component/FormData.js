import React, { useReducer } from 'react'

const initialState={
  firstName: "",
  lastName: "",
  phoneNo: "",
  address: "",
}

function reducer(state, action){
  switch(action.type){
    case "FirstName": 
    return{
      ...state,
      firstName: action.payload,
    }
    case "LastName": 
    return{
      ...state,
      lastName: action.payload,
    }
    case "PhoneNo": 
    return{
      ...state,
      phoneNo: action.payload,
    }
    case "Address": 
    return{
      ...state,
      address: action.payload,
    }
    case "ClearForm": 
    return{
      ...initialState,
    }
    default:
      return state
  }
}


export default function FormData({AddData}) {
  const[{ firstName, lastName, phoneNo, address}, dispatch]=useReducer(reducer, initialState);

  function handleSubmit(e){
    e.preventDefault();
    if(!firstName && !lastName && !phoneNo && !address) return;
    const newItem={firstName, lastName, phoneNo, address, id: Date.now() };
    AddData(newItem);
    dispatch({type: "ClearForm"});
   }

  return (
    <div>
         <form className="form" onSubmit={handleSubmit}>
            <label>FirstName</label>
            <input type="text" placeholder="FirstName" value={firstName} 
            onChange={(e)=>dispatch({type: "FirstName", payload: e.target.value})}/>
            <label>LastName</label>
            <input type="text" placeholder="LastName" value={lastName} 
            onChange={(e)=>dispatch({type: "LastName", payload: e.target.value})}/>
            <label>PhoneNo</label>
            <input type="text" placeholder="PhoneNo" value={phoneNo} 
            onChange={(e)=>dispatch({type: "PhoneNo", payload: e.target.value})}/>
            <label>Address</label>
            <input type="text" placeholder="Address"  value={address} 
            onChange={(e)=>dispatch({type: "Address", payload: e.target.value})}/>
            <button className="btn">Insert</button>
          </form>
    </div>
  )
}
