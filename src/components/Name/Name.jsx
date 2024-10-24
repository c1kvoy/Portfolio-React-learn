import React from 'react';
import avatar from '../../images/avatar.jpg';
import './Name.css'

const Name = ({name1, name2}) => {
    return (
        <div>
            <header className="App-header">
                <div className='NameCont'>
                    <img    
                        src={avatar}
                        alt="Avatar" 
                        className="avatar" 
                    />
                    <h1 className='MyName'>{name1} {name2}</h1>
                </div>
            </header>
        </div>
    )
}

export default Name;