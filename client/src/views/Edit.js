import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
// import Form from '../components/Form';

const Edit = (props) => {
  const {id} = props;
  // author is singular here since we are updating a specific author
  const [author, setAuthor] = useState('');
  const [errors, setErrors] = useState('');

  // useEffect will let us GET an author at a specific ID
  useEffect(() => {
    axios.get('http://localhost:8000/api/author/' + id)
      .then(res => {
        console.log(res.data)
        setAuthor(res.data)
        setLoaded(true)
      })
  }, [])

  // takes care of the name change
  const handleNameChange = (name) => {
    setAuthor({...author, name})
  }

  // triggered by onSubmit, will update the specific author
  const updateAuthor = e => {
    e.preventDefault();

    axios.put('http://localhost:8000/api/author/' + id, {
      name: author.name
    })
      .then(res => {
        console.log('Response: ', res.data)
        navigate('/')
      })
      .catch(err => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message)
        }
        setErrors(errorArr);
        console.log(err.response.data)
      })

  }

  return(
    <div>
      <h1>Favorite Authors</h1>
      <p><Link to="/" className="home-link">Home</Link></p>
      <h3>Edit This Author: </h3>
      <div>
        <form onSubmit={updateAuthor}>
          <p>
            <label>Name:</label>
            <input type="text" name="name" value={author.name} onChange={(e) => handleNameChange(e.target.value)} />
          </p>
          <input type="submit" name="submit" className="action-btn" />
          <input type="button" name="cancel" value="Cancel" className="action-btn" onClick={() => navigate("/")}/>
          <h3 className="errors">{errors}</h3>
        </form>

      </div>
    </div>
  )
};

export default Edit;