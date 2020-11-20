import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../Datacenter/Datacenter'

export default function Product(props) {
  
  const {filterProduct}=useContext(Context)

  function sendToDataCenter(){


  filterProduct(props.data.id)  
      
    
  }


    return (

    
        <div className="card col-md-4 mt-2 mb-2 container" style={{width: '10rem'}}>
        <div className="card-body">
          <h5 className="card-title">{props.data.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.data.price}</h6>
          <p className="card-text">{props.data.adress_ip}</p>
          <Link onClick={sendToDataCenter} to='/AddToCard' className=" btn btn-outline-dark card-link">Add to card </Link>
          <Link  to={'/details/' + props.data.id} className=" btn btn-outline-secondary card-link">Details</Link>
          <Link to={'/update/'+ props.data.id} className=" btn btn-outline-dark card-link">Update</Link>
        </div>
      </div>

    )
}
