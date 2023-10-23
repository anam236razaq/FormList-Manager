import React from 'react'

export default function FormDataList({data, DeleteData}) {
  return (
    <div className="data-list">
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
  )
}
