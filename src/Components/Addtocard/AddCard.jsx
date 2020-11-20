import React,{useContext} from 'react'
import { Context } from '../../Datacenter/Datacenter'
import Product from '../Products/Product'




export default function AddCard() {
  const {cards}=useContext(Context)


        
     
 
      
    
    
    
    return (

        <div>
            <div><h1 className="text-secondary text-center">My Card</h1></div>
              <div className='container mt-3 '>
              <div className='row '> 
            {cards.map(data=>(
                
                
               
<div className="card col-md-4 mt-2 " style={{width: '17rem'}}>
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{data.price}</h6>
          <p className="card-text">{data.adress_ip}</p>
          <a href="#" className=" card-link container">Details</a>
        </div>
      </div>
                
                    
                
 
                ))}



            
        </div>
        </div>
        </div>
    )
}
