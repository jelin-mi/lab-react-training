import { useState } from 'react';
import Greetings from './Greetings';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('');
  /* const [errorMessage, setErrorMessage] = useState(undefined); */

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleNationality = (e) => setNationality(e.target.value);

  const handleSignupSubmit = (e) => {};

  return (
    <>
      <h2>Sign up</h2>
      <form onSubmit={handleSignupSubmit}>
        <label>Email</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
          autoComplete="on"
        />
        <label htmlFor="nationality">Nationality</label>

        <select
          name="nationality"
          id="nationality"
          onChange={handleNationality}
        >
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
        <button type="submit">Sign up</button>
      </form>

      {/* { errorMessage && <p className="error-message">{errorMessage}</p> } */}
      <Greetings lang={nationality}>Ale</Greetings>
      <p>
        Your email is: <strong>{email}</strong>
      </p>
    </>
  );
}

export default SignupPage;
