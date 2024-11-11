import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='border-top' style={{ backgroundColor: "#fafbfc" }}>
            <div className='container'>
                <div className='row p-5 ms-5'>
                    <div className='col-lg-3 col-md-6 mb-4'>
                        <img src='media/logo.svg' style={{ width: "50%", marginBottom: "20px" }} alt='Logo' />
                        <p>© 2010 - 2024, Zerodha Broking Ltd. All rights reserved.</p>
                        <div className="d-flex gap-3 mb-3">
                            <i className="fa-brands fa-x-twitter"></i>
                            <i className="fa-brands fa-square-facebook"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                        <hr/>
                        <div className="d-flex gap-3">
                            <i className="fa-brands fa-youtube"></i>
                            <i className="fa-brands fa-whatsapp"></i>
                            <i className="fa-brands fa-telegram"></i>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 mb-4 ms-5'>
                        <p className="foot-head">Company</p>
                        <Link to='/about' className="foot-links d-block">About</Link>
                        <Link to='/products' className="foot-links d-block">Products</Link>
                        <Link to='/pricing' className="foot-links d-block">Pricing</Link>
                        <Link to='/referral' className="foot-links d-block">Referral programme</Link>
                        <Link to='/careers' className="foot-links d-block">Careers</Link>
                        <Link to='/tech' className="foot-links d-block">Zerodha.tech</Link>
                        <Link to='/press' className="foot-links d-block">Press & media</Link>
                        <Link to='/csr' className="foot-links d-block">Zerodha Cares (CSR)</Link>
                    </div>
                    <div className='col-lg-3 col-md-6 mb-4'>
                        <p className="foot-head">Support</p>
                        <Link to='/contact' className="foot-links d-block">Contact us</Link>
                        <Link to='/support' className="foot-links d-block">Support portal</Link>
                        <Link to='/blog' className="foot-links d-block">Z-Connect blog</Link>
                        <Link to='/charges' className="foot-links d-block">List of charges</Link>
                        <Link to='/resources' className="foot-links d-block">Downloads & resources</Link>
                        <Link to='/videos' className="foot-links d-block">Videos</Link>
                        <Link to='/market' className="foot-links d-block">Market overview</Link>
                        <Link to='/complaint-procedure' className="foot-links d-block">How to file a complaint?</Link>
                        <Link to='/complaint-status' className="foot-links d-block">Status of your complaints</Link>
                    </div>
                    <div className='col-lg-2 col-md-6 mb-4'>
                        <p className="foot-head">Account</p>
                        <Link to='/open-account' className="foot-links d-block">Open an account</Link>
                        <Link to='/fund-transfer' className="foot-links d-block">Fund transfer</Link>
                    </div>
                </div>
                <div className='p-5 ms-5 me-5' style={{ fontSize: ".65rem", lineHeight: "1.8", color: "#9c9a9a"}}>
                    <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href='mailto:complaints@zerodha.com' style={{ textDecoration: 'none' }}>complaints@zerodha.com</a>, for DP related to <a href='mailto:dp@zerodha.com' style={{ textDecoration: 'none' }}>dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                    <p>Procedure to file a complaint on <a href='https://scores.sebi.gov.in/' style={{ textDecoration: 'none' }}>SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                    <p><Link to='/dispute-resolution' style={{ textDecoration: 'none' }}>Smart Online Dispute Resolution</Link> | <Link to='/grievance-mechanism' style={{ textDecoration: 'none' }}>Grievances Redressal Mechanism</Link></p>
                    <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                    <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
                    <p>
                    "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
