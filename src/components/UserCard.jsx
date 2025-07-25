import React from 'react'
import MentorIcon from '../assets/images/mentor_img/mentor1.png'
import RatingIcon from "../assets/images/svg/Rating-star.svg"
import AchievementIcon from "../assets/images/svg/Achievement.svg"
import CertificateIcon from "../assets/images/svg/Certificate.svg"


function UserCard(props) {
  return (
    <>
        <div class="mentor-card">
            <div class="mentor-details">
                <img class="mentor-img" src={MentorIcon} alt={props.name}/>
                <h3 class="mentor-name">{props.name}</h3>
                <div class="mentor-rating">
                <div class="rating">
                    <span class="rating-data">{props.rating}</span>
                    <img src={RatingIcon} alt="Rating Star" class="star-icon"/>
                </div>
                <div class="vertical-line"></div>
                <div class="review">
                    <p>Review (<span class="review-data">{props.reviewData}</span>)</p>
                    
                </div>
                </div>
                <div class="mentor-menu">⋯</div>
            </div>
            
            <div class="mentor-tags">
                <span class="tag">{props.tag[0]}</span>
                <span class="tag">{props.tag[1]}</span>
                <span class="tag">{props.tag[2]}</span>
            </div>
            
            <div class="mentor-stats">
                <div class="stat-box">
                <div class="stat-text">
                    <img src={AchievementIcon} alt="Achievement"/>
                    <p class="stat-label">Achievement</p>
                </div>
                
                <p class="stat-number">{props.achievementStat}</p>
                </div>
                <div class="stat-box">
                <div class="stat-text">
                    <img src={CertificateIcon} alt="Certificate"/>
                    <p class="stat-label">Certificate</p>
                </div>
                
                <p class="stat-number">{props.certificateStat}</p>
                </div>
            </div>
            
            <button class="view-class-btn">View Class</button>
        </div>
    </>
  )
}

export default UserCard