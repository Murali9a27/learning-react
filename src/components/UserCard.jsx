import React from 'react'
import MentorIcon from '../assets/images/mentor_img/mentor1.png'
import RatingIcon from "../assets/images/svg/Rating-star.svg"
import AchievementIcon from "../assets/images/svg/Achievement.svg"
import CertificateIcon from "../assets/images/svg/Certificate.svg"


function UserCard(props) {
  return (
    <>
        <div className="mentor-card">
            <div className="mentor-details">
                <img className="mentor-img" src={MentorIcon} alt={props.name}/>
                <h3 className="mentor-name">{props.name}</h3>
                <div className="mentor-rating">
                <div className="rating">
                    <span className="rating-data">{props.rating}</span>
                    <img src={RatingIcon} alt="Rating Star" className="star-icon"/>
                </div>
                <div className="vertical-line"></div>
                <div className="review">
                    <p>Review (<span className="review-data">{props.reviewData}</span>)</p>
                    
                </div>
                </div>
                <div className="mentor-menu">⋯</div>
            </div>
            
            <div className="mentor-tags">
                <span className="tag">{props.tag[0]}</span>
                <span className="tag">{props.tag[1]}</span>
                <span className="tag">{props.tag[2]}</span>
            </div>
            
            <div className="mentor-stats">
                <div className="stat-box">
                <div className="stat-text">
                    <img src={AchievementIcon} alt="Achievement"/>
                    <p className="stat-label">Achievement</p>
                </div>
                
                <p className="stat-number">{props.achievementStat}</p>
                </div>
                <div className="stat-box">
                <div className="stat-text">
                    <img src={CertificateIcon} alt="Certificate"/>
                    <p className="stat-label">Certificate</p>
                </div>
                
                <p className="stat-number">{props.certificateStat}</p>
                </div>
            </div>
            
            <button className="view-class-btn">View Class</button>
        </div>
    </>
  )
}

export default UserCard