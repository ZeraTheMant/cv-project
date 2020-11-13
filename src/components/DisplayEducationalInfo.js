import React from 'react';
import '../styles/common_component_styles.css';

class DisplayEducationalInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="component" id="personal-info">
        <h2>Educational Info</h2>
        
        <div className="component-data halved-display">
          <div>
            <div>
              <h3>Primary:</h3>
              <label>School Name:</label>
              <p>{this.props.primarySchoolName}</p>
              
              <label>Date Graduated:</label>
              <p>{this.props.primarySchoolGraduated}</p>
            </div> 

            <div>
              <h3>Secondary:</h3>
              <label>School Name:</label>
              <p>{this.props.secondarySchoolName}</p>
              
              <label>Date Graduated:</label>
              <p>{this.props.secondarySchoolGraduated}</p>
            </div> 
          </div>
          
          <div>
            <div>
              <h3>Tertiary</h3>
              <label>School Name:</label>
              <p>{this.props.tertiarySchoolName}</p>
              
              <label>Date Graduated:</label>
              <p>{this.props.tertiarySchoolGraduated}</p>                            
            </div> 
          </div>          
        </div>
      </div>
    );    
  }  
}

export default DisplayEducationalInfo;