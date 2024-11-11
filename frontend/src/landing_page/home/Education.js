import React from 'react'


function Education() {
    return ( 
        <div className='container mt-3 mb-5'>
            <div className='row'>
                <div className='col-lg-6 col-sm-12 p-4'>
                    <img src='media/education.svg' alt='' style={{width:"80%"}}></img>
                </div>
                <div className='col-lg-6 col-sm-12 p-5 mt-5'>
                    <h1 className='fs-2' >Free and open market education</h1>
                    <p className='mb-4 mt-4'>
                    Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading. 
                    </p>
                    <a href='/' style={{ textDecoration: "none" }}>Varasity&nbsp; &nbsp;<i class="fa-solid fa-arrow-right-long"></i></a>
                    <p className='mb-4 mt-4'>
                    TradingQ&A, the most active trading and investment community in India for all your market related queries. 
                    </p>
                    <a href='/' style={{ textDecoration: "none" }}>TradingQ&A&nbsp; &nbsp;<i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;