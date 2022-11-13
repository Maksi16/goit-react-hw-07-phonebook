import React from 'react';
import { nanoid } from 'nanoid';
import { Label, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getValue } from 'redux/selectors';
import { setTextFilter } from 'redux/filtersSlice';

export const Filter = () => {
  const value = useSelector(getValue);
  const dispatch = useDispatch();

  const filterContact = e => {
    dispatch(setTextFilter(e.currentTarget.value));
  };

  const idFilter = nanoid(5);

  return (
    <Label htmlFor={idFilter}>
      Find contacts by name
      <Input
        id={idFilter}
        type="text"
        placeholder="Enter a name"
        value={value}
        onChange={filterContact}
      />
    </Label>
  );
};
