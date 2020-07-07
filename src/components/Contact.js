import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../mydata';

class Contact extends Component {
    state = {  }
    render() { 
        return (  <div>
        <h1>
                <Fade bottom cascade> Contact Details.</Fade>
        </h1>
        <Fade bottom>
        <div className='contact-content'>
                <h1>
                Want to get in touch with me <br></br>
                <span className='amazing-color'>send me a email</span></h1>
                    <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a><br></br>
                    <li className='number'>065 366 7568</li><br></br>
                    {data.social.map((link,index)=>(
                        <li key={index} ><a className='social' target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                        
                    ))}   
        </div>
        </Fade>
           
        </div>);
    }
}
 
export default Contact;