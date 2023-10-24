import React, { Component } from 'react'

const initialState={
  firstName: "",
  lastName: "",
  phoneNo: "",
  address: "",
}

export default class FormData extends Component {
  constructor(props){
    super(props);
    this.state={...initialState};
  }

  componentDidUpdate(prevProps){
   const{ editData }= this.props;
   const prevEditData=prevProps.editData;
   
   if(editData && editData!==prevEditData){
   this.setState({
    firstName: editData.firstName || "",
    lastName: editData.lastName || "",
    phoneNo: editData.phoneNo ||"",
    address: editData.address || "",
   })
   }}

  handleClearForm=()=>{
     this.setState({...initialState})};

   handleSubmit=(e)=>{
    e.preventDefault();
    const{firstName, lastName, phoneNo, address}=this.state;
    if(!firstName && !lastName && !phoneNo && !address) return;
    const newItem={ ...this.state, id: Date.now() };
    this.props.AddData(newItem);
    this.handleClearForm();
    }

   handleCancel=()=>{
      this.props.setEditData(null);
      this.handleClearForm();
    }

  render() {
    const {firstName, lastName, phoneNo, address}=this.state;
    const {editData}=this.props;
    return (
          <div>
         <form className="form" onSubmit={this.handleSubmit}>
            <label>FirstName</label>
            <input type="text" placeholder="FirstName" value={firstName} 
            onChange={(e)=>this.setState({firstName: e.target.value})}/>
            <label>LastName</label>
            <input type="text" placeholder="LastName" value={lastName} 
            onChange={(e)=>this.setState({lastName: e.target.value})}/>
            <label>PhoneNo</label>
            <input type="text" placeholder="PhoneNo" value={phoneNo} 
            onChange={(e)=>this.setState({phoneNo: e.target.value})}/>
            <label>Address</label>
            <input type="text" placeholder="Address"  value={address} 
            onChange={(e)=>this.setState({address: e.target.value})}/>
            <button className="btn">{editData? "Edit": "Insert"}</button>
          </form>
          {editData  && <button className="cancel-btn" onClick={this.handleCancel}>Cancel</button>}
    </div>
    )
  }
}
