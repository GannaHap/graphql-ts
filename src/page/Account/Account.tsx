import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

import './Account.css';

const ADD_USER = gql`
  mutation($name: String!, $email: String!) {
    insert_users(object: { email: $email, name: $name }) {
      returning {
        name
        email
        id
      }
    }
  }
`;

interface MutationInventory {
  name: string;
  email: string;
}

function Account() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [insert_users, { data, error, loading }] = useMutation(ADD_USER);

  return (
    <div className="account">
      {error ? <p>Oh no! {error.message}</p> : null}
      {data ? <p>Saved!</p> : null}
      <h4>Register</h4>
      <form className="form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" autoComplete="off" onChange={(e) => setName(e.target.value)} />

        <label htmlFor="email">Email</label>
        <input type="text" id="email" autoComplete="off" onChange={(e) => setEmail(e.target.value)} />

        <button type="submit" className="add-account" onClick={() => name && email && insert_users()}>
          Add Account
        </button>
      </form>
    </div>
  );
}

export default Account;
