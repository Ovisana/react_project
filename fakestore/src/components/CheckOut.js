// import React, { useState } from 'react';
// import { FaMinus, FaPlus } from 'react-icons/fa';

// const CheckoutPage = () => {
//   const [cartItem, setCartItem] = useState({
//     name: 'Ergonomic Plastic Table',
//     price: 826.78,
//     quantity: 1,
//     image: 'https://via.placeholder.com/50', 
//   });
//   const shippingCost = 2.0;

//   const handleQuantityChange = (type) => {
//     setCartItem((prev) => ({
//       ...prev,
//       quantity: type === 'increment' ? prev.quantity + 1 : Math.max(1, prev.quantity - 1),
//     }));
//   };

//   const calculateTotal = () => {
//     return (cartItem.price * cartItem.quantity + shippingCost).toFixed(2);
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row">
//         {/* Left Section: Form */}
//         <div className="col-md-7">
//           <h4>Express Checkout</h4>
//           <div className="d-flex mb-4">
//             <button className="btn btn-dark me-2">Buy with Apple Pay</button>
//             <button className="btn btn-warning">PayPal</button>
//           </div>
//           <p>OR</p>
//           <form>
//             <h5>Customer Information</h5>
//             <div className="mb-3">
//               <input type="email" className="form-control" placeholder="Email *" required />
//             </div>
//             <div className="row">
//               <div className="col-md-6 mb-3">
//                 <input type="text" className="form-control" placeholder="First name *" required />
//               </div>
//               <div className="col-md-6 mb-3">
//                 <input type="text" className="form-control" placeholder="Last name *" required />
//               </div>
//             </div>
//             <h5>Shipping Address</h5>
//             <div className="mb-3">
//               <input type="text" className="form-control" placeholder="Street address *" required />
//             </div>
//             <div className="row">
//               <div className="col-md-6 mb-3">
//                 <input type="text" className="form-control" placeholder="Town / City *" required />
//               </div>
//               <div className="col-md-6 mb-3">
//                 <input type="text" className="form-control" placeholder="Postcode *" required />
//               </div>
//             </div>
//             <div className="mb-3">
//               <select className="form-select" required>
//                 <option value="India">India</option>
//                 <option value="USA">USA</option>
//                 <option value="UK">UK</option>
//               </select>
//             </div>
//           </form>
//         </div>

//         {/* Right Section: Order Summary */}
//         <div className="col-md-5">
//           <h4>Order Summary</h4>
//           <div className="d-flex justify-content-between align-items-center mb-3">
//             <img src={cartItem.image} alt={cartItem.name} width="50" />
//             <div>
//               <h6>{cartItem.name}</h6>
//               <div className="d-flex align-items-center">
//                 <button
//                   className="btn btn-light border me-2"
//                   onClick={() => handleQuantityChange('decrement')}
//                 >
//                   <FaMinus />
//                 </button>
//                 <span>{cartItem.quantity}</span>
//                 <button
//                   className="btn btn-light border ms-2"
//                   onClick={() => handleQuantityChange('increment')}
//                 >
//                   <FaPlus />
//                 </button>
//               </div>
//             </div>
//             <h6>${(cartItem.price * cartItem.quantity).toFixed(2)}</h6>
//           </div>
//           <div className="d-flex justify-content-between mb-2">
//             <span>Subtotal</span>
//             <span>${(cartItem.price * cartItem.quantity).toFixed(2)}</span>
//           </div>
//           <div className="d-flex justify-content-between mb-2">
//             <span>Shipping</span>
//             <span>${shippingCost.toFixed(2)}</span>
//           </div>
//           <div className="d-flex justify-content-between">
//             <strong>Total</strong>
//             <strong>${calculateTotal()}</strong>
//           </div>
//           <h5 className="mt-4">Here's what you get</h5>
//           <ul>
//             <li>✔ Lorem Ipsum is simply dummy text</li>
//             <li>✔ Ipsum Lorem has been Lorem Ipsum</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;

// import React, { useState } from 'react';
// import { FaMinus, FaPlus } from 'react-icons/fa';

