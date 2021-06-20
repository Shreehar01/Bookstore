import React from 'react';
import {Link} from 'react-router-dom';
import Modal from './modal';
import history from '../history';

class App extends React.Component {
  deleteData= async () =>{

    history.push('/mybooks');
    }

  renderActions() {
    return (
      <React.Fragment>
        <button
          onClick={this.deleteData}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/mybooks" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
      return 'Are you sure you want to delete this item?';
  }

  render() {
    return (
      <Modal
        title="Delete Book"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/mybooks')}
        content2={localStorage.selectedBook._id}
      />
    );
  }
}

export default App;
