import React from 'react';
import PropTypes from 'prop-types';

export default function InputForm(props) {
  const { user, inputReference, onFetch } = props;
  return (
    <div className="user-input-container">
      <form>
        <label htmlFor="public-id">
          User public id:
          <input id="public-id" type="text" defaultValue={user} ref={inputReference} />
        </label>
        <button type="submit" onClick={onFetch}>Fetch</button>
      </form>
    </div>
  );
}

InputForm.propTypes = {
  user: PropTypes.string.isRequired,
  inputReference: PropTypes.elementType.isRequired,
  onFetch: PropTypes.func.isRequired,
};
