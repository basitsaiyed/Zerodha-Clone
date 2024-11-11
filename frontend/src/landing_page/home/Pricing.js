import React from 'react'

function Pricing() {
    return ( 
        <div className='container p-3'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-5'>Unbeatable pricing</h1>
                    <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <div>
                    <a href='/' style={{textDecoration:"none"}}>See Pricing&nbsp; &nbsp;<i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
                <div className='col-2 p-3 mt-5'>
                    <img src='media/pricing-eq.svg' alt='ecosystem' style={{ width: "60%", marginTop:"20%" }}></img>
                    <p style={{fontSize:"12px"}} className='text-muted'>Free account opening</p>
                </div>
                <div className='col-2 p-3 mt-5'>
                    <img src='media/pricing-eq.svg' alt='ecosystem' style={{ width: "60%", marginTop:"20%" }}></img>
                    <p style={{fontSize:"12px", zIndex:'100'}} className='text-muted'>Free equity delivery and direct mutual funds</p>
                </div>
                <div className='col-2 p-3 mt-5'>
                    <img src='media/other-trades.svg' alt='ecosystem' style={{ width: "60%", marginTop:"20%" }}></img>
                    <p style={{fontSize:"12px"}} className='text-muted'>Intraday and F&O</p>
                </div>
            </div>
        </div>
     );
}

export default Pricing;