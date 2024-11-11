import React from 'react';

function RightSection({ imageURL, productTitle, productDesc, link }) {
    return (
        <div className='container'>
            <div className='row align-items-center mx-auto' style={{ maxWidth: '1100px' }}>
                <div className='col-12 col-md-5 p-4 order-md-1'>
                    <h1 className='fs-2 text-center text-md-start'>{productTitle}</h1>
                    <p className='mb-4 mt-3 text-center text-md-start'>
                        {productDesc}
                    </p>
                    <div className='text-center text-md-start'>
                        <a href={link} style={{ textDecoration: 'none', marginRight: '60px' }}>
                            Learn More&nbsp;&nbsp;<i className="fa-solid fa-arrow-right-long"></i>
                        </a>
                    </div>
                </div>
                <div className='col-12 col-md-7 p-4 order-md-2'>
                    <img src={imageURL} alt={productTitle} className='img-fluid' />
                </div>
            </div>
        </div>
    );
}

export default RightSection;
