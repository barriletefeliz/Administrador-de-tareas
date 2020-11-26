import React from 'react'
import './Style.scss'

const Spinner = () => {
    return (
        <div className="spinner-container">
            <div className="spinner-border text-primary spinner-center" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>

    );
}

export default Spinner