import React from "react";

class NoteInput extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title : '',
            body : '',
            maxLength : 50
        }

        this.onTitleChangedEventHandler = this.onTitleChangedEventHandler.bind(this);
        this.onBodyChangedEventHandler = this.onBodyChangedEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangedEventHandler(event){
            this.setState(() => {
                return {
                    title : event.target.value.slice(0,this.state.maxLength)
                };
            });
        
        
    }

    onBodyChangedEventHandler(event){
        this.setState(() => {
            return {
                body : event.target.value
            };
        });
    }

    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNotes(this.state);
    }

    render() {
        let count = 50;
        return (
            <div className="note-input">
                <h2>Buatlah Catatan mu disini</h2>
                <p>Sisa karakter : {count - this.state.title.length}</p>
                <form className="note-input__form" onSubmit={this.onSubmitEventHandler}>
                    <p></p>
                    <input type="text" placeholder="Tulis judul notes kamu disini yahh..." value={this.state.title} onChange={this.onTitleChangedEventHandler}></input>
                    <textarea type="text" placeholder="Tulis isi dari notes kamu disini yahh..." value={this.state.body} onChange={this.onBodyChangedEventHandler}></textarea>
                    <button type="submit">Noted!</button>
                </form>
            </div>
        )
    }
}

export default NoteInput;