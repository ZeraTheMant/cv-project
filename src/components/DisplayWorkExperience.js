import React from 'react';
import '../styles/common_component_styles.css';

class DisplayWorkExperience extends React.Component {
  constructor(props) {
    super(props);
    this.generateWorkExperienceBoxes = this.generateWorkExperienceBoxes.bind(this); 

  }
  
  generateWorkExperienceBoxes() {
    let workExperienceBoxes = this.props.jobs.map((step, move) => {

      return (
        <div className="work-experience-container" key={move}>
          <h4>Company {move + 1}</h4>
          
          <div className="component-data halved-display">
            <div>
              <label>Company:</label>
              <p>{step.companyName}</p>
            
              <label>Start Date:</label>
              <p>{step.startDate}</p>
              
            </div>
            
            <div>
              <label>Job Title:</label>
              <p>{step.jobTitle}</p>
            
              <label>End Date:</label>
              <p>{step.endDate}</p>
              
            </div>
          </div>         
        </div>
      )    
    });
    return workExperienceBoxes;
  }

  render() {

    const workExperienceBoxes = this.generateWorkExperienceBoxes(); 
      
    return (
      <div className="component" id="job-info">
        <h2>Work Experience</h2>
        {workExperienceBoxes}
      </div>
    );    
  }  
}

export default DisplayWorkExperience;