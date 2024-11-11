import React from 'react'

function CreateTicket() {
    return (  
        <div className='container mt-5 pt-5'>
            <div className='row mt-5 p-5'>
                <p className='fs-4 text-muted'>To create a ticket, select a relevant topic</p>
            </div>
            <div className='row ms-5'>
                <div className='col'>
                    <p className='fs-5 text-muted'><i class="fa-solid fa-circle-plus"> </i> &nbsp;Account Opening</p>
                    <a href='/' style={{textDecoration:"none", lineHeight:"2"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Getting started</a><br/>
                    <a href='/' style={{textDecoration:"none", lineHeight:"2"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Online</a><br/>
                    <a href='/' style={{textDecoration:"none", lineHeight:"2"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Offline</a><br/>
                    <a href='/' style={{textDecoration:"none", lineHeight:"2"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Charges</a><br/>
                    <a href='/' style={{textDecoration:"none", lineHeight:"2"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Company, Partnership and HUF</a><br/>
                    <a href='/' style={{textDecoration:"none", lineHeight:"2"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Non Resident Indian (NRI)</a><br/>
                </div>
                <div className='col'>
                    <p className='fs-5 text-muted'><i class="fa-regular fa-user"></i> &nbsp; Your Zerodha Account</p>
                    <a href='/' style={{textDecoration:"none", lineHeight:"2"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login credentials</a><br/>
                    <a href='/' style={{textDecoration:"none", lineHeight:"2"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Your Profile</a><br/>
                    <a href='/' style={{textDecoration:"none", lineHeight:"2"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Account modification and segment addition</a><br/>
                    <a href='/' style={{textDecoration:"none", lineHeight:"2"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CMR & DP ID</a><br/>
                    <a href='/' style={{textDecoration:"none", lineHeight:"2"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nomination</a><br/>
                    <a href='/' style={{textDecoration:"none", lineHeight:"2"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Transfer and conversion of shares</a><br/>
                </div>
                <div className='col'>
                    <p className='fs-5 text-muted'><i class="fa-solid fa-chart-column"></i> &nbsp;Trading and Markets</p>
                    <a href='/' style={{textDecoration:"none", lineHeight:"2"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Trading FAQs</a><br/>
                    <a href='/' style={{textDecoration:"none", lineHeight:"2"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kite</a><br/>
                    <a href='/' style={{textDecoration:"none", lineHeight:"2"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Margins</a><br/>
                    <a href='/' style={{textDecoration:"none", lineHeight:"2"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Product and order types</a><br/>
                    <a href='/' style={{textDecoration:"none", lineHeight:"2"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Corporate actions</a><br/>
                    <a href='/' style={{textDecoration:"none", lineHeight:"2"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kite features</a><br/>
                </div>
            </div>
            <div className='row ms-5 mt-5'>
                <div className='col'>
                    <p className='fs-5 text-muted'><i class="fas fa-credit-card"></i> &nbsp;Funds</p>
                    <a href='/' style={{textDecoration:"none", lineHeight:"2"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fund withdrawal</a><br/>
                    <a href='/' style={{textDecoration:"none", lineHeight:"2"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Adding funds</a><br/>
                    <a href='/' style={{textDecoration:"none", lineHeight:"2"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Adding bank accounts</a><br/>
                    <a href='/' style={{textDecoration:"none", lineHeight:"2"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;eMandates</a><br/>
                </div>
                <div className='col'>
                    <p className='fs-5 text-muted'><i class="fas fa-terminal"></i> &nbsp; Console</p>
                    <a href='/' style={{textDecoration:"none", lineHeight:"2"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IPO</a><br/>
                    <a href='/' style={{textDecoration:"none", lineHeight:"2"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Portfolio</a><br/>
                    <a href='/' style={{textDecoration:"none", lineHeight:"2"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Funds statement</a><br/>
                    <a href='/' style={{textDecoration:"none", lineHeight:"2"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Profile</a><br/>
                    <a href='/' style={{textDecoration:"none", lineHeight:"2"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reports</a><br/>
                    <a href='/' style={{textDecoration:"none", lineHeight:"2"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Referral program</a><br/>
                </div>
                <div className='col'>
                    <p className='fs-5 text-muted'><i class="fab fa-creative-commons-sa"></i> &nbsp;Coin</p>
                    <a href='/' style={{textDecoration:"none", lineHeight:"2"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Understanding mutual funds and Coin</a><br/>
                    <a href='/' style={{textDecoration:"none", lineHeight:"2"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Coin app</a><br/>
                    <a href='/' style={{textDecoration:"none", lineHeight:"2"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Coin web</a><br/>
                    <a href='/' style={{textDecoration:"none", lineHeight:"2"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Charges</a><br/>
                    <a href='/' style={{textDecoration:"none", lineHeight:"2"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Transactions and reports</a><br/>
                    <a href='/' style={{textDecoration:"none", lineHeight:"2"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;National Pension Scheme (NPS)</a><br/>
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;