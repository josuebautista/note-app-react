import { useGlobalContext } from "../utils/Context";
import { Editor } from "./Editor";
import { Sidebar } from "./Sidebar";
//import Split from "react-split";

export const Main = () => {
  const { notes, updateNote, findCurrentNote, createNewNote, currentNoteId } = useGlobalContext();

  return (
    <main>
      {
        notes.length > 0
          ?
          <div className="row">
              <Sidebar
                currentNote={findCurrentNote()}
              />
              {
                currentNoteId &&
                notes.length > 0 &&
                <Editor
                  currentNote={findCurrentNote()}
                  updateNote={updateNote}
                />
              }
          </div>
          :
          <div className="position-absolute top-50 start-50 translate-middle text-center">
            <h1 className="py-3">You have no notes</h1>
            <button
              className="btn btn-primary rounded-4 px-3"
              onClick={createNewNote}
            >
              Create one now
            </button>
          </div>
      }
    </main>
  )
}