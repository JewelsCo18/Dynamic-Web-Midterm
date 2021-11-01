import React from 'react'

function MusicGenre({ result }) {

    return (
        <div>
            <div className="musicBackground">
                <div className="musicTitle">
                    <h1>{result}</h1>
                </div>
            </div>
        </div>
    )
}

export default MusicGenre