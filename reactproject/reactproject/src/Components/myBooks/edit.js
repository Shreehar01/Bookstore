import React from 'react';
import {Link} from 'react-router-dom';
import Modal from './modal2';
import history from '../history';

class App extends React.Component {
  deleteToken(){
    history.push('/mybooks');
    }

  renderActions() {
    return (
      <React.Fragment>
        <button
          onClick={this.deleteToken}
          className="ui button primary"
        >
        Confirm
        </button>
        <Link to="/mybooks" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
      return 'Are you sure you want to edit this item ? Please fill the information below:';
  }


  render() {
    console.log(localStorage);
      return (
        <Modal
          title="Edit"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push('/mybooks')}
        />
      );

}
};
export default App;
