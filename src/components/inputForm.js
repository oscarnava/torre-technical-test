import React from 'react';
import PropTypes from 'prop-types';

export default class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.inputReference = React.createRef();
  }

  onClick = (e) => {
    e.preventDefault();
    const { onFetch } = this.props;
    onFetch(this.inputReference.current.value);
  }

  render() {
    const { user } = this.props;
    return (
      <div className="user-input-container">
        <form>
          <label htmlFor="public-id">
            User public id:
            <input id="public-id" type="text" defaultValue={user} ref={this.inputReference} />
          </label>
          <button type="submit" onClick={this.onClick}>Fetch</button>
        </form>
      </div>
    );
  }
}

InputForm.propTypes = {
  user: PropTypes.string.isRequired,
  onFetch: PropTypes.func.isRequired,
};
