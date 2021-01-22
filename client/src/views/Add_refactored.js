// import React, { useState } from 'react';
// import axios from 'axios';
import {Link} from '@reach/router';
import Form from '../components/Form_refactored';

const Add = (props) => {

  return(
    <div>
      <h1>Favorite Authors</h1>
      <p><Link to="/">Home</Link></p>
      <p>Add A New Author: </p>
      <Form
        method="post"
        url={'http://localhost:8000/api/author'}
        name=""
      />
    </div>
  )
};

export default Add;