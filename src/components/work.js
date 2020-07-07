import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import wildberry from '../images/wildberrry.jpg';
import githubfinder from '../images/githubfinder.jpg'
import school from '../images/school.jpeg'
import itlogger from '../images/itlogger.jfif'


class Work extends Component {
    state = {  }
    render() { 
        return (<div>
        <h1 className='heading'>
        <Fade bottom cascade>Work.</Fade></h1>
        <div className='work-content'>
                
              <Fade bottom cascade >
              <div>
              <img src={wildberry} alt='social' className='img1'/> 
              <Fade bottom cascade > <h1 className='topic'>Wild Berry</h1>
              <p className='link'>You can find my source code in my github</p>
              </Fade>
              </div>
              <div>
              <img src={githubfinder} alt='social' className='img1'/> 
              <Fade bottom cascade ><h1 className='topic'>Github finder</h1>
              <p className='link'>You can find my source code in my github</p>
              </Fade>
              </div>
              <div>
              <img src={school} alt='social' className='img1'/> 
              <Fade bottom cascade ><h1 className='topic'>Yellow Green Media</h1>
              <p className='link'>You can find my source code in my github</p>
              </Fade>
              </div>
              <div>
              <img src={itlogger} alt='social' className='img1'/> 
              <Fade bottom cascade > <h1 className='topic'>IT-Logger</h1>
              <p className='link'>You can find my source code in my github</p>
              </Fade>
              </div>
              </Fade>
        </div>
        </div>  );
    }
}
 
export default Work;