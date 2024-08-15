import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState([]);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Thank you for signing up, ${name}! Your interests: ${interests.join(', ')}`);
  };

  const handleInterestChange = (e) => {
    const { value, checked } = e.target;
    setInterests((prevInterests) =>
      checked ? [...prevInterests, value] : prevInterests.filter((interest) => interest !== value)
    );
  };

  return (
    <div>
      <h1>Newsletter Signup</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <fieldset>
          <legend>Interests:</legend>
          <label>
            <input
              type="checkbox"
              value="Sports"
              onChange={handleInterestChange}
            />
            Sports
          </label>
          <label>
            <input
              type="checkbox"
              value="Technology"
              onChange={handleInterestChange}
            />
            Technology
          </label>
          <label>
            <input
              type="checkbox"
              value="Music"
              onChange={handleInterestChange}
            />
            Music
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
