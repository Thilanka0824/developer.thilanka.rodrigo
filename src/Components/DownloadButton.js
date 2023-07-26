import React from "react";
import MyResume from "./Resume-Thilanka-Rodrigo-UI-Developer.pdf";


const DownloadButton = () => {
  return (
    <div className="download-container">
      <a href={MyResume} download="MyResume">
        <button className="btn waves-effect waves-light" name="action">
          Download
        </button>
      </a>
    </div>
  );
};

export default DownloadButton;
