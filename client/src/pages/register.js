import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

export const REGISTER = gql`
  mutation Register($name: String!, $password: String!) {
    createUser(name: $name, password: $password) {
      id
      name
      photo
    }
  }
`;

const Register = () => {
  const [state, setState] = useState({ name: '', password: '' });
  const [register, { data }] = useMutation(REGISTER);
  return data ? (
    JSON.stringify(data)
  ) : (
    <>
      <input
        placeholder='name'
        value={state.name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
      <input
        placeholder='password'
        value={state.password}
        onChange={(e) => setState({ ...state, password: e.target.value })}
      />
      <button onClick={(e) => register({ variables: state })}>register</button>
    </>
  );
};

export default Register;
