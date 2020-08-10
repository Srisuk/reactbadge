import React from 'react';
import 'tachyons';

const AvatarList = (props) => {
    return (
    <div className="avatarStyle ma4 bg-light-purple dib pa5 grow shadow-4 tc">
        <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar"/>
        <h1>{props.name}</h1>
        <p>{props.work}</p>
    </div>
    )
}

export default AvatarList;