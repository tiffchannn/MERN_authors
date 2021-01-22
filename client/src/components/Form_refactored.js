import React, {useState} from 'react';
import {navigate} from '@reach/router';
import axios from 'axios';

// Within Add and Edit: need to include form data, method and URL from props!
const Form = (props) => {
  const [name, setName] = useState(props.name);
  const [errors, setErrors] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();

    setErrors([])

    axios.[props.method](props.url, name)
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

  // if (!loaded) return 'Loading...'

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