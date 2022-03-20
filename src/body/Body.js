import React from 'react';
import {useState} from 'react'
import axios from 'axios'

function Body() {
    const [id,setId] = useState(
        {
            contentType:"",
            result:"",
            path:"",
            image:"",
            output:""
        }
    );
    // const [Allimages,setAllimages] = useState([{
    //     contentType:"",
    //     res:"",
    //     path:"",
    //     image:""
    // }]); 

     
   // const formdata = new FormData();
    // const onimgchangehandler = (event) =>{ 
    //     console.log(event.target.files[0]);
       
    //     setImage(image);
    //     // axios.post('http://localhost:5000/uploadImage',formdata,
    //     // {headers:{"Content-Type":"multipart/form-data"}}).then(res=>{console.log(res.data);});
    // }



    // const getall = async () =>{
    //     //  await axios.get('http://localhost:5000/getAllimage').then(res => {console.log(res);setAllimages(res.data)});
    //     //  console.log(Allimages)

    //     await axios.get('http://localhost:5002/').then(res => {console.log(res.data)})
    // }


    

    const uploadimg = (event)=>{
        event.preventDefault();
        
        const formdata = new FormData(event.currentTarget);
        // const dat = formdata.values().next().value;
        // axios.post('http://localhost:5000/uploadImage',formdata).then(res=>{  setId(res.data);});
        // if(id!==null){
        //     console.log(id)
        // }
        axios.post(`https://tmpdtn-bkend.herokuapp.com/getResult`,formdata).then(res=>{  setId(res.data)});
        if(id!==null){
            console.log(id)
        }

    }


    
    return (
        <div className='min-h-fit'>
        {/* <input className='text-sm file:bg-blue-200 file:rounded-full hover:file:bg-blue-100
           file:border-0 file:text-blue-500 file:font-semibold file:p-1 file:px-2' type='file' name="myImage" accept="image/*" onChange={onimgchangehandler}>
           </input> */}

            <div className='m-4'>
            <div className='flex justify-center '>
               <p className='text-white text-sm'>
                   Choose your image to detect.
               </p>
           </div>
           <form className='flex  flex-col justify-center items-center my-2' onSubmit={uploadimg}
            encType="multipart/form-data">
           <input className=' m-2 text-sm file:bg-blue-200 file:rounded-full hover:file:bg-blue-100
           file:border-0 file:text-blue-500 file:font-semibold file:p-1 file:px-2'
           type="file" name="myImage" accept="image/*"/>
           <input className='bg-[#B2BEB5] transition ease-in-out delay-50 -skew-x-12 border-x-8 hover:-translate-y-1 
         hover:-translate-x-1 border-b-4 border-b-black  text-white text-sm px-2 p-1 font-semibold' 
           type="submit" value="Check"/>
           </form>
           </div>


           <div className='m-2 p-1'>
           <div className='flex  bg-white flex-col rounded md:flex-row justify-center ali m-2'>
               <img className=' rounded-lg  p-1  md:w-1/2 ' 
               src={`data:;base64,${id.image}`} alt='Original'></img>
                <img className='  rounded-lg p-1  md:w-1/2' 
               src={`data:;base64,${id.output}`} alt='Output'></img>

           </div>
           <div className='flex justify-center items-center'>
                   <p className=' -skew-x-12 rounded m-2 p-1 bg-white w-fit text-[#FF5733]'>{`OUTPUT = ${id.result.valueOf()?`Tampered`:`Not Tampered`}`}</p>
            </div>
           {/* <div className='p-2 overflow-y-scroll w-1/4 '>
               {Allimages.map( (val) => {
                    return(
                        <img className=' bg-white rounded-lg  my-2 ' 
                        src={`data:${val.contentType};base64,${val.image}`} alt='history'></img>
                    )
               })}
           </div> */}
           </div>


           {/* <div>
           <button onClick={getall}>Show</button>
           </div> */}
        </div>
    )
}

export default Body
