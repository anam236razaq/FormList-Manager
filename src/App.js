import {useState} from "react";
import FormData from "./Component/FormData";

function App() {
  const[data, setData]=useState([]);

  function AddData(dataItems){
    setData((data)=>[...data, dataItems]);
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
          <FormData AddData={AddData}/>
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
            <button className="delete-btn" onClick={()=>DeleteData(data.id)}>❌</button>
            </div>
          ))}
        </ul>
        </div>
    </div>
  );
}

export default App;
