import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid mt-5 pt-5' id='supportHero'>
            <div className='pt-5' id='supportWrapper'>
                <h5>Support Portal</h5>
                <a href='/'>Track Tickets</a>
            </div>
            <div className='row p-5 ms-5'>
                <div className='col'>
                    <h4>Search for an answer or browse help topics to create a ticket</h4>
                    <form className="d-flex" role="search">
                        <input 
                            className="form-control me-2 searchBox" 
                            type="search" 
                            placeholder="Eg: how do i activate F&O, why is my order getting rejected ..." 
                            aria-label="Search" 
                        />
                    </form>
                    <div className="links mt-2">
                        <a href="/">Track account opening</a>&nbsp;&nbsp;
                        <a href="/">Track segment activation</a>&nbsp;&nbsp;
                        <a href="/">Intraday margins</a>&nbsp;&nbsp;
                        <a href="/">Kite user manual</a>
                    </div>
                </div>
                <div className='col p-3 ms-5'>
                    <h4>Featured</h4>
                    <ol>
                        <li><a href="/">Muhurat Trading session on account of Diwali, November 2024</a></li>
                        <li><a href="/">Surveillance measure on scrips - October 2024</a></li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;
