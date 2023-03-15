import React from "react";
import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";
import { useGlobalContext } from "../utils/Context";


export const Editor = ({currentNote}) => {
  const {selectedTab, setSelectedTab, updateNote, converter} = useGlobalContext();

  return (
    <div className="col-9 bg-secondary m-0">
      <ReactMde
        value={currentNote.body}
        onChange={updateNote}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
        minEditorHeight={80}
        heightUnits="vh"
      />
    </div>
  )
}
