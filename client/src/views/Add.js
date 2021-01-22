import React from 'react';
// import axios from 'axios';
import {Link} from '@reach/router';
import Form from '../components/Form';

const Add = (props) => {
  return(
    <div>
      <h1>Favorite Authors</h1>
      <p><Link to="/">Home</Link></p>
      <p>Add A New Author: </p>
      <Form />
    </div>
  )
};

export default Add;