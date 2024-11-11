import React from 'react'

function Hero() {
    return ( 
        <div className='container p-5 mt-5'>
            <div className='row text-center mt-5'>
                <img src='media/homeHero.png' alt='Hero img' className='mb-5' style={{width:"61%", marginLeft:"20%"}}/>
                <h1 className='mt-5 '>Invest in everthing</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <div class="col-md-12 text-center ">
                    <button type="button" class="btn btn-primary btn-lg mb-5 signup-btn">Sign up for free</button>
                </div>
                
            </div>
        </div>
     );
}

export default Hero;