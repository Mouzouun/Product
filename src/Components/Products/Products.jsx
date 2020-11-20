import React, { useContext } from 'react'
import { Context } from '../../Datacenter/Datacenter';

import Product from './Product';

export default function Products() {

    const {products}=useContext(Context)
    return (
        <div className='container mt-3 '>
            <div className='row '> 

                {products.map(product=>(


                <Product data={product}/>



            ))}
        </div>      
        </div>
    )
}
