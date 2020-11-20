import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../Datacenter/Datacenter'


export default function Addnew(props) {

    const {Addproduct}=useContext(Context)

    const [newproduct,setnewproduct]=useState({})

    function handleInput(e){
        setnewproduct({
            ...newproduct,
            [e.target.name]:e.target.value
        })
    }

    function sendproduct(){
        Addproduct(newproduct)
        props.history.push('/')
    }


    return (
        <div className='form-group container mt-5'>

            <input name='name' onChange={handleInput} type="text" placeholder='enter product name' className='form-control mb-2 col-md-4 container '/>
            <input name='price' onChange={handleInput} type="text" placeholder='enter product price' className='form-control mb-2 col-md-4 container'/>
            <input name='adress_ip' onChange={handleInput} type="text" placeholder='enter product adress_ip' className='form-control mb-2 col-md-4 container'/>
            <textarea className='container' name="description" id=""   onChange={handleInput} placeholder='Product Desciption'></textarea>

            <Link onClick={sendproduct} className="btn btn-primary container">Add new</Link>

        </div>
    )
}
