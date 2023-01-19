import React,{useEffect, useState} from 'react';
import{Button} from 'react-bootstrap'

const getLocalItem =()=> {
 let list = localStorage.getItem('lists')
 console.log(list);
if(list){
  return JSON.parse(list)

} else{
  return [];
}
}

function Todo() {
    const [activity,setActivity] = useState("");
    const [listdata,setlistData] = useState(getLocalItem());

   
    function addActivity(){
    
      setlistData((listdata)=>{
      const updatedList =[...listdata,activity]
      console.log(updatedList)
      setActivity("");
      return updatedList;
    })
    }
    function removeActivity(i){
        const  updatedlistData=listdata.filter((elem,id)=>{
            return i!=id;
        })
        setlistData(updatedlistData);
   
    }
    // const handleEdit = (id)=>{
   
    //   const editactivity = listdata.find((i)=> i.id ===id);
    //   setActivity(editactivity.activity)
    //   setEditid(id);
    // };
    useEffect(()=>{
      localStorage.setItem("lists",JSON.stringify(listdata))
    },[listdata])

  return (

    <div >
    <div className='container'>
    <div className='header'>SAMIR TODO LIST</div>


    <input type="text" placeholder='Add Activity' value={activity}
     onChange={(e) => setActivity(e.target.value)} />

     <Button  variant='warning' onClick={addActivity} >Add</Button>

     <p className='list-heading'>Here is Your List ! </p>
    
     {listdata!=[] && listdata.map((data,i)=>{
        return (
            <>
                <p key={i}>
                <div className='listdata'>{data}</div>
                <div className='btn-pos'>
                {/* <Button onClick={()=>handleEdit(id)}> Edit</Button> */}
                <Button  variant='warning' onClick={()=>removeActivity(i)}>Remove(-)</Button>
                </div>
                
                </p>
             
            </>
        )
     })}
    </div>
    </div>
  );
}

export default Todo;