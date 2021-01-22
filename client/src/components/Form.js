import React, {useState} from 'react';
import {navigate} from '@reach/router';
import axios from 'axios';


const Form = (props) => {
  const [name, setName] = useState('');
  const [errors, setErrors] = useState([]);


  const handleSubmit = e => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/author', {name})
      .then(res => {
        // console.log('Response: ', res.data)
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
      <form onSubmit={handleSubmit}>
        <p>
          <label>Name:</label>
          <input type="text" value={name} name="name"  onChange={(e) => setName(e.target.value)} />
        </p>
        <input type="submit" name="submit" className="action-btn"  />
        <input type="button" name="cancel" value="Cancel" className="action-btn" onClick={() => navigate("/")}/>
        {errors.map( (err, index) => <h3 className="errors" key={index}> {err}</h3>)}
      </form>
    </div>
  );
};

export default Form;