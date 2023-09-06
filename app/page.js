"use client"

import React,{useState} from 'react';

const page = () => {

  const [Value,setValue] = useState("");
  const [Items,setItems] = useState([]);
  const AddItem = ()=>{
    // console.log("ADdd")
    if(Value === ""){
      alert("Fill The Value")
      return;
    }
    setItems([...Items,Value]);
    setValue("")
  }

  const DeleteAll = ()=>{
    if(Items.length===0){
      alert("Your To-Do List is Empty");
      return;
    }

    setItems([]);
    // setValue("")
  }

  const DeleteOne = (index)=>{
    console.log("Delete")
    const At =  Items.filter(function(elem,idx){
    return idx !==index;
   }) 
   setItems(At)
  }

  const AllDetail = Items.map(function(dets,idx){
    return( 
       
    <div key={idx} className="to-do-input">
      <h1>{dets}</h1>
      <div className="wr-de-btn">
        <h1>✍</h1>
        <h1 onClick={()=>{DeleteOne(idx)}}>❌</h1>
      </div>
    </div>
    )
  })

  return (
    <>
      <div className="main">
        <div className="content">
          <div className="to-do-input">
            <input value={Value} type="text" placeholder="Write Your to-do" onChange={(dets)=>{setValue(dets.target.value)}}></input>
          </div>
          <div className="btn">
            <div className="add" onClick={AddItem}>Add</div>
            <div className="delete" onClick={DeleteAll}>Delete All</div>
          </div>
        </div>

        <div className="content">
          <h1>To-Do-List</h1>
          {AllDetail}
        </div>
      </div>
    </>
  );
};

export default page;


//value variable banaya 
// uska input se call Karaya 
//phir input pae onChangw Function Chalaya us mae dets se value ko diya Values variable
//Add function delete function and oneDelete function and 