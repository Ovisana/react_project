import React, { useState } from 'react';

function Sign_Up() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the email submission logic (e.g., send to an API)
    console.log("Email submitted:", email);
  };

  return (
    <section className="newsletter bg-light" style={{ background: 'url(images/pattern-bg.png) no-repeat' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 py-5 my-5">
            <div className="subscribe-header text-center pb-3">
              <h3 className="section-title text-uppercase">Sign Up for our newsletter</h3>
            </div>
            <form id="form" className="d-flex flex-wrap gap-2" onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                className="form-control form-control-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-dark btn-lg text-uppercase w-100">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sign_Up;
