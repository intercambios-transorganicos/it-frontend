import React from 'react';

const Patternsvg = () => {
    return (
        <svg width="100%" height="100%">
            <pattern id="p1" x="12.5" y="12.5" width="25" height="25"
                    patternUnits="userSpaceOnUse">
                <circle fill="#eeeeee" cx="10" cy="10" r="10" />
            </pattern>
            <pattern fill="green" id="p2" x="12.5" y="12.5" width="50" height="50"
                    patternUnits="userSpaceOnUse">
                <circle fill="#7c428c" cx="10" cy="10" r="10" />
            </pattern>
            <rect className="rectPattern" x="0" y="0" width="100%" height="100%" fill="url(#p1)" />
            <rect className="rectPattern" x="0" y="0" width="100%" height="100%" fill="url(#p2)" />
            
        </svg>
    );
}

export default Patternsvg;
