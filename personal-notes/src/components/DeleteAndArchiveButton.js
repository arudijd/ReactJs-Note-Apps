import React from "react";

function DeleteAndArchivedButton({id, onDelete, onArchived}){
    return(
        <div className="note-item__button">
            <button className="note-item__button-delete" onClick={() => onDelete(id)}>Delete</button>
            <button className="note-item__button-archived" onClick={() => onArchived(id)}>Archived</button>
        </div>
    )
}

export default DeleteAndArchivedButton;