import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'
import EmailInfoBox from './EmailInfoBox'
import {Container, Row, Col} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';

import './index.css';

const SearchMaps = ({books, latitude, longitude}) => {
    const [locationInfo, setLocationInfo] = useState(null)
    const [selectedBook, setSelectedBook] = useState([])
    const [emails, setEmails] = useState([]);
    console.log("Printing the value of books from search maps", books)
    console.log("Printing the value of selectedbook", locationInfo)
    const sentId = useSelector((state)=> state.mailsent);
    console.log("List of book ids inside the SearchMap function", sentId)
    const markers = books.map((book, index) => {
        return <LocationMarker key={index} lat={book.latitude} lng={book.longitude} onClick={() => setLocationInfo(book)} />
    })
    console.log("Selected book from the maps in the homepage", selectedBook);
    return (
        <Container>
  <Row>
    <Col sm={8}>
    <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyC4Z5Qz97EWcoCczNn2IcYvaYG0L9pe6Rk" }}
                defaultCenter={ {lat: latitude,lng:longitude,} }
                defaultZoom={13}
            >
                {markers}
            </GoogleMapReact>
            
        </div>
  


    </Col>
    <Col sm={4}>
    {<LocationInfoBox books = {books} locationInfo={locationInfo} emails = {emails} setEmails = {setEmails} setSelectedBook = {setSelectedBook} selectedBook = {selectedBook}/>}
    {<EmailInfoBox emails = {emails} setEmails = {setEmails} setSelectedBook = {setSelectedBook} selectedBook = {selectedBook}/>}
    
    </Col>
    
  </Row>
  </Container>
               
    )
}



export default SearchMaps