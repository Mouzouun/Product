import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../Datacenter/Datacenter'


export default function Details(props) {

    const{products}=useContext(Context)
    const {id} = props.match.params

    return (
        <div className='container' >
            <div className='row'>

            {products.filter(data=>data.id == id)
            .map(info=>

            <div className="card offset-1 col-md-10 mt-5 " >
                <div className="card-body">
                <h5 className="card-title">{info.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{info.price}</h6>
                <p className="card-text">{info.adress_ip}</p>
                <p className="card-text">{info.description}</p>
                <Link to='/' className="card-link">Back</Link>

                </div>
            </div>
                )
            }
            </div>
        </div>
    )
}