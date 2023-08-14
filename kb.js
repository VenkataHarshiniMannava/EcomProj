fetch(`https://react-http-471b4-default-rtdb.firebaseio.com/cart${kb}.json/${key}`,
  {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json', 
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    console.log('Data deleted successfully');
  })
  .catch((error) => {
    console.error('Error deleting data:', error.message);
  });



  // <tbody >
            // <tr >
            //   <td ><img className={classes.image} src={item.imageUrl}/> Album {index+1}</td>
            //   <td ><Row className='mt-4'>
            //     <Col>
            //     {` $ ${item.price}`}</Col></Row></td>
            //   <td><Row className=' mt-4'>
            //     <Col md={1} md-sm={1} className='ms-1'>{item.amount}</Col> <Col><Button onClick={()=>{
            //          removeitem(item._id,item)
            //     }} size='sm' className='bg-danger'>REMOVE</Button></Col> </Row> </td>
            // </tr>
            // </tbody>








            import React, { useContext, useEffect, useState } from 'react'
import classes from './cartitem.module.css'
import { Button, Container, Table,Row,Col} from 'react-bootstrap'
import Contextdataitem from '../../contexapi/Contextdata'
import axios from 'axios'
import Header from '../headers/Header'
const cartElements = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ]
    
    
const Cartitem = () => {
  const ctx=useContext(Contextdataitem)
  const kb=localStorage.getItem("name")
 const [data,setdata]=useState([])
 const[item,setcartitem]=useState(false)
 const[total,setcarttotal]=useState(0)
const cartdata=()=>{

}
 useEffect(()=>{
  axios.get(`https://crudcrud.com/api/703357d46c894cdf9cc861365d6f72e0/cart${kb}`).then((res)=>{
    console.log(res,"asdsa")
    setdata(res.data)
  }).catch(err=>{
    console.log(err)
  })
 },[ctx.Totalamount])




 const removeitem=(key,item)=>{
  axios.delete(`https://crudcrud.com/api/703357d46c894cdf9cc861365d6f72e0/cart${kb}/${key}`).then(res=>
  {
    ctx.removeitem(item)
  }).catch((err)=>{
    console.log(err)
  })
  
 }
 
  return (
    <React.Fragment>
      
<Header></Header>
<Container className='d-flex'>
  <section>
    <div className={classes.cartitem}>
        <div className="">
        
        </div>
        <h2 className='text-center'>CART</h2>
        <Container>
      {
        ctx.item.map((item,index)=>{
            return  <Container><div >
              <div className={classes.cartitems}>
                <figure ><img className={classes.image}  src={item.imageUrl} alt="" /></figure>
                <section className='px-2'>
                  <div>Music</div>
                <div className='fw-bold'>{item.title}</div>
                <p >{`$${item.price}`}</p>
                </section>
                </div>
              
            </div>
            </Container>
            
            
            
            
            
        })
      }

    </Container >
    <Container >
    <Container className='d-flex justify-content-end'><h2>Total</h2> <div className='fs-5 ms-3 mt-1'> {`$${ctx.amount}`}</div> </Container>
    </Container>
    <Container className='text-center mt-5'>
        <Button onClick={cartdata}>Purchase</Button>
    </Container>
    </div>


    </section>
    </Container>
    </React.Fragment>
  )
}

export default Cartitem




fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAn0VjPSpLqwdZj7HmH0biVcKK0NJblxrI'
,{
 method:'POST',
 body:JSON.stringify({
   idToken:ctx.idtoken,
   password:"09876578878",
   returnSecureToken:true
 }),
 headers:{
   "Content-Type": "application/json"
 }
}).then(res=>console.log(res)).catch(err=>console.log(err.message))







import React, { useContext } from 'react';
import classes from './ItemsSection.module.css';
import { Card, Container, Button } from 'react-bootstrap';
import CartContext from './CartContext';
import {Link} from 'react-router-dom';




const Items = () => {

    const {addToCart} = useContext(CartContext);
    const productsArr = [

        {
            id: 'c1',

            quantity : '',

            title: 'Colors',

            price: 100,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

        },

        {

            id: 'c2',

            quantity : '',

            title: 'Black and white Colors',

            price: 50,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

        },

        {
            id: 'c3',

            quantity : '',

            title: 'Yellow and Black Colors',

            price: 70,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

        },

        {
            id: 'c4',

            quantity: '',

            title: 'Blue Color',

            price: 100,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

        }

    ];

    const handleToCart = (item) => {
        addToCart(item);
    }




    return (
        <>
            <Container style={{margin: '0px 90px', padding:'0px 170px'}}  >

                <Card className='mb-5 border-0 ' style={{display:'flex', flexDirection:'row',flexWrap:'wrap', justifyContent:'center'}} >
                    {productsArr.map((item) => (
                        <div className={classes.card} key={item.id}>
                            <Card.Title><h4 className='text-center'>{item.title}</h4></Card.Title>
                            <div className={classes.imgDiv}>
                                <Link to={`/store/:${item.title}`} state={item}>
                                <Link to={`/product/${encodeURIComponent(JSON.stringify(item))}`} style={{ textDecoration: "none" }} state={item}>
                                  <Card.Img className={classes.img} variant="top" src={item.imageUrl} />
                                </Link>
                            </div>
                            <Card.Footer className='d-flex justify-content-around align-items-center'>Price: ${item.price}
                                <Button onClick={() => handleToCart(item)} >Add to Cart</Button>
                            </Card.Footer>
                        </div>
                    ))}
                </Card>
               
            </Container>


        </>


    )
}
export default Items;