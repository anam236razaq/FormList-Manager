import React, { useState } from 'react'
import { useEffect } from 'react'

export default function FormData({AddData, editData, setEditData}) {
  const[firstName, setFirstName]=useState("");
  const[lastName, setLastName]=useState("");
  const[phoneNo, setPhoneNo]=useState("");
  const[address, setAddress]=useState("");

  useEffect(()=>{
   if(editData){
    setFirstName(editData.firstName);
    setLastName(editData.lastName);
    setPhoneNo(editData.phoneNo);
    setAddress(editData.address);
   }}, [editData]);

   function handleClearForm(){
     setFirstName("");
     setLastName("");
     setPhoneNo("");
     setAddress("");
   }

  function handleSubmit(e){
    e.preventDefault();
    if(!firstName && !lastName && !phoneNo && !address) return;
    const newItem={firstName, lastName, phoneNo, address, id: Date.now() };
    AddData(newItem);
    handleClearForm();
    }

   
    function handleCancel(){
      setEditData(null);
      handleClearForm();
    }

  return (
    <div>
         <form className="form" onSubmit={handleSubmit}>
            <label>FirstName</label>
            <input type="text" placeholder="FirstName" value={firstName} 
            onChange={(e)=>setFirstName(e.target.value)}/>
            <label>LastName</label>
            <input type="text" placeholder="LastName" value={lastName} 
            onChange={(e)=>setLastName(e.target.value)}/>
            <label>PhoneNo</label>
            <input type="text" placeholder="PhoneNo" value={phoneNo} 
            onChange={(e)=>setPhoneNo(e.target.value)}/>
            <label>Address</label>
            <input type="text" placeholder="Address"  value={address} 
            onChange={(e)=>setAddress(e.target.value)}/>
            <button className="btn">{editData? "Edit": "Insert"}</button>
          </form>
          {editData  && <button className="cancel-btn" onClick={handleCancel}>Cancel</button>}
    </div>
  )
}
