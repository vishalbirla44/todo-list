import React, { useState } from 'react'

const Todo = () => {

  const [intatial,setinatial]= useState()
  const [data,setdata] = useState([])
  const [uid,setuid] = useState()

  const AddValue = () =>{
    let store = [...data, intatial]
    setdata(store)
    console.log(data)
    setinatial('')
  }
 
 const  editvalue = () => {
    data.splice(uid,1,intatial)
    setinatial("")

 }
  const deleteval = (index) => {
     let newdata = [...data]
     newdata.splice(index,1)
     setdata([...newdata])
  }

  const editeval =(index) => {
      let filter = data.filter((elm)=> elm === data[index])
      setinatial(filter[0])    
      setuid(index)
  }
  return (
    <div className='container '>

    <div className='flex items-center justify-center gap-[20px]'>
      <div>
        <input type="text" placeholder='enter text' 
        className='border-2 border-black w-[200px] h-10 '
        onChange={ (e) =>{ setinatial(e.target.value)}}
        value={intatial}
        />    
        
      </div>

      <div>
        <button className='w-[100px] h-8 bg-black text-white' onClick={AddValue}>Add</button>
        <button className='w-[100px] h-8 bg-black text-white' onClick={editvalue}>Update</button>
      </div>

    </div>
     
     {data.map((cruval,index)=>{
      return (
        <div className='flex items-center justify-center gap-5 '>
          <h1 className='text-4xl'> {cruval}</h1>
          <i onClick={() => deleteval(index)} class="fa-solid fa-delete-left"></i>
          <i onClick={()=>editeval(index)} class="fa-solid fa-pen-to-square"></i>
        </div>
      )
     })}
       
    </div>
  )
}

export default Todo