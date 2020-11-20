import React, { useContext, useState , useEffect } from 'react'
import { Context } from '../../Datacenter/Datacenter'


export default function Update(props) {

    const{products,updateprod}=useContext(Context)
    const [update,setupdate]=useState({})


    useEffect(() => {
        
        const {id} = props.match.params
        products.filter(data=>data.id == id)
        .map(info=>{
            setupdate({
                name:info.name,
                price :info.price,
                adress_ip : info.adress_ip,
                description :info.description
            })
        })
    }, [])

    function handleInputs(e){
        setupdate(
            {
                ...update,
                [e.target.name]:e.target.value
            }
        )
    }
    function sendToparent(){
        const {id} = props.match.params
        updateprod(update,id)
        props.history.push('/')

    }

   

    return (
        <div className='container' >
            <div className='row'>
            <div className='container text-center mt-2'>
        <h1>Update</h1>
          </div>  

            

                <div className='form-group col-md-6 offset-3 mt-5'>

                <input name='name' type="text" onChange={handleInputs}   defaultValue={update.name} className="form-control mt-4" placeholder='update name'/>
                <input name='price' type="text" onChange={handleInputs} defaultValue={update.price} className="form-control mt-4" placeholder='update price'/>
                <input name='adress_ip' type="text" onChange={handleInputs}  defaultValue={update.adress_ip} className="form-control mt-4" placeholder='update adress_ip'/>
                <input name='description' type="text" onChange={handleInputs}  defaultValue={update.description} className="form-control mt-4" placeholder='update description'/>
                <button onClick={sendToparent}  className='btn btn-danger container mt-3'>Update</button>
    
            </div>
             
            </div>
        </div>
    )
}