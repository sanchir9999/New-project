// components/VideoPlayer.js
import React from 'react';

const VideoPlayer = ({ src, width = '', height = '' }) => {
    return (
        <div className="video-container" style={{ width, height }}>
            <video controls className="lg:w-[850px] h-[800px]">
                <source src={src} type="video/mp4" />
            </video>
        </div>
    );
};

export default VideoPlayer;
