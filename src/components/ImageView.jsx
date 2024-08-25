import React from 'react'

const ImageView = ({ file }) => {
    const path = file?.includes('https') ? file : `http://localhost:4000/${file}`
    return (
        <img src={path}
            alt=""
            className="img-fluid rounded"
        />
    )
}

export default ImageView