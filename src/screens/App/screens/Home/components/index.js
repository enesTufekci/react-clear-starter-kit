import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="text-center">
    <h1> Home </h1>
    <Link to="/about"> About </Link>
  </div>
);

export default Home;
