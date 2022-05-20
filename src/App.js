import "./App.css";
import { useState } from "react";


function App() {
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


  return (
    <div className="App">
    <div className="container">
    <div className="row nav-row">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="btn btn-outline-dark"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <i className="fa fa-shopping-cart px-2" aria-hidden="true"></i>Cart
            <span className="badge bg-dark text-white ms-1 rounded-pill m-2">
              {cart.length}
            </span>
          </button>
        </nav>
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Product Lists
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">

                <table className="tabel  table-hover m0">
                         <tbody>
                                  {cart.map((item,index)=>{
                                    return(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td><img src={item.image} style={{height:'5rem',marginRight:'8px'}}/></td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td><button className="btn btn-warning ms-2" onClick={()=>removeCart(item)}><img src="https://img.icons8.com/material-sharp/15/000000/filled-trash.png"/></button>
                                        </td>
                                    </tr>)
                                })}
                        </tbody>
                    </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {data.map((item, index) => (
          <div className="col-lg-3 col-md-4 card-space" key={index}>
            <div className="card h-100">
              <img src={item.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text"> {item.rating}</p>
                <p className="card-text"> {item.price}</p>
                <button disabled={item.isDisabled} className="btn btn-outline-dark " onClick={()=> addToCart(item,index)}>
                 <span>Add to cart</span> <img className="icon-button"src="https://img.icons8.com/fluency/20/000000/add-shopping-cart.png"/>
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
    </div>
  );
}


export default App;