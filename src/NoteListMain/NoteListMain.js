import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Note from '../Note/Note'
import CircleButton from '../CircleButton/CircleButton'
import './NoteListMain.css'
import AddNote from '../AddNote/AddNote';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';


export default class NoteListMain extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showForm: false
    }
  }

  updateShowForm = (e) => {
    e.preventDefault();
    this.setState({
      showForm: !this.state.showForm
    })
  }

  addNote = (e) => {
    this.props.addNote(e);
    this.setState({
      showForm: false
    })
  }


  render() {
    return (
      <section className='NoteListMain'>
        <ul>
          {this.props.notes.map(note =>
            <li key={note.id}>
              <Note
                id={note.id}
                name={note.name}
                modified={note.modified}
                deleteNote={this.props.deleteNote}
              />
            </li>
          )}
        </ul>
        <div className='NoteListMain__button-container'>
          <CircleButton
            type="button"
            className="NoteListMain__add-note-button"
            onClick={(e) => this.updateShowForm(e)}
          >
            <FontAwesomeIcon icon='plus' />
            <br />
            Note
        </CircleButton>
          <ErrorBoundary>
            {this.state.showForm &&
              <AddNote
                updateNewNote={this.props.updateNewNote}
                newNote={this.props.newNote}
                addNote={this.addNote}
                folders={this.props.folders}
              />}
          </ErrorBoundary>
        </div>
      </section>
    )
  }
}

NoteListMain.defaultProps = {
  notes: [],
}
