import React from 'react';
import '../styles/common_component_styles.css';

class EducationalInfo extends React.Component {
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
              <input 
                type="text" 
                placeholder="Name" 
                id="primary-school-name"
                value={this.props.primarySchName}
                onChange={this.props.onPrimarySchNameChange}
              />
              <label>Date Graduated:</label>
              <input 
                type="date" 
                id="primary-school-graduated"
                value={this.props.primarySchGradDate}
                onChange={this.props.onPrimarySchGradDateChange}
              />
            </div> 

            <div>
              <h3>Secondary:</h3>
              <label>School Name:</label>
              <input 
                type="text" 
                placeholder="Name" 
                id="secondary-school-name"
                value={this.props.secondarySchName}
                onChange={this.props.onSecondarySchNameChange}                
              />
              <label>Date Graduated:</label>
              <input 
                type="date" 
                id="secondary-school-graduated"
                value={this.props.secondarySchGradDate}
                onChange={this.props.onSecondarySchGradDateChange}                
              />
            </div> 
          </div>
          
          <div>
            <div>
              <h3>Tertiary</h3>
              <label>School Name:</label>
              <input 
                type="text" 
                placeholder="Name" 
                id="tertiary-school-name"
                value={this.props.tertiarySchName}
                onChange={this.props.onTertiarySchNameChange}   
              />
              <label>Date Graduated:</label>
              <input 
                type="date" 
                id="tertiary-school-graduated"
                value={this.props.tertiarySchGradDate}
                onChange={this.props.onTertiarySchGradDateChange}               
              />                                 
            </div> 
          </div>          
        </div>
      </div>
    );    
  }  
}

export default EducationalInfo;