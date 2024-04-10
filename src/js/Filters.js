/**
 * Filters.js
 * This component is responsible for the filters in the home page. 
 * All changes made to filters will automatically sort out the results.
 * I thought about having it wait until the search button is pressed, 
 * but it was so convenient to have the results update as the filters change that I decided against it.
 */
import RangeSlider from 'react-range-slider-input';
import React, { useState, useEffect } from 'react';
import "react-range-slider-input/dist/style.css";


function Filters(props) {
    const [minTiktokFollowers, setMinTiktokFollowers] = useState(0)
    const [maxTiktokFollowers, setMaxTiktokFollowers] = useState(1000000)
    const [tiktokBio, setTiktokBio] = useState('')
    const [averageViews, setAverageViews] = useState(0)
    const [averageLikes, setAverageLikes] = useState(0)
    const [averageComments, setAverageComments] = useState(0)
    const [averageShares, setAverageShares] = useState(0)
    const [averageSaves, setAverageSaves] = useState(0)

    // update the filters in the home page to be passed down into the results
    useEffect(() => {
        props.updateFilters({
            minTiktokFollowers,
            maxTiktokFollowers,
            tiktokBio,
            averageViews,
            averageLikes,
            averageComments,
            averageShares,
            averageSaves
        })
    }, [
        minTiktokFollowers, 
        maxTiktokFollowers, 
        tiktokBio, 
        averageViews, 
        averageLikes,
        averageComments, 
        averageShares, 
        averageSaves
    ])

    // This is the JSX for the filters, it should be pretty straight forward to understand
    return (
        <div className="filters">
            <div className="filter" id="tiktok-bio-filter">
                <h6>Bio</h6>
                <div className="bio-bar">
                    <input 
                        type="text" 
                        placeholder="Enter a keyword" 
                        onChange={event => setTiktokBio(event.target.value)}
                    />
                </div>
            </div>
            <div className="filter" id="tiktok-followers-filter">
                <h6>Followers</h6>
                <div className="filter-slider-container">
                    <RangeSlider
                        className="filter-slider" 
                        min={0} 
                        max={9999999}
                        defaultValue={[0, 1000000]}
                        step={10}
                        onInput={value => {
                            setMinTiktokFollowers(value[0])
                            setMaxTiktokFollowers(value[1])
                        }}
                    />
                    <div className="range-values">
                        <span>Greater than {minTiktokFollowers.toLocaleString()} followers</span>
                        <span>Less than {maxTiktokFollowers.toLocaleString()} followers</span>
                    </div>
                </div>
            </div>
            <div className="filter" id="average-views-filter">
                <h6>Views</h6>
                <div className="filter-slider-container">
                    <RangeSlider
                        className="filter-slider" 
                        min={0} 
                        max={9999999}
                        step={10}
                        onInput={value => setAverageViews(value[1])}
                        thumbsDisabled={[true, false]}
                        rangeSlideDisabled={true}
                    />
                    <div className="range-values">
                        <span>Greater than {averageViews.toLocaleString()} average views</span>
                    </div>
                </div>
            </div>
            <div className="filter" id="average-likes-filter">
                <h6>Likes</h6>
                <div className="filter-slider-container">
                    <RangeSlider
                        className="filter-slider" 
                        min={0} 
                        max={999999}
                        step={10}
                        onInput={value => setAverageLikes(value[1])}
                        thumbsDisabled={[true, false]}
                        rangeSlideDisabled={true}
                    />
                    <div className="range-values">
                        <span>Greater than {averageLikes.toLocaleString()} average likes</span>
                    </div>
                </div>
            </div>
            <div className="filter" id="average-comments-filter">
                <h6>Comments</h6>
                <div className="filter-slider-container">
                    <RangeSlider
                        className="filter-slider" 
                        min={0} 
                        max={9999}
                        step={100}
                        onInput={value => setAverageComments(value[1])}
                        thumbsDisabled={[true, false]}
                        rangeSlideDisabled={true}
                    />
                    <div className="range-values">
                        <span>Greater than {averageComments.toLocaleString()} average comments</span>
                    </div>
                </div>
            </div>
            <div className="filter" id="average-shares-filter">
                <h6>Shares</h6>
                <div className="filter-slider-container">
                    <RangeSlider
                        className="filter-slider" 
                        min={0} 
                        max={99999}
                        step={100}
                        onInput={value => setAverageShares(value[1])}
                        thumbsDisabled={[true, false]}
                        rangeSlideDisabled={true}
                    />
                    <div className="range-values">
                        <span>Greater than {averageShares.toLocaleString()} average shares</span>
                    </div>
                </div>
            </div>
            <div className="filter" id="average-saves-filter">
                <h6>Saves</h6>
                <div className="filter-slider-container">
                    <RangeSlider
                        className="filter-slider" 
                        min={0} 
                        max={99999}
                        step={100}
                        onInput={value => setAverageSaves(value[1])}
                        thumbsDisabled={[true, false]}
                        rangeSlideDisabled={true}
                    />
                    <div className="range-values">
                        <span>Greater than {averageSaves.toLocaleString()} average saves</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filters;
