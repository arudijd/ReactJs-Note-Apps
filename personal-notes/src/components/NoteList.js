import React from "react";
import NoteItem from './NoteItem';

function NoteList({datas, onDelete, onArchived}){
    return(
        
        <div className="note-list">
            {
                datas.length > 0
                ?
                (datas.map((data) => (
                    <NoteItem
                    key={data.id}
                    id={data.id}
                    onDelete={onDelete}
                    onArchived={onArchived}
                    {...data} />
                )))
                : (<h4>Data tidak ada</h4>)
            }
        </div>
    );
}

export default NoteList;