// const CheckoutPage = () => {
//   const [cartItem, setCartItem] = useState({
//     name: 'Ergonomic Plastic Table',
//     price: 826.78,
//     quantity: 1,
//     image: 'https://via.placeholder.com/50', 
//   });
//   const shippingCost = 2.0;

//   const handleQuantityChange = (type) => {
//     setCartItem((prev) => ({
//       ...prev,
//       quantity: type === 'increment' ? prev.quantity + 1 : Math.max(1, prev.quantity - 1),
//     }));
//   };

//   const calculateTotal = () => {
//     return (cartItem.price * cartItem.quantity + shippingCost).toFixed(2);
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row">
//         {/* Left Section: Form */}
//         <div className="col-md-7">
//           <h4>Express Checkout</h4>
//           <div className="d-flex mb-4">
//             <button className="btn btn-dark me-2">Buy with Apple Pay</button>
//             <button className="btn btn-warning">PayPal</button>
//           </div>
//           <p>OR</p>
//           <form>
//             <h5>Customer Information</h5>
//             <div className="mb-3">
//               <input type="email" className="form-control" placeholder="Email *" required />
//             </div>
//             <div className="row">
//               <div className="col-md-6 mb-3">
//                 <input type="text" className="form-control" placeholder="First name *" required />
//               </div>
//               <div className="col-md-6 mb-3">
//                 <input type="text" className="form-control" placeholder="Last name *" required />
//               </div>
//             </div>
//             <h5>Shipping Address</h5>
//             <div className="mb-3">
//               <input type="text" className="form-control" placeholder="Street address *" required />
//             </div>
//             <div className="row">
//               <div className="col-md-6 mb-3">
//                 <input type="text" className="form-control" placeholder="Town / City *" required />
//               </div>
//               <div className="col-md-6 mb-3">
//                 <input type="text" className="form-control" placeholder="Postcode *" required />
//               </div>
//             </div>
//             <div className="mb-3">
//               <select className="form-select" required>
//                 <option value="India">India</option>
//                 <option value="USA">USA</option>
//                 <option value="UK">UK</option>
//               </select>
//             </div>
//           </form>
//         </div>

//         {/* Right Section: Order Summary */}
//         <div className="col-md-5">
//           <h4>Order Summary</h4>
//           <div className="d-flex justify-content-between align-items-center mb-3">
//             <img src={cartItem.image} alt={cartItem.name} width="50" />
//             <div>
//               <h6>{cartItem.name}</h6>
//               <div className="d-flex align-items-center">
//                 <button
//                   className="btn btn-light border me-2"
//                   onClick={() => handleQuantityChange('decrement')}
//                 >
//                   <FaMinus />
//                 </button>
//                 <span>{cartItem.quantity}</span>
//                 <button
//                   className="btn btn-light border ms-2"
//                   onClick={() => handleQuantityChange('increment')}
//                 >
//                   <FaPlus />
//                 </button>
//               </div>
//             </div>
//             <h6>${(cartItem.price * cartItem.quantity).toFixed(2)}</h6>
//           </div>
//           <div className="d-flex justify-content-between mb-2">
//             <span>Subtotal</span>
//             <span>${(cartItem.price * cartItem.quantity).toFixed(2)}</span>
//           </div>
//           <div className="d-flex justify-content-between mb-2">
//             <span>Shipping</span>
//             <span>${shippingCost.toFixed(2)}</span>
//           </div>
//           <div className="d-flex justify-content-between">
//             <strong>Total</strong>
//             <strong>${calculateTotal()}</strong>
//           </div>
//           <h5 className="mt-4">Here's what you get</h5>
//           <ul>
//             <li>✔ Lorem Ipsum is simply dummy text</li>
//             <li>✔ Ipsum Lorem has been Lorem Ipsum</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;

// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// import { FaMinus, FaPlus } from 'react-icons/fa';

// const CheckoutPage = () => {
//   const location = useLocation();
//   const cartItems = location.state?.cartItems || [];
//   const [shippingCost] = useState(2.0);

