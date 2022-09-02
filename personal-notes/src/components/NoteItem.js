import React from "react";
import NoteItemBody from './NoteItemBody';
import DeleteAndArchivedButton from "./DeleteAndArchiveButton";
function NoteItem({title, createdAt, body, id, onDelete, onArchived}){
    return(
        <div className="note-item">
            <NoteItemBody title={title} createdAt={createdAt} body={body}/>
            <DeleteAndArchivedButton id={id} onDelete={onDelete} onArchived ={onArchived}/>
        </div>
    )
}

export default NoteItem;