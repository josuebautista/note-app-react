import React, { useContext, useEffect, useState } from "react";
import Showdown from "showdown";
import {nanoid} from "nanoid";
//import { Data } from "./Data";

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [switchOn, setSwitchOn] = useState(false);
    const [notes, setNotes] = useState(() => 
        JSON.parse(localStorage.getItem("notes")) || []
    )
    const [currentNoteId, setCurrentNoteId] = useState(
        (notes[0] && notes[0].id) || ""
    );
    const [selectedTab, setSelectedTab] = useState("write");

    
    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        }
        setNotes(notes => [newNote, ...notes])
        setCurrentNoteId(newNote.id)
    }
    
    function updateNote(text) {
        setNotes(oldNotes => {
            const newArray = []
            for(let i = 0; i < oldNotes.length; i++) {
                const oldNote = oldNotes[i]
                if(oldNote.id === currentNoteId) {
                    newArray.unshift({ ...oldNote, body: text })
                } else {
                    newArray.push(oldNote)
                }
            }
            return newArray
        })
    }

    function deleteNote(event, noteId) {
        event.stopPropagation()
        setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId))
    }
    
    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    });
    

    useEffect(()=> {
        if (switchOn){
            document.body.className = 'bg-dark text-light';
        } else {
            document.body.className = 'bg-body-tertiary';
        }
    }, [switchOn]);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])

    function checkedChange(event) {

    console.log(event.target.checked);
    setSwitchOn(event.target.checked);
  }

    return <AppContext.Provider value={{
        switchOn,
        setSwitchOn,
        notes,
        setNotes,
        currentNoteId, 
        setCurrentNoteId,
        checkedChange,
        selectedTab, 
        setSelectedTab,
        createNewNote,
        deleteNote,
        updateNote,
        findCurrentNote,
        converter
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };