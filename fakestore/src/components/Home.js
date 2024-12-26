import React from 'react';
import Describetion from './describetion';
import Banner from './Banner';
import Shop from './shop';
import OurNewArrivals from './OurNewArrivals';
import Winter_collection from './winter_collection';
import Best_Selling_Items from './Best_Selling_Items';
import Circle from './circle';
import Quote from './quote';
import You_May_Also_Like from './You_May_Also_Like';
import Read_Blog_Posts from './Read_Blog_Posts';
import Logo_bar from './logo_bar';
import Sign_Up from './Sign_Up';
import Follow_us from './follow_us';
import Cart from './Cart';

const Home = () => {
  return (
    <div>
      <Cart/>
      <Banner/>
      <Describetion/>
      <Shop/>
      <OurNewArrivals/>
      <Winter_collection/>
      <Best_Selling_Items/>
      <Circle/>
      <Quote/>
      <You_May_Also_Like/>
      <Read_Blog_Posts/>
      <Logo_bar/>
      <Sign_Up/>
      <Follow_us/>
    </div>
  );
};

export default Home;
