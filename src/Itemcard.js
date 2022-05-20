// import React from 'react';
// import { useCart } from 'react-use-cart';
// import data from './data';

//   const Itemcard = (props) =>{
//     const { addItem , items} = useCart();
   
//     function addTocard(id,item){
//       addItem (item)
//       // console.log(id,item)
      
//       let datasss=props.data;
//       datasss[id-1].isDisabled=true;
//       props.setData(datasss)
//       console.log(props.data)
//     }
    
//     return (
       
//       <div className="cart">
//       <img className="cart-poster" src={props.image} alt={props.name}></img>
//       <h4 className="cart-title">{props.name}</h4>
//       <p className="cart-rating">{props.rating}</p>
//       <p className="cart-price">{props.price}</p>
//       <button disabled = {props.isDisabled} className="cart-button" onClick={()=>addTocard(props.id,props.item)}>Add to cart</button>
//       {/* <button className="cart-button" onClick={()=>addTocard(props.item)}>Add to cart</button> */}
//       </div>
//     )
// }

// export default Itemcard;