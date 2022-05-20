import { useState } from "react";
import Card from "./Cart"
import { Cards } from "./Cards";
import { Nav } from "./Nav"; 
 
 function Home(){
    const [cart,setCart]=useState([])
    const [data,setdata]=useState(
      [
        {
                id:1,
                image: "https://static.vecteezy.com/system/resources/previews/005/331/807/original/skincare-products-nine-icons-vector.jpg",
                name: "Fancy Product",
                rating: "",
                price: "$40.00 - $80.00",
                isDisabled:false,
               },
              { id:2,
                image: "https://static.vecteezy.com/system/resources/previews/001/222/480/non_2x/online-grocery-shopping-concept-vector.jpg",
                name: "Special Item",
                rating: "⭐⭐⭐⭐⭐",
                price: "$40.00 - $80.00",
                isDisabled: false,
              },
              {
                id:3,
                image: "https://thumbs.dreamstime.com/b/bookshop-bookstore-building-facade-row-books-window-vector-illustration-99251970.jpg",
                name: "Sale Item",
                rating: "",
                price: "$50.00 $25.00",
                isDisabled: false,
              },
              {
                id:4,
                image: "https://thumbs.dreamstime.com/b/groceries-icon-vector-set-commercial-use-98679652.jpg",
                name: "Popular Item",
                rating: "⭐⭐⭐⭐⭐",
                price: "$40.00",
                isDisabled: false,
              },
              {
                id:5,
                image: "https://static.vecteezy.com/system/resources/previews/005/895/679/original/illustration-concept-of-online-clothing-store-shopping-buying-clothes-shoes-clothing-store-products-on-the-smartphone-screen-collection-of-clothes-on-a-hanger-autumn-winter-wardrobe-vector.jpg",
                name: "Fancy Product",
                rating: "",
                price: "$40.00 - $80.00",
                isDisabled: false,
              },
              {
                id:6,
                image: "https://i.pinimg.com/originals/f5/6e/d4/f56ed491c6077086731913e66876ff66.jpg",
                name: "Sale Item",
                rating: "",
                price: "$50.00 $25.00",
                isDisabled: false,
              },
              { id:7,
                image: "https://previews.123rf.com/images/lgrape/lgrape1801/lgrape180100022/93359707-set-di-attrezzature-sportive-stile-cartone-animato-immagine-isolata-su-sfondo-bianco-.jpg",
                name: "Special Item",
                rating: "⭐⭐⭐⭐⭐",
                price: "$40.00 - $80.00",
                isDisabled: false,
              },
              {
                id:8,
                image: "https://images.creativemarket.com/0.1.0/ps/671401/1200/798/m1/fpnw/wm0/vector-colorful-kitchen-and-cooking-icons-.jpg?1442914932&s=3d76d713c348774ac8a677da7be6e3d8",
                name: "Popular Item",
                rating: "⭐⭐⭐⭐⭐",
                price: "$40.00",
                isDisabled: false,
              },
      ]
      )
  
  
    const addToCart=(item,id)=>{
      let temp=data
      temp[id].isDisabled=true
    setCart([...cart,item])
    setdata(temp)
    }
  
    const removeCart = (item)=>{
    setCart(cart.filter((x)=> x!==item));
        let index= item.id-1
        let temp=data
        temp[index].isDisabled=false
        setdata(temp)
      }

    return(
        <>
        <div className="App">
          <div className="container">
              <div className="row nav-row">
                    <Nav cart={cart}/>
                    <Card  removeCart={removeCart} cart={cart} setCart={setCart} data={data} setdata={setdata} />
                </div>
                    <Cards data={data} addToCart={addToCart}/>
          

          </div>
    </div>
        </>
    )
 }

 export default Home;