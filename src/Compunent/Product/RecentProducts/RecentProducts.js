import React from 'react';
import { Row } from 'react-bootstrap';
import RecentProductCard from './RecentProductCard';
import './RecentProducts.css';

const RecentProducts = () => {
    return (
        <div className="product-Item">
            <div className="text-center pt-5 pb-5">
                <h3>Recent Products</h3>
                <p>Recent put graduated basketball or football</p>
            </div>
            <Row>
                <RecentProductCard/>
                <RecentProductCard/>
                <RecentProductCard/>
                <RecentProductCard/>
                <RecentProductCard/>
                <RecentProductCard/>
                <RecentProductCard/>
                <RecentProductCard/>
            </Row>
            
        </div>
    );
};

export default RecentProducts;