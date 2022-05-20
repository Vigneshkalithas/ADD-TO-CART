// import  React from 'react';
// import { useCart } from 'react-use-cart';

// // export function Cart(  ){

// //     const { 
// //         isEmpty,
// //         totalUniqueItems,
// //         items,
// //         totalItems,
// //         cartTotal,
// //         updateItemQuantity,
// //         removeItem,
// //         emptyCart,
// //     } = useCart();
// //     // if(isEmpty) return <h1 classNme="text-center"> Your Cart Is  Empty</h1>
// //     return(
// //         <section className='py-4 container container-button'>
// //              <div className="row-button"> 
// //                 <div>
// //                     {/* <h5 text-button>Cart {totalUniqueItems} total items:{totalItems}</h5>  */}
// //                     <table className="tabel table-light table-hover m0">
// //                         <tbody>
// //                         {items.map((item,index)=>{
// //                             return(
// //                             <tr key={index}>
// //                                 <td><img src={item.image} style={{height:'6rem',marginRight:'8px'}}/></td>
// //                                 <td>{item.name}</td>
// //                                 <td>{item.price}</td>
// //                                 {/* <td>Quantity ({item.quantity})</td> */}
// //                                 <td><button className="btn btn-danger ms-2" onClick={()=>removeItem(item.id)}>Remove</button></td>
// //                             </tr>)
// //                         })}
// //                         </tbody>
// //                     </table>
                
// //                   </div>
// //              </div>
// //          </section>
// //     )
// // }


// const Toggle = () => {
//     const [show, toggleShow] = React.useState(false);
//     const { 
//         isEmpty,
//         totalUniqueItems,
//         items,
//         totalItems,
//         cartTotal,
//         updateItemQuantity,
//         removeItem,
//         emptyCart,
//     } = useCart();
    
  
//     return (
//       <div className='cartButton-head'>
//         <button className='cartButton'
//           onClick={() => toggleShow(!show)}
//         ><i class="bi-cart-fill me-1"></i>Cart <span className='button-span'>{totalUniqueItems}</span>
//         {show ? '' : ''}
//         </button>  
//         {show && 
//         <section className='py-4 container'>
//              <div className="row"> 
//                 <div>
                    
//                     {/* <h5 text-button>Cart {totalUniqueItems} total items:{totalItems}</h5>  */}
                    
//                     <table className="tabel  table-hover m0">
//                         <tbody>
//                         {items.map((item,index)=>{
//                             return(
//                             <tr key={index}>
//                                 <td><img src={item.image} style={{height:'5rem',marginRight:'8px'}}/></td>
//                                 <td>{item.name}</td>
//                                 <td>{item.price}</td>
//                                 {/* <td>Quantity ({item.quantity})</td> */}
//                                 <td><button className="btn btn-danger ms-2" onClick={()=>removeItem(item.id)}>Remove</button></td>
//                             </tr>)
//                         })}
//                         </tbody>
//                     </table>
                
//                   </div>
//              </div>
//          </section>}
//       </div>
//     )
//   }
//   export {Toggle}