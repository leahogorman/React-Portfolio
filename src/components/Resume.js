import React from 'react';

import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
import resumePDF from '../assets/documents/resumePDF.pdf'

function Resume() {
  return (
    <div className="resume">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
            <div id="pdfviewer">
                <Viewer fileUrl={resumePDF} /> 
            </div>
        </Worker>
    </div>
  );
}

export default Resume;