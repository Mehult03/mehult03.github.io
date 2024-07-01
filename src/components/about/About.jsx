import React from 'react'
import './about.css'
import myImage from '../../assets/my-image2.jpg'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know More</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card box'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <small>Bachelor of Science, Major in Computer Science and Engineering, Minor in Mathematics<br /><i>Ohio State University</i></small>
              </article>

              <article className='about__card box'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>Current GPA</h5>
                  <small>3.7</small>
              </article>

              <article className='about__card box'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                      <li>Software Engineering</li>
                      <li>Web Development</li>
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
                    I'm a <b>CSE Undergradute</b> at The Ohio State University. 
                    I'm an enthusiastic and driven Computer Science student seeking a challenging job opportunity to apply 
                    and expand my technical skills. 
                    With a strong academic foundation in software engineering and hands-on experience with various internships,
                    I am eager to contribute to innovative projects and further learn from experienced professionals in the industry. I am a quick learner who is always ready to face challenges.
                    
            </p>

          </div>
      </div>
    </section>
  )
}

export default About
