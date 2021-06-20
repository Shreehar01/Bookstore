import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Button,
Checkbox,
Form,
Input,
Radio,
Select,
TextArea,
} from 'semantic-ui-react'

class Modal extends React.Component {
  constructor () {
      super();
      this.state = {
        Subject: '',
        ForTaking:'',
        BookName:'',
        Edition:'',
        AdditionalNotes: '',
        Professor:''
      };
      this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit= this.onFormSubmit.bind(this);
    }


    handleChange = (e, { name, value }) => this.setState({ [name]: value })

  onFormSubmit = event => {
    event.preventDefault();
    const data = {
      Subject: this.state.Subject,
      ForTaking:this.state.ForTaking,
      BookName: this.state.BookName,
      Edition: this.state.Edition,
      AdditionalNotes: this.state.AdditionNotes,
      Professor: this.state.Professor,
      Authentication: `Bearer ${localStorage.token}`
    };
    console.log(this.state);
    axios
    .post("http://localhost:9000/books", data)
    .then((res) =>{

      history.push('/mybooks');

      }).catch(err => console.log(err));
  };

render(){
  const options = [
  { key: 'y', text: 'Yes', value: true },
  { key: 'n', text: 'No', value: false }
]
  return ReactDOM.createPortal(
    <div onClick={() => history.push('/mybooks')} className="ui dimmer modals visible active">
      <div
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">Add a New Book</div>
        <div className="content">Please fill the information below. Be as decriptive as you can so that other users can have the most accurate information of the book.</div>
        <div className="form">
          <div className="form-group">
          <Form>
      <Form.Group unstackable widths={2}>
        <Form.Input name='Subject' value= {this.state.Subject} onChange={this.handleChange} label='Subject' placeholder='Eg: Physics' />
        <Form.Input name='Professor' value= {this.state.Professor} onChange={this.handleChange} label='Professor' placeholder='Eg: Dr.  Kumar ' />
      </Form.Group>
      <Form.Group widths='equal'>
        <Form.Input name='BookName'    value= {this.state.BookName} onChange={this.handleChange} label="Book's Name" placeholder='Eg: Elementary Math' />
        <Form.Input name='Edition' value= {this.state.Edition} onChange={this.handleChange} label='Edition' placeholder='Eg: Third' />
        <Form.Field name='ForTaking' value= {this.state.ForTaking} onChange={this.handleChange} control={Select} label='ForTaking' options={options}  placeholder='ForTaking'/>
      </Form.Group>
      <Form.Field name='AdditionalNotes' value= {this.state.AdditionalNotes} onChange={this.handleChange}
          control={TextArea}
          label='Additional Information'
          placeholder='Tell us more about the book and your preferences on how other users can contact you.'
        />
    </Form>
          </div>
        </div>
        <div className="actions">

          <React.Fragment>
            <button
              onClick={this.onFormSubmit}
              className="ui button primary"
            >
            Add
            </button>
            <Link to="/mybooks" className="ui button">
              Cancel
            </Link>
          </React.Fragment>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
}
};

export default Modal;
