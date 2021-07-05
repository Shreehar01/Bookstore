import React, {useState} from 'react'
import Navbar from './Auth/Navbar';
import Closing from './Auth/Closing';
import InfoForm from './InfoForm';


const MyInformation = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    return (
        <div>
            <Navbar />
            <InfoForm user = {user} />
            <Closing />
        </div>
    )
}

export default MyInformation
