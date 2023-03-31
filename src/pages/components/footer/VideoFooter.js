import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@Paulo Ebac</h3>
        <p>Descrição do Video</p>
        <div className="videoFooter__music">
          <MusicNoteIcon className="videoFooter__icon" />
          <div className="videoFooterMusic__text">
            <p>Titulo da música</p>
          </div>
          <img
            className="videoFoooter__record"
            alt="Imagem de um vinil girando"
            src="https://firebasestorage.googleapis.com/v0/b/jornada-b5e9d.appspot.com/o/vinil.png?alt=media&token=95dd7b93-7976-446f-944b-5ea6a4fb85c9"
          />
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
