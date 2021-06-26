import React, { useState } from "react";
import "../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "./TextEditor.css";
const TextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  return (
    <div>
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
      />
      {/* <textarea
        disabled
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      /> */}
    </div>
  );
};

export default TextEditor;
