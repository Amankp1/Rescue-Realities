import React from 'react';
import '../Components/box.css'

function About() {

    const myStyle = {
        marginTop: '1000px',
        color: 'black'
      };

  return (
    <div className="purple-box-container" style={myStyle}>
        <h1 className='abt_p_h1'>About The Project</h1>
        <p className='abt_p_p'>     Our approach is meticulous. We begin with a needs assessment to tailor training to the specific requirements of the NDRF. We dive deep into research to ensure accuracy and realism in our scenarios. We create a user-friendly web interface for seamless access. Machine Learning steps in to provide real-time feedback, adapting the training to each trainee's performance.</p>
        
        <p className='abt_p_p'>Target audience:
-	Military personnel, Hazmat Teams, Healthcare Professionals, Critical Infrasctructure Personnel, Community Leaders, Educational Institutions and Non-Governmental Organizations.</p>
    </div>

  );
}

export default About;