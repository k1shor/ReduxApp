import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import DataDisplay from './DataDisplay'

const Main = () => {
    let [posts, setPosts] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(data => setPosts(data))
            .catch(error => console.log(error))

        // axios.get(`https://jsonplaceholder.typicode.com/posts`)
        // .then(response=>{
        //     console.log(response)
        //     setPosts(response.data)})
        // .catch(error=>console.log(error))
    }, [])



    const data = [
        {
            name: "Samsung Galazy A13",
            price: "Rs. 24499",
            image: "https://static-01.daraz.com.np/p/5b1245bd298a1ce3a53662bb7bfa1194.jpg"
        },
        {
            name: "VIvo Y01",
            price: "Rs. 13999",
            image: "https://static-01.daraz.com.np/p/d484cf322af3cf9c52671b3323ed0076.jpg"
        },
        {
            name: "Redmi A1",
            price: "Rs. 11999",
            image: "https://static-01.daraz.com.np/p/ee824cd8de19340991405fe9656b91ae.jpg"
        },
        {
            name: "Infinix Note7",
            price: "Rs. 15495",
            image: "https://static-01.daraz.com.np/p/cc02702da5e1dfaec8b237276f2cda78.jpg"
        },
        {
            name: "Samsung Galazy A13",
            price: "Rs. 24499",
            image: "https://static-01.daraz.com.np/p/5b1245bd298a1ce3a53662bb7bfa1194.jpg"
        },
        {
            name: "VIvo Y01",
            price: "Rs. 13999",
            image: "https://static-01.daraz.com.np/p/d484cf322af3cf9c52671b3323ed0076.jpg"
        },
        {
            name: "Redmi A1",
            price: "Rs. 11999",
            image: "https://static-01.daraz.com.np/p/ee824cd8de19340991405fe9656b91ae.jpg"
        },
        {
            name: "Infinix Note7",
            price: "Rs. 15495",
            image: "https://static-01.daraz.com.np/p/cc02702da5e1dfaec8b237276f2cda78.jpg"
        },
        {
            name: "Samsung Galazy A13",
            price: "Rs. 24499",
            image: "https://static-01.daraz.com.np/p/5b1245bd298a1ce3a53662bb7bfa1194.jpg"
        },
        {
            name: "VIvo Y01",
            price: "Rs. 13999",
            image: "https://static-01.daraz.com.np/p/d484cf322af3cf9c52671b3323ed0076.jpg"
        },
        {
            name: "Redmi A1",
            price: "Rs. 11999",
            image: "https://static-01.daraz.com.np/p/ee824cd8de19340991405fe9656b91ae.jpg"
        },
        {
            name: "Infinix Note7",
            price: "Rs. 15495",
            image: "https://static-01.daraz.com.np/p/cc02702da5e1dfaec8b237276f2cda78.jpg"
        },
        {
            name: "Samsung Galazy A13",
            price: "Rs. 24499",
            image: "https://static-01.daraz.com.np/p/5b1245bd298a1ce3a53662bb7bfa1194.jpg"
        },
        {
            name: "VIvo Y01",
            price: "Rs. 13999",
            image: "https://static-01.daraz.com.np/p/d484cf322af3cf9c52671b3323ed0076.jpg"
        },
        {
            name: "Redmi A1",
            price: "Rs. 11999",
            image: "https://static-01.daraz.com.np/p/ee824cd8de19340991405fe9656b91ae.jpg"
        },
        {
            name: "Infinix Note7",
            price: "Rs. 15495",
            image: "https://static-01.daraz.com.np/p/cc02702da5e1dfaec8b237276f2cda78.jpg"
        }
    ]
    // name, price, image

    return (
        <>
            {/* <DataDisplay name="kishor" address="kathmandu"/>

        <DataDisplay name="Prabin rai" address="budhanilkantha"/>

        <DataDisplay name="reeyaz" address='ktm'/>


<div style={{display:'flex', flexWrap:'wrap',justifyContent:'space-evenly'}}>
        {
            data.map(product=> {
                return <Card item={product}/>
            })
        }
        </div> */}


            {
                posts.map(post => {
                    return <>
                        <h1>{post.id}:
                            <Link to={`/${post.id}`}>
                                {post.title}
                            </Link>
                        </h1>
                        {/* <p>
                            {post.body}
                            <br />
                        </p> */}
                    </>
                })
            }
        </>
    )
}

export default Main