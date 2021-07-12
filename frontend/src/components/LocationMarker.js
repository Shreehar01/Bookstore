import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";

const LocationMarker = ({ lat, lng, onClick }) => {
    let iconStyles = { color: "white", fontSize: "2.5em" };
    return (
        <div onClick={onClick}>
            <FaMapMarkerAlt style={iconStyles}/>
        </div>
    )
}

export default LocationMarker