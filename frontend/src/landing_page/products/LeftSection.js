import React from 'react';

function LeftSection({ imageURL, productTitle, productDesc, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className='container'>
            <div className='row align-items-center mx-auto' style={{ maxWidth: '1100px' }}>
                <div className='col-12 col-md-7 p-4 order-md-1 order-2'>
                    <img src={imageURL} alt={productTitle} className='img-fluid' />
                </div>
                <div className='col-12 col-md-5 p-4 order-md-2 order-1'>
                    <h1 className='fs-2 text-center text-md-start'>{productTitle}</h1>
                    <p className='mb-4 mt-3 text-center text-md-start'>
                        {productDesc}
                    </p>
                    <div className='text-center text-md-start'>
                        {tryDemo && (
                            <a href={tryDemo} className='d-block mb-2' style={{ textDecoration: 'none' }}>
                                Try Demo&nbsp;&nbsp;<i className="fa-solid fa-arrow-right-long"></i>
                            </a>
                        )}
                        {learnMore && (
                            <a href={learnMore} style={{ textDecoration: 'none' }}>
                                Learn More&nbsp;&nbsp;<i className="fa-solid fa-arrow-right-long"></i>
                            </a>
                        )}
                    </div>
                    <div className='mt-3 text-center text-md-start'>
                        {googlePlay && (
                            <a href={googlePlay} style={{ textDecoration: 'none', marginRight: '15px' }}>
                                <img src='media/googlePlayBadge.svg' alt='Google Play' className='img-fluid' />
                            </a>
                        )}
                        {appStore && (
                            <a href={appStore}>
                                <img src='media/appStoreBadge.svg' alt='App Store' className='img-fluid' />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
