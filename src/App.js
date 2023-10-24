import {useState} from "react";
import FormData from "./Component/FormData";
import {BiSolidPencil} from "react-icons/bi";
import {AiOutlineClose} from "react-icons/ai";

function App() {
  const[data, setData]=useState([]);
  const[editData, setEditData]=useState(null);

  function AddData(dataItems){
    if(editData){
      setData((items)=>items.map((item)=>item.id===editData.id? dataItems: item));
    }else{
      setData((data)=>[...data, dataItems]);
    } 
  }

  function DeleteData(id){
    setData((items)=>items.filter((item)=>item.id !== id));
  }


  return (
    <div>
        <div className="heading">
          <h1>Form List Manager</h1>
        </div>
        <div className="formData">
           <FormData AddData={AddData} editData={editData} setEditData={setEditData}/>
        </div>
        <div className="formData-list">
           <h4>Form Data List...</h4>
        <ul>
          {data.map((data)=>(
            <div key={data.id} className="list">
            <li><span>FirstName:</span> {data.firstName}</li>
            <li><span>LastName:</span> {data.lastName}</li>
            <li><span>PhoneNo:</span> {data.phoneNo}</li>
            <li><span>Address:</span> {data.address}</li>
            <button className="btns" onClick={()=>DeleteData(data.id)}><AiOutlineClose /></button>
            <button className="btns" onClick={()=>setEditData(data)}><BiSolidPencil /></button>
            </div>
          ))}
        </ul>
        </div>
    </div>
  );
}

export default App;
