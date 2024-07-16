import React, { useState} from 'react';
import '../App.css';

function Contact() {
  const [users, setUsers] = useState([]);

 
    fetch('https://hackathoran-2024-backend.onrender.com/api/users')
      .then(response => response.json())
      .then(data => setUsers(() => data.content))
      .catch(console.log("Erreur fetching"));
console.log(users);      
      
return (
  <>
  {users.map(user => <p> {user.name}
                        {user.age}
                        {user.phone}</p>)}
                        </>
)

  

  
}

export default Contact;