//   const calculateTotal = () => {
//     const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
//     return (subtotal).toFixed(2);
//   };

//   const handleApprove = (details) => {
//     alert(`Transaction completed by ${details.payer.name.given_name}`);
//     console.log("Transaction details:", details);
//   };

//   return (
//     <PayPalScriptProvider options={{ "client-id": "AZq4Up8O_u0OHb8cMdvHeXcktJBZwMbI3wn8o9e-RAfgQ7LczUMOT48qal5AxhxjMWHg3hNVXMXfBKL8", currency: "USD" }}>
//       <div className="container mt-5">
//         <div className="row">
//           <div className="col-md-7">
//             <h4>Express Checkout</h4>
//             <div className="d-flex mb-4">
//               <button className="btn btn-dark me-2">Buy with Apple Pay</button>
//             </div>
//             <p>OR</p>
//             <div className="mt-3">
//               <PayPalButtons
//                 style={{ layout: "vertical" }}
//                 createOrder={(data, actions) => {
//                   return actions.order.create({
//                     purchase_units: [
//                       {
//                         amount: {
//                           value: calculateTotal(), // Pass the total amount
//                         },
//                       },
//                     ],
//                   });
//                 }}
//                 onApprove={(data, actions) => {
//                   return actions.order.capture().then((details) => {
//                     handleApprove(details);
//                   });
//                 }}
//                 onError={(err) => {
//                   console.error("PayPal Checkout onError", err);
//                 }}
//               />
//             </div>
//           </div>

//           {/* Right Section: Order Summary */}
//           <div className="col-md-5">
//             <h4>Order Summary</h4>
//             <ul className="list-group mb-3">
//               {cartItems.map((item, index) => (
//                 <li className="list-group-item d-flex justify-content-between lh-sm" key={index}>
//                   <div>
//                     <h6>{item.title}</h6>
//                   </div>
//                   <span>${item.price}</span>
//                 </li>
//               ))}
//               <li className="list-group-item d-flex justify-content-between">
//                 <span>Total</span>
//                 <strong>${calculateTotal()}</strong>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </PayPalScriptProvider>
//   );
// };

// export default CheckoutPage;





import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useCart } from './CartContext';  // Import CartContext to access cart items
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const CheckoutPage = () => {
  const { cartItems } = useCart();  // Access cart items from context
  const [shippingCost] = useState(2.0);

  const calculateTotal = () => {
    const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
    return (subtotal).toFixed(2);
  };

  const handleApprove = (details) => {
    alert(`Transaction completed by ${details.payer.name.given_name}`);
    console.log("Transaction details:", details);
  };

  return (
    <PayPalScriptProvider options={{ "client-id": "AZq4Up8O_u0OHb8cMdvHeXcktJBZwMbI3wn8o9e-RAfgQ7LczUMOT48qal5AxhxjMWHg3hNVXMXfBKL8", currency: "USD" }}>
      <div className="container mt-5">
        <div className="row">
        <div className="col-md-7">
            <h4>Express Checkout</h4>
            <div className="d-flex mb-4">
              <button className="btn btn-dark me-2">Buy with Apple Pay</button>
            </div>
            <p>OR</p>
            <div className="mt-3">
              <PayPalButtons
                style={{ layout: "vertical" }}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: calculateTotal(), // Pass the total amount
                        },
                      },
                    ],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then((details) => {
                    handleApprove(details);
                  });
                }}
                onError={(err) => {
                  console.error("PayPal Checkout onError", err);
                }}
              />
            </div>
          </div>

          {/* Right Section: Order Summary */}
          <div className="col-md-5">
            <h4>Order Summary</h4>
            <ul className="list-group mb-3">
              {cartItems.map((item, index) => (
                <li className="list-group-item d-flex justify-content-between lh-sm" key={index}>
                  <div>
                    <h6>{item.title}</h6>
                  </div>
                  <span>${item.price}</span>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between">
                <span>Total</span>
                <strong>${calculateTotal()}</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PayPalScriptProvider>
  );
};

export default CheckoutPage;

