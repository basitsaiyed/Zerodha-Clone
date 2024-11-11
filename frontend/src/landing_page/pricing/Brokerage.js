import React from 'react';

function Brokerage() {
    return ( 
        <div className='container'>
            <div className='row p-5 border-top'>
                <div className='col-12 text-center'>
                    <p className='fs-5'>
                        <a href='https://zerodha.com/brokerage-calculator#tab-equities' style={{ textDecoration: 'none' }}>
                            Calculate your costs upfront
                        </a> using our brokerage calculator
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className='col-2'></div>
                <div className='col-8'>
                    <p className='h4'>Charges explained</p>
                </div>
                <div className='col-2'></div>
            </div>
            <div className='row'>
                <div className="col-2"></div>
                <div className="col-4">
                    <p>Securities/Commodities transaction tax</p>
                    <p class="p-text">
                        Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.
                    </p>
                    <p class="p-text">
                        When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.
                    </p>
                    <p>Transaction/Turnover Charges</p>
                    <p class="p-text">
                        Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.
                    </p>
                    <p class="p-text">
                        BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)
                    </p>
                    <p class="p-text">
                        BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.
                    </p>
                    <p class="p-text">
                        BSE has revised transaction charges for group A, B and other non-exclusive scrips at ₹375 per crore of turnover on a flat rate basis w.e.f. December 1, 2022.
                    </p>
                    <p class="p-text">
                        BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.
                    </p>
                    <p>Call & trade</p>
                    <p class="p-text">
                        Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square-off orders.
                    </p>
                    <p>Stamp charges</p>
                    <p class="p-text">
                        Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.
                    </p>
                    <p>NRI brokerage charges</p>
                    <ul class="p-text list-items">
                        <li>&#8377;100 per order for futures and options.</li>
                        <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li>&#8377;500 + GST as yearly account maintenance charges (AMC) charges.</li>
                    </ul>
                    <p>Account with debit balance</p>
                    <p class="p-text">
                        If the account is in debit balance, any order placed will be charged &#8377;40 per executed order instead of &#8377;20 per executed order.
                    </p>
                    <p>Charges for Investor's Protection Fund Trust (IPFT) by NSE</p>
                    <ul class="list-items p-text">
                        <li>Equity and Futures - &#8377;10 per crore + GST of the traded value.</li>
                        <li>Options - &#8377;50 per crore + GST of the traded value (premium value).</li>
                        <li>Currency - &#8377;0.05 per lakh + GST of turnover for Futures and &#8377;2 per lakh + GST of premium for Options.</li>
                    </ul>
                </div>
                <div className="col-4">
                    <p>GST</p>
                    <p class="p-text">
                        Tax levied by the government on the services rendered. 18% of (brokerage + SEBI charges + transaction charges)
                    </p>
                    <p>SEBI Charges</p>
                    <p class="p-text">
                        Charged at &#8377;10 per crore + GST by Securities and Exchange Board of India for regulating the markets.
                    </p>
                    <p id="depo_charges">DP (Depository participant) charges</p>
                    <p class="p-text">
                        ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.
                    </p>
                    <p class="p-text">
                        Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.
                    </p>
                    <p class="p-text">
                        Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.
                    </p>
                    <p id="depo_charges">Pledging charges</p>
                    <p class="p-text">&#8377;30 + GST per pledge request per ISIN.</p>
                    <p>AMC (Account maintenance charges)</p>
                    <p class="p-text">
                        For BSDA demat account: Zero charges if the holding value is less than &#8377;4,00,000. To learn more about BSDA, <a href="https://support.zerodha.com/category/account-opening/offline-account-opening/bsda/articles/how-to-open-a-basic-service-demat-account-at-zerodha" style={{textDecoration:"none"}}>Click here</a>
                    </p>
                    <p class="p-text">
                        For non-BSDA demat accounts: &#8377;300/year + 18% GST charged quarterly (90 days). To learn more about AMC, <a href="https://support.zerodha.com/category/account-opening/charges-at-zerodha/statutory-and-exchange/articles/what-is-the-annual-maintenance-charge" style={{textDecoration:"none"}}>Click here</a>
                    </p>
                    <p>Corporate action order charges</p>
                    <p class="p-text">&#8377;20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>
                    <p>Off-market transfer charges</p>
                    <p class="p-text">&#8377;25 or 0.03% of the transfer value (whichever is higher).</p>
                    <p>Physical CMR request</p>
                    <p class="p-text">First CMR request is free. &#8377;20 + &#8377;100 (courier charge) + 18% GST for subsequent requests.</p>
                    <p>Payment gateway charges</p>
                    <p class="p-text">&#8377;9 + GST (Not levied on transfers done via UPI)</p>
                    <p>Delayed Payment Charges</p>
                    <p class="p-text">Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. <a href="https://support.zerodha.com/category/console/ledger/articles/interest-charges" style={{textDecoration:"none"}}>Learn more</a>.</p>
                </div>
                <div className='col-2'></div>
                <div className='col-2 mb-5'></div>
                <div className='col-8 mb-5'>
                    <p>Disclaimer</p>
                    <p class="p-text">For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;
