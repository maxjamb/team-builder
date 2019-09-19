import React {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import uuid from uuid;


  const initialTeam = [
    {
        id: uuid(),
        name: 'Max',
        email: 'max@email.com',
        role: 'software engineer',
    },
    {
        id: uuid(),
        name: 'Sam',
        email: 'sam@email.com',
        role: 'software engineer',
    },
    {
    id: uuid(),
        name: 'Ayomide',
        email: 'Ayomide@email.com',
        role: 'software engineer',
    }
];

Const initialMemberForm = {
  name: '',
  email: '',
  role: '',
}

function App() {

  const[teamMembers, setTeamMembers] = useState(initialTeam);
  const[memberForm, setMemberForm] = useState(initialMemberForm);
  const handleInputChange = e => {
    
  return (
    <div className="App">
      <header className="team">
        {
          teamMembers.map(member =>(
            <TeamMember
                  key={member.id}
                  member={member}
                  handleEdit={handleEditMember}
            />
          ))
        }
        
      </header>
    </div>
  );
}
}

export default App;
