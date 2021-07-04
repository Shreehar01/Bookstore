import React from 'react';
import { FcKindle } from "react-icons/fc";


const LocationMarker = ({ lat, lng, onClick }) => {
    return (
        <div onClick={onClick}>
            <FcKindle />
        </div>
    )
}

export default LocationMarker