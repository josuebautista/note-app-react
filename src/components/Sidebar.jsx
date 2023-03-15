import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { useGlobalContext } from "../utils/Context";

export const Sidebar = () => {
  const { switchOn, notes, createNewNote, setCurrentNoteId, deleteNote, findCurrentNote } = useGlobalContext();

  const theme = () => {
    if (switchOn){
      return "bg-secondary"
    } else {
      return "bg-info"
    }
  }
  return (
    <div className="col-3 m-0">
      <div className="text-center fs-2">
        Notes
        <button className="btn btn-info rounded-circle ms-3" onClick={createNewNote}> <BsPlusLg /></button>
      </div>
      <div>
        {
          notes.map((note) => {
            return (
              <div key={note.id}>
                <div className={`${switchOn ? "border border-2 border-secondary" : "border border-2 border-info"}  ${ note.id === findCurrentNote().id ? theme() : "bg-transparent " } py-2 px-3 my-1 d-flex justify-content-between rounded-3 overflow-hidden`}
                  onClick={() => setCurrentNoteId(note.id)}
                  style={{cursor: 'pointer',
                  maHeight: "55px"}}
                >
                  <h5 className={`${switchOn ? "text-light" : "text-black"}`} style={{overflow: "hidden",
                    texOverflow: "ellipsis"}}>{note.body.split("\n")[0]}</h5>
                  <button
                    className="btn btn-close  bg-primary-subtle p-2"
                    onClick={(event) => deleteNote(event, note.id)}
                  ></button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
