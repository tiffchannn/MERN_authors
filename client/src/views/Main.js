import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const Main = () => {
	// list of authors
	const [authors, setAuthors] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:8000/api/author")
			.then(res => {
				setAuthors(res.data)
			})
			.catch(err => console.log(err))
	}, []);

	const deleteAuthor = id => {
		console.log('ID was clicked: ', id);
		axios.delete('http://localhost:8000/api/author/' + id)
			.then(res => {
				const filtered = authors.filter(author => author._id !== id)
				setAuthors(filtered)
			})
	}

	return (
		<div>
			<h1>Favorite Authors</h1>
			<p><Link to="/new" className="add-link">Add an Author</Link></p>
			<p>We have quotes by:</p>
			<table>
				<tr>
					<th>Author</th>
					<th>Actions Available</th>
				</tr>
				{authors.map((author, idx) => {
					return <tr key={idx}>
						<td>
							{author.name}
						</td>
						<td>
							<button className="action-btn" onClick={(e) => navigate("/edit/" + author._id)}>Edit</button>
							<button className="action-btn" onClick={(e) => deleteAuthor(author._id)}>Delete</button>
						</td>
					</tr>
				})}
			</table>
		</div>
	)
}

export default Main;

