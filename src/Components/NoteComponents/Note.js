import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

function Note({ id, text, deleteNote}) {
    return (
        <div className="note">
            <div className="note_body">{text}</div>
            <div className="note_footer" style={{ justifyContent: "flex-end"}}>
                <DeleteForeverOutlinedIcon
                    className="note_delete"
                    onClick={() => deleteNote(id)}
                    aria-hidden="true"
                ></DeleteForeverOutlinedIcon>
            </div>
        </div>
    );
}

export default Note;