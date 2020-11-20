import React, { createContext, useEffect, useState } from 'react'
import { db } from '../Firebase/config'


export const Context=createContext()

export  function Datacenter(props) {

    const [products,setproducts]=useState([])
    const [cards,setcards]=useState([])

    useEffect(() => {
        function fetchData(){
            db.collection('products').get()
            .then(result=>{
                const data=result.docs.map(product=>{
                    return{
                        ...product.data(),
                        id:product.id
                    }
                })
                setproducts(data)
            })
        }
        fetchData()


    }, [])

    function Addproduct(data){
        db.collection('products').add(data)
  
    }
    function filterProduct(id){
        const result= products.filter(data=>data.id==id)
        console.log(result);
        db.collection('cards').add(...result)
      }
      useEffect(() => {
        function fetchData(){
            db.collection('cards').get()
            .then(result=>{
                const data=result.docs.map(cards=>{
                    return{
                        ...cards.data(),
                        id:cards.id
                    }
                })
                setcards(data)
            })
        }
        fetchData()


    }, [])

    // useEffect(() => {
    //     db.collection('products').add({
    //         name:'iphone 12 pro max',
    //         price:'1200$',
    //         adress_ip:'23.4535.2432',
    //         description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ."
    //     },
       
    //    )
        
    //  }, [])
    function updateprod(update,id){
        // create const where new data gonna be stored
        const newproduct = {
            id,
            name:update.name,
            price:update.price,
            adress_ip:update.adress_ip,
            description:update.description
        }
        setproducts(
            products.map(cnt=>cnt.id == id ? cnt= newproduct : cnt)
        )
        db.collection('products').doc(id).update(update)
        console.log(update)
        console.log(id)


    }


    return (
        <div>
            <Context.Provider value={{
                products,
                Addproduct,
                filterProduct,
                updateprod,
                cards,
                
            }}>
                {
                    props.children
                }
            </Context.Provider>
        </div>
    )
}
