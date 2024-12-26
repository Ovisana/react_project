// import React from 'react';
// import { useCart } from './CartContext'; // Import the Cart Context
// import { Link } from 'react-router-dom'; // Import Link

// function Cart() {
//   const { cartItems } = useCart(); // Access cart items
//   const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

//   return (
//     <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasCart" aria-labelledby="MyCart">
//       <div className="offcanvas-header justify-content-center">
//         <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//       </div>
//       <div className="offcanvas-body">
//         <h4>Your Cart</h4>
//         <ul className="list-group mb-3">
//           {cartItems.map((item, index) => (
//             <li className="list-group-item d-flex justify-content-between lh-sm" key={index}>
//               <div>
//                 <h6 className="my-0">{item.title}</h6>
//               </div>
//               <span>${item.price}</span>
//             </li>
//           ))}
//           <li className="list-group-item d-flex justify-content-between">
//             <span>Total</span>
//             <strong>${totalAmount.toFixed(2)}</strong>
//           </li>
//         </ul>

//         {/* Use Link for Checkout button */}
//         <Link to={{ pathname: '/checkout', state: { cartItems } }}>
//           <button className="btn btn-primary w-100">Checkout</button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Cart;



import React from 'react';
import { useCart } from './CartContext'; // Import the Cart Context
import { Link } from 'react-router-dom'; // Import Link
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function Cart() {
  const { cartItems } = useCart(); // Access cart items
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  const handleApprove = (details) => {
    alert(`Transaction completed by ${details.payer.name.given_name}`);
    console.log("Transaction details:", details);
  };

  return (
    <PayPalScriptProvider options={{ "client-id": "Your-Sandbox-Client-ID", currency: "USD" }}>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasCart" aria-labelledby="MyCart">
        <div className="offcanvas-header justify-content-center">
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <h4>Your Cart</h4>
          <ul className="list-group mb-3">
            {cartItems.map((item, index) => (
              <li className="list-group-item d-flex justify-content-between lh-sm" key={index}>
                <div>
                  <h6 className="my-0">{item.title}</h6>
                </div>
                <span>${item.price}</span>
              </li>
            ))}
            <li className="list-group-item d-flex justify-content-between">
              <span>Total</span>
              <strong>${totalAmount.toFixed(2)}</strong>
            </li>
          </ul>

          {/* PayPal Button */}
          <div className="mt-3">
            <PayPalButtons
              style={{ layout: "horizontal" }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: totalAmount.toFixed(2), // Total price
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

          {/* Checkout with Other Methods */}
          <Link to="/checkout" state={{ cartItems }}>
            <button className="btn btn-secondary w-100 mt-2">Checkout with Other Methods</button>
          </Link>
        </div>
      </div>
    </PayPalScriptProvider>
  );
}

export default Cart;

