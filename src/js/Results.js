/**
 * Results.js
 * This is where the search results are calculated and displayed. 
 * It filters the data based on the search term and filters and then maps the results to ResultItem components.
 */
import React, { useState, useEffect } from 'react';
import ResultItem from './ResultItem';

function Results(props) {
    // load the json file from public/user_info.json
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('/user_info.json')
            .then(response => response.json())
            .then(data => setData(data))
    }, []);

    let profilesDisplayed = filter(data, props.searchTerm, props.filters)

    return (
        <div className="results">
            {profilesDisplayed.length > 0 ? 
                profilesDisplayed.map(profile => (
                    <ResultItem key={profile.user_profile.author_uid} className="result" profile={profile} />
                ))
                : 
                <div>
                    <br />
                    <p>No profiles found...</p>
                </div>
            }
        </div>
    )
}

export default Results;

function filter(data, searchTerm, filters) {
    // filter the data based on the searchTerm and filters
    return data.filter(item => {

        // filter based on the searchTerm
        if (!((item.user_profile.username.toLowerCase()).includes(searchTerm.toLowerCase()) || (item.user_profile.name.toLowerCase()).includes(searchTerm.toLowerCase()))) {
            console.log("Failed search term")
            return false;
        }

        // filter based on the filters
        // check if the item tiktok_followers is within the min and max range
        if (!(item.user_profile.tiktok_followers >= filters.minTiktokFollowers && item.user_profile.tiktok_followers <= filters.maxTiktokFollowers)) {
            return false;
        }
        console.log(item.user_profile.tiktok_bio)
        console.log(filters.tiktok_bio)
        // filter by keywords in the bio
        if (!(item.user_profile.tiktok_bio.toLowerCase()).includes((filters.tiktokBio).toLowerCase())) {
            return false;
        }

        // filter by video metrics
        // views
        let averageViews = calculateAverageOfPostMetric(item.posts_info, "views")
        if (!(averageViews >= filters.averageViews)) {
            return false;
        }

        // likes
        let averageLikes = calculateAverageOfPostMetric(item.posts_info, "likes")
        if (!(averageLikes >= filters.averageLikes)) {
            return false;
        }

        // comments
        let averageComments = calculateAverageOfPostMetric(item.posts_info, "comments")
        if (!(averageComments >= filters.averageComments)) {
            return false;
        }

        // shares
        let averageShares = calculateAverageOfPostMetric(item.posts_info, "shares")
        if (!(averageShares >= filters.averageShares)) {
            return false;
        }

        // saves
        let averageSaves = calculateAverageOfPostMetric(item.posts_info, "saved")
        if (!(averageSaves >= filters.averageSaves)) {
            return false;
        }
        console.log("Passed all filters")
        // if all filters pass, return true
        return true;
    });
}

function calculateAverageOfPostMetric(posts, metric) {
    if (posts.length === 0) return 0;
    let total = 0;
    posts.forEach(post => {
        total += post[metric];
    });

    return total / posts.length;
}

/**
 * Filters:
 * Search by name
 * Search by username?
 * Filter by tiktok_followers [min, max]
 * Filter by tiktok_bio keywords
 * 
 * example profile:
 * {
 *  "name": "LUCINDA\u2002PIKKAT", 
 *  "author_uid": 6785660866904146950, 
 *  "username": "lucindapikkat", 
 *  "tiktok_followers": 58258, 
 *  "tiktok_following": 712, 
 *  "tiktok_bio": "Satirical Mum Life \nPR and Brand Advice  \nSign up to my newsletter\ud83d\udc47\ud83c\udffc \ud83d\uddde\ufe0f", 
 *  "country": "AU", 
 *  "tiktok_email": false, 
 *  "google": ""
 * }
 */
