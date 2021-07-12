import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'
import EmailInfoBox from './EmailInfoBox'
import {Container, Row, Col} from 'react-bootstrap';

import './index.css';

// define constants
const eventData = [
    {lat: 31.3,lng:31.3, info:'Book1', email: 'joshishreehar@gmail.com'},
    {lat: 32.3,lng:31.3, info:'Book2', email: 'kalopool81@gmail.com'},
    {lat: 33.3,lng:31.3, info:'Book3', email: 'sjoshi4@gmail.com'},
    {lat: 34.3,lng:31.3, info:'Book4', email: 'kalopool00@gmail.com'},
    {lat: 35.3,lng:31.3, info:'Book5', email: 'elonmusk@gmail.com'},    
]

const SearchMaps = ({books}) => {
    const [locationInfo, setLocationInfo] = useState(null)
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [emails, setEmails] = useState([]);
    const markers = books.map((book, index) => {
        return <LocationMarker key={index} lat={book.latitude} lng={book.longitude} onClick={() => setLocationInfo({ title: book?.info, email: book?.email })} />
    })
    navigator.geolocation.getCurrentPosition(function(position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
    });
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
    {<LocationInfoBox info={locationInfo} emails = {emails} setEmails = {setEmails} />}
    {<EmailInfoBox emails = {emails} setEmails = {setEmails}/>}
    
    </Col>
    
  </Row>
  </Container>
               
    )
}



export default SearchMaps