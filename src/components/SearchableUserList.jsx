import React, { useState } from 'react';

const initialUsers = [
  { id: 1, name: 'Murali', role: 'Frontend Developer' },
  { id: 2, name: 'Neha', role: 'UI/UX Designer' },
  { id: 3, name: 'Rahul', role: 'React Developer' },
  { id: 4, name: 'Amit', role: 'Fullstack Developer' },
];

function SearchableUserList() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = initialUsers.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '1rem' }}>
      <input
        type="text"
        placeholder="Search user by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '1rem', padding: '0.5rem' }}
      />

      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.role}
          </li>
        ))}
      </ul>

      {filteredUsers.length === 0 && <p>No users found</p>}
    </div>
  );
}

export default SearchableUserList;
