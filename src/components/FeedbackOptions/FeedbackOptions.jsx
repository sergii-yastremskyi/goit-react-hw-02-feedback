import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import css from './feedbackOptions.module.css';
import PropTypes from 'prop-types';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const FeedbackOptions = ({ onChange, options }) => {
  return (
    <div className={css.optionContainer}>
      <ul className={css.optionsList}>
        {' '}
        {options.map(option => (
          <li className={css.optionsListItem} key={nanoid()}>
            <button
              className={css.optionButton}
              onClick={onChange}
              name={option}
              value={option}
              type="button"
            >
              {capitalizeFirstLetter(option)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};
export default FeedbackOptions;
