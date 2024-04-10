import React from 'react';
import { useNavigate } from 'react-router-dom';

function ResultItem(props) {
    const navigate = useNavigate();

    const handleButtonClick = (event) => {
        event.stopPropagation();
        openUserProfile();
    };

    // Function to handle profile opening
    const openUserProfile = () => {
        navigate('/profile', { state: { profile: props.profile } });
    };

    return (
        <div className="result-item" onClick={openUserProfile}>
            <div className="profile-names">
                <h3>{props.profile.user_profile.username}</h3>
                <p>{props.profile.user_profile.name}</p>
            </div>
            <div className="profile-bio">
                <p>{props.profile.user_profile.tiktok_bio}</p>
            </div>
            <div className="button">
                <button onClick={handleButtonClick}>View profile →</button>
            </div>
        </div>
    );
}

export default ResultItem;
