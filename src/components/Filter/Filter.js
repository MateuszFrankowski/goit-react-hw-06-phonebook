import PropTypes from 'prop-types';
import css from './Filter.module.css';
import React from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { setNameFilter } from 'redux/Actions';
export const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = evt => {
    const { value, name } = evt.target;
    if (name === 'filter') {
      dispatch(setNameFilter(value));
    }
  };
  const filterId = nanoid();
  return (
    <div className={css.filter}>
      <label htmlFor={filterId}>Find Contact By Name</label>
      <input id={filterId} type="text" name="filter" onChange={handleChange} />
    </div>
  );
};
