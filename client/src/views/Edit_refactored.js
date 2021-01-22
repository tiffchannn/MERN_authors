import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import Form from '../components/Form_refactored';

const Edit = (props) => {
  const {id} = props;

  const [authorToUpdate, setAuthorToUpdate] = useState(null);

  // useEffect will let us GET an author at a specific ID
  useEffect(() => {
    axios.get('http://localhost:8000/api/author/' + id)
      .then(res =>
        // need to setAuthorToUpdate bc we are getting info from our database
        setAuthorToUpdate(res.data)
      )
  }, [])

  if (authorToUpdate === null) return 'Loading...';

  return(
    <div>
      <h1>Favorite Authors</h1>
      <p><Link to="/" className="home-link">Home</Link></p>
      <h3>Edit This Author: </h3>
        <Form
          method="put"
          url={'http://localhost:8000/api/author/' + id}
          name={authorToUpdate.name}
          // ALTERNATIVE WAY --> {...authorToUpdate}
        />
    </div>
  )
};

export default Edit;