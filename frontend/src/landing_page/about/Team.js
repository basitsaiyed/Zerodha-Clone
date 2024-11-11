import React from 'react'


function Team() {
    return ( 
        <div className='container'>
            <div className='row p-5'>
                <h1 className='mt-5 text-center fs-2' >People</h1>
            </div>
            <div className='row'>
                <div className='col-2' ></div>
                <div className='col-3 p-4'>
                    <img src='media/nithinKamath.jpg' alt='' style={{ width: "100%", borderRadius: "100%" }}></img>
                    <div style={{textAlign:'center', marginTop:'20px'}}>
                        <h5>Nithin Kamath</h5>
                        <p>Founder, CEO</p>
                    </div>
                </div>
                <div className='col-5' style={{marginLeft:"50px"}}>
                    <p className='mb-4 mt-5'>
                    Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p className='mb-4 mt-4'>
                    He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC). 
                    </p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on &nbsp;
                        <a href='/' style={{ textDecoration: "none" }}>Homepage</a> /&nbsp;
                        <a href='/' style={{ textDecoration: "none" }}>TradingQnA</a> /&nbsp;
                        <a href='/' style={{textDecoration:"none"}}>Twitter</a></p>
                </div>
            </div>
        </div>
     );
}

export default Team;