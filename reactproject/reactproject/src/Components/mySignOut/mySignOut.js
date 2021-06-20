import React from 'react';
import {Link} from 'react-router-dom';
import Modal from './modal';
import history from '../history';

class App extends React.Component {
  deleteToken(){
    localStorage.removeItem('token');
    history.push('/');
    }

  renderActions() {
    return (
      <React.Fragment>
        <button
          onClick={this.deleteToken}
          className="ui button negative"
        >
          SignOut
        </button>
        <Link to="/homepage" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
      return 'Are you sure you want to sign out?';
  }

  render() {
    return (
      <Modal
        title="Sign Out"

        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/homepage')}
      />
    );
  }
}

export default App;
