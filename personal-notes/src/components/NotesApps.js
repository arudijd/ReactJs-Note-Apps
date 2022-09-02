import React from "react";
import {getData} from '../utils/data';
import SearchBar from "./SearchBar";
import NoteList from './NoteList';
import NoteInput from './NoteInput';


class NotesApps extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm : '',
            datas : getData()
        }

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
        this.onArchivedNoteHandler = this.onArchivedNoteHandler.bind(this);
    }

    onAddNoteHandler({title, body}){
        this.setState((prevState) => {
            return {
                datas : [
                    ...prevState.datas,
                    {
                        id : +new Date(),
                        title,
                        body,
                        createdAt : new Date(),
                        archived : false
                    }
                ]
            }
        });
    }

    onDeleteNoteHandler(id){
        const datas = this.state.datas.filter(data => data.id !== id);
        this.setState({datas});
    }
    
    onArchivedNoteHandler(id){
        const index = this.state.datas.findIndex(data => data.id === id);
        const object = this.state.datas.find(data => data.id === id);
        const datas = this.state.datas;

        if(object.archived === false){
            object.archived = true;
            datas.splice(index, 1, object);
            this.setState({datas});

        } else {
            object.archived = false;
            datas.splice(index, 1, object);
            this.setState({datas});
        }
    }

    onSearchNoteHandler(keyword){
        if(keyword === ""){
            this.setState(()=> {
                return {
                    searchTerm : ""
                }
            });
        } else {
            this.setState(() => {
                return {
                    searchTerm : keyword
                }
            });
        }
    }

    

    render(){
        return(
            <div className="note-app">
                <SearchBar onSearch={this.onSearchNoteHandler}/>
                <div className="note-app__body">
                    <NoteInput addNotes={this.onAddNoteHandler}/>
                    <h2>Catatan Aktif</h2>
                    <hr></hr>
                    {
                        this.state.searchTerm === ""
                         ?   (<NoteList datas={this.state.datas.filter(data => data.archived === false)} onDelete={this.onDeleteNoteHandler}  onArchived={this.onArchivedNoteHandler}/>)
                         :   (<NoteList datas={this.state.datas.filter(data => data.archived === false && data.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))} onDelete={this.onDeleteNoteHandler}  onArchived={this.onArchivedNoteHandler}/>)
                        
                    }
                        
                    <h2>Arsip</h2>
                    <hr></hr>
                    {
                        this.state.searchTerm === ""
                         ?   (<NoteList datas={this.state.datas.filter(data => data.archived === true)} onDelete={this.onDeleteNoteHandler}  onArchived={this.onArchivedNoteHandler}/>)
                         :   (<NoteList datas={this.state.datas.filter(data => data.archived === true && data.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))} onDelete={this.onDeleteNoteHandler}  onArchived={this.onArchivedNoteHandler}/>)
                        
                    }
                    
                </div>
            </div>
        )
    }
}

export default NotesApps;