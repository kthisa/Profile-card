import React from 'react'
function User(props) {
    return(
        <div className = "card-container">
            <span className = "pro online">ONLINE</span>
            <img src = "image/profile1.png" className="img" width="130px" height="130px"></img>
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <p>{props.job} </p>
            <div class = "buttons">
              <button className="primary">Message</button>
              <button className="primary outline">Following</button>
            </div>
            <div className="skills">
              <h6>Skills</h6>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>React JS</li>
                <li>Node</li>
                <li>Bootstrap</li>
              </ul>
            </div>
         </div>
    )
}
export const UserCard = () => {
  return (
        <User name="Benzy" city="california" job="Front-End Developer"/>
  )
  
  
}
