import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import { axiosWithAuth } from './axiosWithAuth';
import AddFriend from './AddFriend';

export default function FriendsList(props) {
	const [friends, setFriends] = useState([]);

	useEffect(() => {
		axiosWithAuth().get("http://localhost:5000/api/register")
			.then(response => setFriends(response.data))
			.catch(error => console.log(error))
	}, []);

	return (
		<div className="friends-list">
			{friends.map(friend => {
				return (
				<div className="friend">
					{friend.name}
					{friend.age}
					{friend.email}
				</div>
				)
			})}

			<Route path="/friends/add" render={props => <AddFriend {...props} setFriends={setFriends} />} />
		</div>
	)
}
