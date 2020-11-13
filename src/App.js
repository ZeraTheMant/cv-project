import React from 'react';
import './App.css';
import PersonalInfo from './components/PersonalInfo';
import EducationalInfo from './components/EducationalInfo';
import WorkExperience from './components/WorkExperience';
import DisplayPersonalInfo from './components/DisplayPersonalInfo';
import DisplayEducationalInfo from './components/DisplayEducationalInfo';
import DisplayWorkExperience from './components/DisplayWorkExperience';

function createEmptyJobObjList() {
  return [{
        companyName: '',
        jobTitle: '',
        startDate: null,
        endDate: null        
      }]; 
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      primarySchName: '',
      primarySchDateGrad: '',
      secondarySchName: '',
      secondarySchDateGrad: '',
      tertiarySchName: '',
      tertiarySchDateGrad: '',
      jobs: createEmptyJobObjList(),
      jobNumber: 1,      
    }
    
    this.addJob = this.addJob.bind(this);  
    this.deleteJob = this.deleteJob.bind(this);  
    this.handleSubmit = this.handleSubmit.bind(this); 
    this.generateJobsInfoList = this.generateJobsInfoList.bind(this);   
    this.switchViewToForm = this.switchViewToForm.bind(this);    
    this.onFnameInputChange = this.onFnameInputChange.bind(this);        
    this.onLnameInputChange = this.onLnameInputChange.bind(this);        
    this.onPhoneInputChange = this.onPhoneInputChange.bind(this);        
    this.onEmailInputChange = this.onEmailInputChange.bind(this);    
    
    this.onPrimarySchNameChange = this.onPrimarySchNameChange.bind(this);
    this.onPrimarySchGradDateChange = this.onPrimarySchGradDateChange.bind(this); 
    this.onSecondarySchNameChange = this.onSecondarySchNameChange.bind(this);
    this.onSecondarySchGradDateChange = this.onSecondarySchGradDateChange.bind(this);   
    this.onTertiarySchNameChange = this.onTertiarySchNameChange.bind(this);
    this.onTertiarySchGradDateChange = this.onTertiarySchGradDateChange.bind(this);       
  }
  
  switchViewToForm() {
    const cvDisplayInfo = document.querySelector('#cv-display-info');
    const form = document.querySelector('form');
    
    cvDisplayInfo.style.display = 'none';
    form.style.display = 'block';      
  }
  
  generateJobsInfoList() {
    const workExperienceBoxes = document.querySelectorAll('form .work-experience-container');
    let newJobsList = [];
    workExperienceBoxes.forEach((box) => {
      const halfDisplayDiv = box.children[1];
      const leftHalfDiv = halfDisplayDiv.children[0];
      const rightHalfDiv = halfDisplayDiv.children[1];
      
      const companyNameField = leftHalfDiv.children[1];
      const startDateField = leftHalfDiv.children[3];
      const jobTitleField = rightHalfDiv.children[1];
      const endDateField = rightHalfDiv.children[3];
      
      let jobInfo = {
        companyName: companyNameField.value,
        jobTitle: jobTitleField.value,
        startDate: startDateField.value,
        endDate: endDateField.value
      };
      newJobsList.push(jobInfo)
    });

    return newJobsList;
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const jobsInfoList = this.generateJobsInfoList();
    this.setState({
      firstName: document.querySelector('#first-name').value,
      lastName: document.querySelector('#last-name').value,      
      phone: document.querySelector('#phone').value,
      email: document.querySelector('#email').value,
      primarySchName: document.querySelector('#primary-school-name').value,
      primarySchDateGrad: document.querySelector('#primary-school-graduated').value,
      secondarySchName: document.querySelector('#secondary-school-name').value,
      secondarySchDateGrad: document.querySelector('#secondary-school-graduated').value,
      tertiarySchName: document.querySelector('#tertiary-school-name').value,
      tertiarySchDateGrad: document.querySelector('#tertiary-school-graduated').value,
      jobs: jobsInfoList,
      jobNumber: jobsInfoList.length,
    });
    
    const cvDisplayInfo = document.querySelector('#cv-display-info');
    const form = document.querySelector('form');
    
    cvDisplayInfo.style.display = 'block';
    form.style.display = 'none';
  }
  
  addJob() {
    this.setState({
      jobs: this.state.jobs.concat(createEmptyJobObjList()),
      jobNumber: this.state.jobs.length,
    }); 
  }
  
  deleteJob(i) {
    if (this.state.jobs.length > 1) {
      const newJobsList = this.state.jobs.filter((item, index) => index != i);
      this.setState({
        jobs: newJobsList,
        jobNumber: this.state.jobs.length,
      })
    }  
  }
  
  onFnameInputChange(e) {
    this.setState({
      firstName: e.target.value,
    });
  }
  
  onLnameInputChange(e) {
    this.setState({
      lastName: e.target.value,
    });
  }
  
  onPhoneInputChange(e) {
    this.setState({
      phone: e.target.value,
    });
  }
  
  onEmailInputChange(e) {
    this.setState({
      email: e.target.value,
    });
  }      
  
  onPrimarySchNameChange(e) {
    this.setState({
      primarySchName: e.target.value       
    });
  }
  
  onSecondarySchNameChange(e) {
    this.setState({
      secondarySchName: e.target.value       
    });
  }
  
  onTertiarySchNameChange(e) {
    this.setState({
      tertiarySchName: e.target.value       
    });
  }
  
  onPrimarySchGradDateChange(e) {
    this.setState({
      primarySchDateGrad: e.target.value
    });
  }  
  
  onSecondarySchGradDateChange(e) {
    this.setState({
      secondarySchDateGrad: e.target.value
    });
  }  
  
  onTertiarySchGradDateChange(e) {
    this.setState({
      tertiarySchDateGrad: e.target.value
    });
  }  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Odin Project CV Builder</h1>
        </header>
      
        <form onSubmit={this.handleSubmit}>
          <PersonalInfo 
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            phone={this.state.phone}
            email={this.state.email}
            onFnameInputChange={this.onFnameInputChange}
            onLnameInputChange={this.onLnameInputChange}
            onPhoneInputChange={this.onPhoneInputChange}
            onEmailInputChange={this.onEmailInputChange}            
          />
          <EducationalInfo 
            primarySchName={this.state.primarySchName}
            onPrimarySchNameChange={this.onPrimarySchNameChange}
            primarySchGradDate={this.state.primarySchDateGrad}
            onPrimarySchGradDateChange={this.onPrimarySchGradDateChange}          
  
            secondarySchName={this.state.secondarySchName}
            onSecondarySchNameChange={this.onSecondarySchNameChange}
            secondarySchGradDate={this.state.secondarySchDateGrad}
            onSecondarySchGradDateChange={this.onSecondarySchGradDateChange}  

            tertiarySchName={this.state.tertiarySchName}
            onTertiarySchNameChange={this.onTertiarySchNameChange}
            tertiarySchGradDate={this.state.tertiarySchDateGrad}
            onTertiarySchGradDateChange={this.onTertiarySchGradDateChange}             
          />
          <WorkExperience 
            jobs={this.state.jobs}
            jobNumber={this.state.jobNumber}
            addJob={this.addJob}
            deleteJob={this.deleteJob}//(i) => this.deleteJob(i)
          />
          <button type="submit">Submit</button>
        </form>
        
        <div id="cv-display-info" className="hiden">
          <DisplayPersonalInfo 
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            phone={this.state.phone}
            email={this.state.email}
          />
          <DisplayEducationalInfo 
            primarySchoolName={this.state.primarySchName}
            primarySchoolGraduated={this.state.primarySchDateGrad}
            secondarySchoolName={this.state.secondarySchName}
            secondarySchoolGraduated={this.state.secondarySchDateGrad}
            tertiarySchoolName={this.state.tertiarySchName}
            tertiarySchoolGraduated={this.state.tertiarySchDateGrad}            
          />
          <DisplayWorkExperience
            jobs={this.state.jobs}
          />
          <button type="button" id="edit-btn" onClick={this.switchViewToForm}>Edit</button>
        </div>
      </div>
    );
  }
}

export default App;
