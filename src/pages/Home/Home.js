import React from 'react';
import Slider from '../../components/Slider/Slider';
import'./Home.css'
import FeatureProducts from '../../components/FeatureProducts/FeatureProducts';
import Categories from '../../components/Categories/Categories';
import Contact from '../../components/Contact/Contact';
const Home = () => {
    return (
        <div className='home'>
            <Slider></Slider>
            <FeatureProducts type="featured"></FeatureProducts>
          <Categories></Categories>
            <FeatureProducts type="trending"></FeatureProducts>
       <Contact></Contact>
        </div>
    );
};

export default Home;