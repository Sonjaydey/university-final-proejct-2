import React, { useEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice';
import Navigation from '../../Shared/Navigation/Navigation';
import UserSidebar from '../../Shared/Sidebar/UserSidebar';
import OrderDetails from './OrderDetails';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true)
    const user = useSelector(selectUser)

    useEffect(() => {
        const getOrders = async() => {
        const res = await fetch(`https://frozen-depths-33463.herokuapp.com/order?email=`+user.email)
        const data = await res.json()
            setOrders(data)
            setLoading(false)
        }

        return getOrders()
      
    }, [user.email])

    return (
        <div className='my-service-section'>
            <Navigation/>
            <div className="px-3 mx-auto">
                <div className="row">
                    <div className="col-md-3">
                        <UserSidebar/>
                    </div>
                    <div className="col-md-9">
                  
                        {!loading && orders.length === 0 ? <h1 className='text-center my-5'>You Have no Order Yet!</h1> : <h4 className='my-4'>My Ordered Service</h4> }
                        {loading ?
                                           
                            <ContentLoader
                            width={1000}
                            height={550}
                            viewBox="0 0 1000 550"
                            backgroundColor="#ababab"
                            foregroundColor="#fafafa"
                            // {...props}
                        >
                            <rect x="51" y="45" rx="3" ry="3" width="906" height="17" />
                            <circle cx="879" cy="123" r="11" />
                            <circle cx="914" cy="123" r="11" />
                            <rect x="104" y="115" rx="3" ry="3" width="141" height="15" />
                            <rect x="305" y="114" rx="3" ry="3" width="299" height="15" />
                            <rect x="661" y="114" rx="3" ry="3" width="141" height="15" />
                            <rect x="55" y="155" rx="3" ry="3" width="897" height="2" />
                            <circle cx="880" cy="184" r="11" />
                            <circle cx="915" cy="184" r="11" />
                            <rect x="105" y="176" rx="3" ry="3" width="141" height="15" />
                            <rect x="306" y="175" rx="3" ry="3" width="299" height="15" />
                            <rect x="662" y="175" rx="3" ry="3" width="141" height="15" />
                            <rect x="56" y="216" rx="3" ry="3" width="897" height="2" />
                            <circle cx="881" cy="242" r="11" />
                            <circle cx="916" cy="242" r="11" />
                            <rect x="106" y="234" rx="3" ry="3" width="141" height="15" />
                            <rect x="307" y="233" rx="3" ry="3" width="299" height="15" />
                            <rect x="663" y="233" rx="3" ry="3" width="141" height="15" />
                            <rect x="57" y="274" rx="3" ry="3" width="897" height="2" />
                            <circle cx="882" cy="303" r="11" />
                            <circle cx="917" cy="303" r="11" />
                            <rect x="107" y="295" rx="3" ry="3" width="141" height="15" />
                            <rect x="308" y="294" rx="3" ry="3" width="299" height="15" />
                            <rect x="664" y="294" rx="3" ry="3" width="141" height="15" />
                            <rect x="58" y="335" rx="3" ry="3" width="897" height="2" />
                            <circle cx="881" cy="363" r="11" />
                            <circle cx="916" cy="363" r="11" />
                            <rect x="106" y="355" rx="3" ry="3" width="141" height="15" />
                            <rect x="307" y="354" rx="3" ry="3" width="299" height="15" />
                            <rect x="663" y="354" rx="3" ry="3" width="141" height="15" />
                            <rect x="57" y="395" rx="3" ry="3" width="897" height="2" />
                            <circle cx="882" cy="424" r="11" />
                            <circle cx="917" cy="424" r="11" />
                            <rect x="107" y="416" rx="3" ry="3" width="141" height="15" />
                            <rect x="308" y="415" rx="3" ry="3" width="299" height="15" />
                            <rect x="664" y="415" rx="3" ry="3" width="141" height="15" />
                            <rect x="55" y="453" rx="3" ry="3" width="897" height="2" />
                            <rect x="51" y="49" rx="3" ry="3" width="2" height="465" />
                            <rect x="955" y="49" rx="3" ry="3" width="2" height="465" />
                            <circle cx="882" cy="484" r="11" />
                            <circle cx="917" cy="484" r="11" />
                            <rect x="107" y="476" rx="3" ry="3" width="141" height="15" />
                            <rect x="308" y="475" rx="3" ry="3" width="299" height="15" />
                            <rect x="664" y="475" rx="3" ry="3" width="141" height="15" />
                            <rect x="55" y="513" rx="3" ry="3" width="897" height="2" />
                            <rect x="52" y="80" rx="3" ry="3" width="906" height="17" />
                            <rect x="53" y="57" rx="3" ry="3" width="68" height="33" />
                            <rect x="222" y="54" rx="3" ry="3" width="149" height="33" />
                            <rect x="544" y="55" rx="3" ry="3" width="137" height="33" />
                            <rect x="782" y="56" rx="3" ry="3" width="72" height="33" />
                            <rect x="933" y="54" rx="3" ry="3" width="24" height="33" />
                        </ContentLoader>:
                        <div className="row">        
                            {
                                orders.map(order => <OrderDetails order={order} key={order._id}></OrderDetails>)
                            }
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;


