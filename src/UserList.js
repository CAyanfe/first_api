import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserList.css"; // Import the CSS for styling

function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";

    axios
      .get(apiUrl)
      .then((response) => {
        setListOfUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h2>List of Users</h2>
      <ul className="list-group">
        {listOfUsers.map((user) => (
          <li key={user.id} className="list-group-item">
            <h3>{user.name}</h3>
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Address:</strong> {user.address.street},{" "}
              {user.address.city}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function UserList() {
//   const [listOfUsers, setListOfUsers] = useState([]);

//   useEffect(() => {
//     // Define the URL of the JSONPlaceholder API to fetch user data
//     const apiUrl = "https://jsonplaceholder.typicode.com/users";

//     // Use Axios to fetch data
//     axios
//       .get(apiUrl)
//       .then((response) => {
//         // Update the state with the fetched data
//         setListOfUsers(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>List of Users</h2>
//       <ul>
//         {listOfUsers.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default UserList;

// // src/UserList.js
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// // import "./UserList.css";

// function UserList() {
//   const [listOfUsers, setListOfUsers] = useState([]);

//   useEffect(() => {
//     // Make a GET request to the JSONPlaceholder API to fetch the list of users
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         setListOfUsers(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []); // Empty dependency array to run the effect only once

//   return (
//     <div className="custom-card">
//       <h1>List of Users</h1>
//       <Row>
//         {listOfUsers.map((user) => (
//           <Col key={user.id} sm={6} md={4} lg={3}>
//             <Card style={{ margin: "1rem" }}>
//               <Card.Body>
//                 <Card.Title className="card-title">{user.name}</Card.Title>
//               </Card.Body>
//               <ListGroup className="list-group-flush">
//                 <ListGroup.Item>Email: {user.email}</ListGroup.Item>
//                 <ListGroup.Item>Phone: {user.phone}</ListGroup.Item>
//                 <ListGroup.Item>Website: {user.website}</ListGroup.Item>
//               </ListGroup>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// }

// export default UserList;
