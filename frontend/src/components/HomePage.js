import React, {useState} from 'react'
import NavBar from './Auth/Navbar.js';
import Closing from './Auth/Closing.js';
import { Row, Container, Form } from 'react-bootstrap';
import Contents from './Contents.js'
import SearchMaps from './SearchMaps.js'

import {getAllBooks} from '../actions/book';
import { useDispatch } from 'react-redux';

// For the switch button
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const HomePage = () => {
  const dispatch = useDispatch();

  // For the switch button
  const [state, setState] = React.useState({
    checkedB: false,
  });
  const [search, setSearch] = useState('');
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const ownerInformation = JSON.parse(localStorage.getItem('profile'));

  
  const searchChange = (e) =>{
    console.log("Event is printed from search change", e.target.value)
    //console.log("Printing the search stat")
    setSearch(e.target.value)
    console.log("Search state from the homepage", search)
    dispatch(getAllBooks(search));
  }

    return (
        <div>
            <NavBar homepage = {false}/>
            < br />
            <Container fluid="md">
  <Row>
  <Form.Group>
  <Form.Control onChange = {searchChange} value = {state.search} size="lg" type="text" placeholder="Search for the books by their subject's name." />
  
</Form.Group>
  </Row>
  <Row>
  <FormControlLabel
        control={
          <Switch
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Show in Maps"
      />
  </Row>
</Container>
            



            
            
            < br/>
            {!state.checkedB ? <Contents mybooks = {false} /> : <SearchMaps />}
            
            <Closing />
        </div>
    )
}

export default HomePage
