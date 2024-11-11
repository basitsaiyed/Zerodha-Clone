import React from 'react'

function Hero() {
    return ( 
        <div className='container p-5 mt-5'>
            <div className='row text-center mb-5'>
                <h1 className='mt-5 '>Zerodha Products</h1>
                <p style={{fontSize:'20px'}}>Sleek, modern, and intuitive trading platforms</p>
                <p>Check out our <a href='/' style={{textDecoration:"none"}}>investment offerings →</a></p>
            </div><br/>
            <hr/>
        </div>
     );
}

export default Hero;