import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../Navbar'

const Home = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
      fetch(`http://fakestoreapi.com/products`)
      .then(res=>res.json())
      .then(data=>dispatch({type: "LOAD_DATA",payload:data}))
      .catch(err=>console.log(err))
    },[])

  const item_store = useSelector(store=> store.itemStore)
    const items = item_store.items

    const addToCart = item => e => {
      dispatch({
        type:"ADD_TO_CART",
        payload: item
      })
    }
    return (
    <>
    <Navbar/>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 p-3 m-auto g-4 w-100 ">

        {
            items && items.map((item)=>{
                return <div className="col">
                <div className="card">
                  <img src={item.image} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <h6 className="card-title">$ {item.price}</h6>
                    <p className="card-text">
                        {item.description}
                    </p>
                    <h6>Rating: 
                        {item.rating && item.rating.rate &&
                        <>
                        {item.rating.rate}
                        </>}
                    </h6>
                    <h6>Count in Stock:
                        {item.rating.count}
                    </h6>


                    <button className='btn btn-warning w-100' onClick={addToCart(item)}>Add to Cart</button>
                  </div>
                </div>
              </div>
            })
        }
        </div>
    </>
  )
}

export default Home