/**
 * UserProfile.js
 * This component displays the user profile and posts of a TikTok user.
 * 
 */

import React from 'react';
import { useLocation } from 'react-router-dom';

function UserProfile() {
    // Get the profile data from the location state
    const location = useLocation(); 
    const { profile } = location.state;

    return (
        <div className="user-profile">
            {/* Just for the back button */}
            <div className="top-bar">
                <button onClick={() => window.history.back()}>← Back</button>
            </div>
            {/* This is the section for the profile header which contains useful info to summarize the user's profile */}
            <div className="profile-header">
                <div className="profile-names">
                    <h1>{profile.user_profile.name}</h1>
                    <h2>{profile.user_profile.username}</h2>
                </div>                
                <div className="profile-bio">
                    <p>{profile.user_profile.tiktok_bio}</p>
                </div>
                <div className="follow-stats">
                    <p>Followers: {profile.user_profile.tiktok_followers.toLocaleString()}</p>
                    <p>Following: {profile.user_profile.tiktok_following.toLocaleString()}</p>
                </div>
                <a href={`https://www.tiktok.com/@${profile.user_profile.username}/`} target="blank">
                    <button>View Profile →</button>
                </a>
            </div>
            {/* This is where the user's posts will be laid out (layed out?) */}
            <div className="profile-posts">
                {profile.posts_info.length > 0 ? profile.posts_info.map(post => (
                    <div key={post.post_id} className="post">
                        <p>{post.description}</p>
                        <br />
                        <button onClick={() => window.open(post.url)}>View Post →</button>
                        <br />
                        <hr />
                        <p>👀 {post.views.toLocaleString()}</p>
                        <p>❤️ {post.likes.toLocaleString()}</p>
                        <p>💬 {post.comments.toLocaleString()}</p>
                        <p>🔁 {post.shares.toLocaleString()}</p>
                    </div>
                )): <p>No posts found...</p>}
            </div>
        </div>
    );
}

export default UserProfile;

// For reference:
/**
  {"post_uid": "7299333378166312199", "create_time": 1699508493, "description": "Successful fashion rebrands that deserve an award \ud83d\udc4f \ud83d\udc4f \ud83d\udc4f #oroton #dissh #pr #marketing #rebrand #branding ", "desc_language": "en", "advertisement": false, "region": "AU", "url": "https://www.tiktok.com/@lucindapikkat/video/7299333378166312199?_r=1&u_code=e9akl4mjgb7d0e&preview_pb=0&sharer_language=en&_d=e9akj4mkidbf17&share_item_id=7299333378166312199&source=h5_m", "saved": 547, "comments": 128, "likes": 11521, "downloaded": 0, "views": 212040, "shares": 170, "shares_whatsapp": 15}
 */
