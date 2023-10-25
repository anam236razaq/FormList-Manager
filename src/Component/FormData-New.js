import React, { useEffect, useState } from 'react'

const initialState={
  firstName: "",
  lastName: "",
  phoneNo: "",
  address: "",
}

function FormData({editData, setEditData, AddData}){
  const [formData, setFormData]=useState({...initialState});

  useEffect(()=>{
    if(editData){
       setFormData({
           firstName: editData.firstName || "",
           lastName: editData.lastName || "",
           phoneNo: editData.phoneNo || "",
           address: editData.address || ""});
    }
   }, [editData]);

   function updateField(name, value){
     setFormData((prevData)=>({
       ...prevData,
       [name]: value,
     }));
   }

  function handleClearForm(){
     setFormData({...initialState});
 }

  function handleSubmit(e){
  e.preventDefault();
  const{firstName, lastName, phoneNo, address}=formData;
  if(!firstName && !lastName && !phoneNo && !address) return;
  const newItem={ ...formData, id: Date.now() };
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
      <input type="text" placeholder="FirstName" value={formData.firstName} 
      onChange={(e)=>updateField("firstName", e.target.value)}/>
      <label>LastName</label>
      <input type="text" placeholder="LastName" value={formData.lastName} 
      onChange={(e)=>updateField("lastName", e.target.value)}/>
      <label>PhoneNo</label>
      <input type="text" placeholder="PhoneNo" value={formData.phoneNo} 
      onChange={(e)=>updateField("phoneNo", e.target.value)}/>
      <label>Address</label>
      <input type="text" placeholder="Address"  value={formData.address} 
      onChange={(e)=>updateField("address", e.target.value)}/>
      <button className="btn">{editData? "Edit": "Insert"}</button>
    </form>
    {editData  && <button className="cancel-btn" onClick={handleCancel}>Cancel</button>}
</div>
)}

export default FormData
   
