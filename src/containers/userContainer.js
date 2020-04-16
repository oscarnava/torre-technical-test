import React from 'react';
import PropTypes from 'prop-types';

export default function UserContainer({ name, picture }) {
  return (
    <div className="user-container">
      <img src={picture} alt={name} />
      <h1>{name}</h1>
    </div>
  );
}

UserContainer.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};
