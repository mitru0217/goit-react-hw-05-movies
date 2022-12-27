import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaSearch } from 'react-icons/fa';
import {
  Header,
  Input,
  Button,
  Form,
} from 'components/styledComponents/SearchForm.styled';

const SearchForm = ({ value, onSubmit, onChange, name }) => {
  const handleSubmit = e => {
    e.preventDefault();
    if (value === '') {
      toast.error('Nothing to show yet. Enter your requst.', {
        duration: 1000,
      });
      return;
    }
    onSubmit();
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <FaSearch size={25} />
        </Button>
        <Input
          type="text"
          autocomplete="off"
          defaultValue={value}
          name="name"
          autoFocus
          placeholder="Search movies"
        />
      </Form>
      <Toaster />
    </Header>
  );
};

export default SearchForm;
