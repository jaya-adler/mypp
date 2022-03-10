import React from 'react';
import {useState} from 'react'
import axios from 'axios'

function Body() {
    const [id,setId] = useState(
        {
            contentType:"",
            res:"",
            path:"",
            image:""
        }
    );
   // const formdata = new FormData();
    // const onimgchangehandler = (event) =>{ 
    //     console.log(event.target.files[0]);
       
    //     setImage(image);
    //     // axios.post('http://localhost:5000/uploadImage',formdata,
    //     // {headers:{"Content-Type":"multipart/form-data"}}).then(res=>{console.log(res.data);});
    // }

    const uploadimg = async (event)=>{
        event.preventDefault();
        const formdata = new FormData(event.currentTarget);
        await axios.post('http://localhost:5000/uploadImage',formdata).then(res=>{ setId(res.data);});
        if(id!==null){
            console.log(id.image)
        }
    }


    
    return (
        <div className='h-auto'>
        {/* <input className='text-sm file:bg-blue-200 file:rounded-full hover:file:bg-blue-100
           file:border-0 file:text-blue-500 file:font-semibold file:p-1 file:px-2' type='file' name="myImage" accept="image/*" onChange={onimgchangehandler}>
           </input> */}
            <div>
           <form onSubmit={uploadimg}
            encType="multipart/form-data">
           <input className='text-sm file:bg-blue-200 file:rounded-full hover:file:bg-blue-100
           file:border-0 file:text-blue-500 file:font-semibold file:p-1 file:px-2'
           type="file" name="myImage" accept="image/*"/>
           <input className='hover:bg-blue-500 hover:text-white text-sm px-2 p-1 rounded-full font-semibold' 
           type="submit" value="Check"/>
           </form>
           </div>
           <div className='my-2'>
               <img className='w-1/2 h-1/2 bg-blue-200 rounded-lg m-1 mx-auto' 
               src={`data:${id.contentType};base64,${id.image}`} alt='Original'></img>
                <img className='w-1/2 h-1/2 bg-blue-200 rounded-lg m-1 mx-auto' 
               src={`data:${id.contentType};base64,${id.image}`} alt='Output'></img>
           </div>
        </div>
    )
}

export default Body
