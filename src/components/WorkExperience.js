import React from 'react';
import '../styles/common_component_styles.css';

class WorkExperience extends React.Component {
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
              <input type="text" placeholder="Company name"/>
            
              <label>Start Date:</label>
              <input type="date"/>
              
              <button type="button" className="add-job-btn" onClick={this.props.addJob}>Add job</button>
            </div>
            
            <div>
              <label>Job Title:</label>
              <input type="text" placeholder="Job title"/>
            
              <label>End Date:</label>
              <input type="date"/>
              
              <button type="button" className="del-btn" onClick={() => this.props.deleteJob(move)}>Delete job</button>
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

export default WorkExperience;