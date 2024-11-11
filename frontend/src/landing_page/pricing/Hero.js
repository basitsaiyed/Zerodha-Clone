import React from 'react'

function Hero() {
    return ( 
        <div className='container mt-5 pt-5'>
            <div className='row mt-5 p-5 text-center'>
                <h1 >Charges</h1>
                <p className='fs-5 text-muted'>List of all charges and taxes</p>
            </div>
            <div className='row mt-5 p-5 text-center'>
                 <div className='col p-3 '>
                    <img src='media/pricing-eq.svg' alt='ecosystem' style={{ width: "75%" }}></img>
                    <h2>Free equity delivery</h2>
                    <p className='fs-6 text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col p-3 '>
                    <img src='media/other-trades.svg' alt='ecosystem' style={{ width: "75%"}}></img>
                    <h2>Intraday and F&O</h2>
                    <p className='fs-6 text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col p-3 '>
                    <img src='media/pricing-eq.svg' alt='ecosystem' style={{ width: "75%"}}></img>
                    <h2>Free direct MF</h2>
                    <p className='fs-6 text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;