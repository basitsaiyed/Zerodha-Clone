import React from 'react'
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';


function ProductsPage() {
    return ( 
        <>

            <Hero/>
            <LeftSection
                imageURL="media/kite.png"
                productTitle="Kite"
                productDesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="https://kite-demo.zerodha.com/"
                learnMore="https://zerodha.com/products/kite"
                googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
                appStore="https://apps.apple.com/in/app/kite-zerodha/id1449453802" />
        
            <RightSection
                imageURL="media/console.png" 
                productTitle="Console" 
                productDesc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." 
                link="https://zerodha.com/products/console" 
            />

            <LeftSection 
                imageURL="media/coin.png" 
                productTitle="Coin" 
                productDesc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." 
                tryDemo="https://coin.zerodha.com/" 
                learnMore="" 
                googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
                appStore="https://apps.apple.com/in/app/kite-zerodha/id1449453802" />
            
            <RightSection
                imageURL="media/kiteconnect.png" 
                productTitle="Kite Connect API" 
                productDesc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." 
                link="https://kite.trade/" 
            />
            <LeftSection
                imageURL="media/varsity.png" 
                productTitle="Varsity mobile" 
                productDesc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." 
                tryDemo="" 
                learnMore="" 
                googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
                appStore="https://apps.apple.com/in/app/kite-zerodha/id1449453802" />
            
            <Universe />

        </>
     );
}

export default ProductsPage;