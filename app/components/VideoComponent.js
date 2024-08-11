import React from 'react';

const VideoComponent = () => {
    return (
        <div className="video-container">
            <video controls width="100%" height="auto">
                <source src="/Videos/0724.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoComponent;
