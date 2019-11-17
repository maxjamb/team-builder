import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const initialMemberList = [
  {
    name: 'Max',
    email: 'max@email.com',
    role: 'software engineer',
},
{
    name: 'Sam',
    email: 'sam@email.com',
    role: 'software engineer',
},
{
    name: 'Ayomide',
    email: 'Ayomide@email.com',
    role: 'software engineer',
}]

const initialMemberState= {
name: '',
email: '',
role: '',
}

function App() {

  const [teamMembers, setTeamMembers]= useState(initialMemberList);
  const [member, setMember] = useState(initialMemberState);
  const handleInputChange = e => {
    setMember({ ...member, [e.target.name]: e.target.value });
  }
  const handleSubmit = e => {
    e.preventDefault();
    setTeamMembers(teamMembers.concat(member));
    
  }
  return (
    <div className="App">
      <form onSubmit={e => handleSubmit(e)}>
        <label>
          name:
          <input
            type="text"
            name="name"
            onChange={e => handleInputChange(e)}
          />
        </label>
        <label>
          email:
          <input
            type="text"
            name="email"
            onChange={e => handleInputChange(e)}
          />
        </label>
        <label>
          role:
          <input
            type="text"
            name="role"
            onChange={e => handleInputChange(e)}
          />
        </label>
        <button>Submit!</button>
      </form>
      <h1>teamMembers</h1>
      {teamMembers.map(user => {
          return <p>{user.name}</p>
      })}
    </div>
  );
}


export default App;
