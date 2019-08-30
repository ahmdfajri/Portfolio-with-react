import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={require('./gambar/DSC_0750.jpg')}
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Achmad Fajriansyah Nurdin</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I’m 23 years old, my motivation of work “No matter how small the things you receive make it an experience tomorrow”</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Jl. Aren No.9 RT 02 RW 05 Karet Semanggi Jakarta Selatan</p>
            <h5>Phone</h5>
            <p>081288527415</p>
            <h5>Email</h5>
            <p>achmad.fajria14@gmail.com</p>
            <h5>Web</h5>
            <a style={{color:'black'}} href="https://github.com/ahmdfajri">https://github.com/ahmdfajri</a>
            <h5>LinkedIn</h5>
            <a style={{color:'black'}} href="https://www.linkedin.com/in/achmad-fajriansyah-nurdin/">https://www.linkedin.com/in/achmad-fajriansyah-nurdin/</a>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2010}
              endYear={2013}
              schoolName="SMAN 3 JAKARTA"
              schoolDescription="In senior high school my major is science"
               />
               <Education
                 startYear={2013}
                 endYear={2018}
                 schoolName="Telkom University"
                 schoolDescription="Bachelor degree with a cumulative GPA of 2.6 in electrical engineering"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Experience</h2>
            <Experience
              startYear={2016}
              endYear={2016}
              jobName="Lembaga Ilmu Pengetahuan Indonesia "
              jobDescription="Research about WSN and Zigbee and designing an electrical circuit"
              />
              <Experience
                startYear={2017}
                endYear={2018}
                jobName="Project With Lecturer"
                jobDescription="Designing Graphical User Interface with visual studio for monitoring solar charger"
                />
                 <Experience
                startYear={2019}
                endYear={2019}
                jobName="Shopketti"
                jobDescription="Make UI for website with react and SASS"
                />
                     <Experience
                startYear={2019}
                jobName="Koperasi Inti Telkomsel"
                jobDescription="Make frontend and backen using nodeJs for switching"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={60}
                persen="60%"
                />
                <Skills
                  skill="HTML/CSS"
                  progress={65}
                  persen="65%"
                  />
                  <Skills
                    skill="NodeJS"
                    progress={60}
                    persen="60%"
                    />
                    <Skills
                      skill="React"
                      progress={60}
                      persen="60%"
                    />    
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;