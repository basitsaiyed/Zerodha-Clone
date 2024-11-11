import React from 'react';

function Universe() {
  return (
    <div className='container mt-5'>
        <div className='text-center p-5'>
            <p style={{ fontSize: '20px' }}>
            Want to know more about our technology stack? Check out the{' '}
            <a href='https://zerodha.tech/' style={{ textDecoration: "none" }}>Zerodha.tech</a> blog.
            </p>
            <h2 className='mt-5' style={{fontsize: "2rem", lineHeight: "1.5"}}>The Zerodha Universe</h2>
            <p style={{ fontSize: '16px', marginTop: "20px" }}>
            Extend your trading and investment experience even further with our partner platforms.
            </p>
        </div>
        <div className='row text-center evenly v-align'>
            <div className='col-12 col-md-4 p-3'>
            <img src='media/zerodhaFundhouse.png' alt='Zerodha Fund House' className='img-fluid' style={{ height: "60px" }} />
            <p className='text-small text-muted' style={{ fontSize: "12px", padding: "1rem" }}>
                Our asset management venture<br />
                that is creating simple and transparent index <br />funds to help you save for your goals.
            </p>
            </div>
            <div className='col-12 col-md-4 p-3'>
            <img src='media/sensibull-logo.svg' alt='Sensibull Logo' className='img-fluid' style={{ height: "50px" }} />
            <p className='text-small text-muted' style={{ fontSize: "12px", padding: "25px" }}>
                Options trading platform that lets you<br />
                create strategies, analyze positions, and examine <br />data points like open interest, FII/DII, and more.
            </p>
            </div>
            <div className='col-12 col-md-4 p-3'>
            <img src='media/tijori.svg' alt='Tijori Logo' className='img-fluid' style={{ height: "60px" }} />
            <p className='text-small text-muted' style={{ fontSize: "12px", padding: "1rem", margin:"0 20px" }}>
                Investment research platform<br />
                that offers detailed insights on stocks,<br /> sectors, supply chains, and more.
            </p>
            </div>
          </div>
          {/* NEXT ROW */}
        <div className='row text-center evenly v-align'>
            <div className='col-12 col-md-4 p-3'>
            <img src='media/streakLogo.png' alt='Zerodha Fund House' className='img-fluid' style={{ height: "60px" }} />
            <p className='text-small text-muted' style={{ fontSize: "12px", padding: "1rem" }}>
                Our asset management venture<br />
                that is creating simple and transparent index <br />funds to help you save for your goals.
            </p>
            </div>
            <div className='col-12 col-md-4 p-3'>
            <img src='media\smallcaseLogo.png' alt='Sensibull Logo' className='img-fluid' style={{ height: "50px" }} />
            <p className='text-small text-muted' style={{ fontSize: "12px", padding: "25px" }}>
                Options trading platform that lets you<br />
                create strategies, analyze positions, and examine <br />data points like open interest, FII/DII, and more.
            </p>
            </div>
            <div className='col-12 col-md-4 p-3'>
            <img src='media\dittoLogo.png' alt='Tijori Logo' className='img-fluid' style={{ height: "60px" }} />
            <p className='text-small text-muted' style={{ fontSize: "12px", padding: "1rem", margin:"0 20px" }}>
                Investment research platform<br />
                that offers detailed insights on stocks,<br /> sectors, supply chains, and more.
            </p>
            </div>
            <div class="col-md-12 text-center mb-3">
                    <button type="button" class="btn btn-primary btn-lg mb-5 signup-btn">Sign up for free</button>
            </div>
      </div>
    </div>
  );
}

export default Universe;
