import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  input[type="text"] {
    padding: 10px;
    font-size: 1em;
    border: 2px solid #0071eb;
    border-radius: 5px;
    margin-right: 10px;
    width: 300px;
    outline: none;

    ::placeholder {
      color: #bbb;
    }
  }

  input[type="submit"] {
    background-color: #0071eb;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 1em;
    cursor: pointer;
    outline: none;
  }
`;

function Form({ movieSearch }) {
  const [form, setForm] = useState({
    searchTerm: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      searchTerm: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    movieSearch(form.searchTerm);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <input
        type="text"
        value={form.searchTerm}
        onChange={handleChange}
        placeholder="Enter a movie title..."
      />
      <input type="submit" value="Search" />
    </FormContainer>
  );
}

export default Form;
