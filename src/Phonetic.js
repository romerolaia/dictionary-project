import React from 'react';

export default function(props){
    return (
        <div className="Phonetic">
            <a href={props.phonetic.audio} target="_blank" el="noreferrer">Listen</a>
            {props.phonetic.text}
        </div>
    )
}   