import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'
import EmailInfoBox from './EmailInfoBox'
import {Container, Row, Col} from 'react-bootstrap';

import './index.css';

// define constants
const NATURAL_EVENT_WILDFIRE = 5;
const eventData = [
    {lat: 31.3,lng:31.3, info:'Book1', email: 'joshishreehar@gmail.com'},
    {lat: 32.3,lng:31.3, info:'Book2', email: 'kalopool81@gmail.com'},
    {lat: 33.3,lng:31.3, info:'Book3', email: 'sjoshi4@gmail.com'},
    {lat: 34.3,lng:31.3, info:'Book4', email: 'kalopool00@gmail.com'},
    {lat: 35.3,lng:31.3, info:'Book5', email: 'elonmusk@gmail.com'},    
]

const SearchMaps = ({ center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)
    const [emails, setEmails] = useState([]);
    const markers = eventData.map((ev, index) => {
        return <LocationMarker key={index} lat={ev.lat} lng={ev.lng} onClick={() => setLocationInfo({ title: ev.info, email: ev.email })} />
    })
    
    return (
        <Container>
  <Row>
    <Col sm={9}>
    <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyC4Z5Qz97EWcoCczNn2IcYvaYG0L9pe6Rk" }}
                defaultCenter={ {lat: 31.3,lng:31.3,} }
                defaultZoom={6}
            >
                {markers}
            </GoogleMapReact>
            
        </div>
  


    </Col>
    <Col sm={3}>
    {locationInfo && <LocationInfoBox info={locationInfo} emails = {emails} setEmails = {setEmails} />}
    {locationInfo && <EmailInfoBox emails = {emails} setEmails = {setEmails}/>}
    
    </Col>
    
  </Row>
  </Container>
               
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default SearchMaps