import React from 'react';
import './../../Home.css'

const BusinessInfo = () => {
    return (
        <div className='business-info-section'>
            <div className="container text-white">
                <div className="row">
                    <div className="col-md-7 py-5">
                        <h5 className='py-3'><span className='brand-first'>Electronic </span> <span className='brand-second'>Shop</span></h5>
                        <h3 className='py-2 h2'>Expert Delivery Done Fast</h3>
                        <p className='py-2'>Fast, Affordable Tablet, Laptop, Game Console and Cell Phone Repair. Your gadgets play a major role in your professional, personal and school life. When your phone, tablet, or laptop breaks you want an expert to handle the repair. That’s where we come in. With over a decade of experience in the electronics repair industry, <span className='brand-first'>Electorinic</span> <span className='brand-second'>shop</span> can get the job done quickly and effectively.</p>
                        <button className='btn btn-schedule bg-danger text-white'>WHO WE ARE</button>
                    </div>
                    <div className="col-md-5 pt-4">
                        <div className="business-info card news p-4 text-dark">
                                <h6 className='py-2 sub-header'>WHY CHOOSE US ?</h6>
                                <h2 className='py-2 h2'>Trusted source for elctronic product buye</h2>
                                <p>
                                    <span className='mx-2 h4'><i className="bi bi-check2-circle"></i></span>
                                    FREE DIAGNOSTIC
                                </p>
                                <p>
                                    <span className='mx-2 h4' ><i className="bi bi-check2-circle"></i></span>
                                    WE OFFER THE BEST PRICES
                                </p>
                                <p> 
                                    <span className='mx-2 h4'><i className="bi bi-check2-circle"></i></span>
                                    QUICK DELIVERY PROCESS
                                </p>
                                <p> 
                                    <span className='mx-2 h4'><i className="bi bi-check2-circle"></i></span>
                                    EXCHANGE AVAIABLE
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessInfo;