import React from 'react';
import AuthService  from '../../Services/auth.service';


const  profile = () =>{
    const CurrentUser=AuthService.getCurrentUser();

return(
    <div className='container'>
        <header className='jumbotron'>
            <h3><strong>{CurrentUser.username}</strong>profile</h3>
            </header>
            <p><strong>TOken:</strong>
            
            {CurrentUser.accessToken.substr(CurrentUser.accessToken.length -20)}          
            </p>
            <p><strong>id:</strong>
            {CurrentUser.id}</p>
            <p><strong>Email:</strong>
            {CurrentUser.email}
            </p>
            <strong>Authorities:</strong>
            <ul>
                {CurrentUser.roles && CurrentUser.roles.map((role,index) => <li key={index}>{role}</li>)}
            </ul>
        </div>
)

}