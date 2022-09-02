import React from "react";
import {showDateWithFormat} from '../utils/data';

function NoteItemBody ({title, createdAt, body}){
    return (
        <div className="note-item__body">
            <h2 className="note-item__title">{title}</h2>
            <p className="note-item__date">{showDateWithFormat(createdAt)}</p>
            <p className="note-item__body">{body}</p>
            
        </div>
    );
}

export default NoteItemBody;