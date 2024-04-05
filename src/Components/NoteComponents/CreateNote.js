import LinearProgress from "@mui/material/LinearProgress"
import record from "../images/record.png"
import pause from "../images/pause.png"
import stop from "../images/stop.png"
import microphone from "./py"


function CreateNote({ textHandler, saveHandler, inputText,microphone}) {
    //character limit
    const charLimit = 100;
    const charLeft = charLimit - inputText.length;
    
    return (
        <div className="note" style={{ background: "rgba(225, 225, 225, 0)"}}>

            <textarea
                cols="10"
                rows="5"
                value={inputText}
                placeholder="Tap to Speak...."
                onChange={textHandler}
                maxLength="100"
                
            ></textarea>
             <button className="note_icon" onClick={microphone}>
             <img src={record} className="Note-logo" />
                </button>
                <button className="pause_icon" >
             <img src={pause} className="Note-logo" />
                </button>
                <button className="stop_icon" >
             <img src={stop} className="Note-logo" />
                </button>
            <div className="note_footer">
                <span className="label">{charLeft} left</span>
                <button className="note_save" onClick={saveHandler}>
                    Save
                </button>
            </div>
            <LinearProgress
                className="char_progress"
                variant="determinate"
                value={charLeft}
            ></LinearProgress>
        </div>
    );
}

export default CreateNote;