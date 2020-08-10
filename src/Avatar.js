import React, { useState } from 'react';
import AvatarList from './AvatarList';
import './Avatar.css';
import 'tachyons';

const Avatar = (props) => {
    const [headingState, setHeadingState] = useState('Welcome to Avatar World!');

    const changeHeading = () => {
        setHeadingState('Subscribe to Avatar Technical')
    };
    
    const avatarArrayList = [
        {
            id: 1,
            name: "Sukanya0",
            work: "Web Developer"
        },
        {
            id: 1,
            name: "Sukanya1",
            work: "Web Developer"
        },
        {
            id: 1,
            name: "Sukanya2",
            work: "Web Developer"
        },
        {
            id: 1,
            name: "Sukanya3",
            work: "Web Developer"
        }
    ];

    const arrayList = avatarArrayList.map((value, index) => {
        return <AvatarList id={value.id} name={value.name} work={value.work}/>

    });
    return (
        <div className="mainContainer">
          <h1>{headingState}</h1>
          {arrayList}
          <button onClick={changeHeading}>Subscribe</button>
       </div>

    )
}

export default Avatar;