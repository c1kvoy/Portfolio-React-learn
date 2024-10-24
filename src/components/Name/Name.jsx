import React from 'react';
import avatar from '../../images/avatar.jpg';
import './Name.css'

const Name = () => {
    return (
        <div>
            <header className="App-header">
                <div className='NameCont'>
                    <img    
                        src={avatar}
                        alt="Avatar" 
                        className="avatar" 
                    />
                    <h1 className='MyName'>Vsevolod Enushkevich</h1>
                </div>
            </header>
        </div>
    )
}

export default Name;