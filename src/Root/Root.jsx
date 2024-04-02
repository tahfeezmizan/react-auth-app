import React from 'react';
import Navigation from '../components/Header/Navigation';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Root = () => {
    return (
        <div>
          <Navigation></Navigation>  
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Root;