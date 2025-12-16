import { useState } from "react";
import { Windowcontrol } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import { Download, TriangleAlert } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import workerSrc from "pdfjs-dist/build/pdf.worker.min.mjs?url";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

const Resume = () => {
  const [loadError, setLoadError] = useState(null);

  return (
    <>
      <div id="window-header">
        <Windowcontrol target="resume" />
        <h2>Resume.pdf</h2>

        <a
          href="/files/resume.pdf"
          download
          className="cursor-pointer"
          title="Download resume"
        >
          <Download className="icon" />
        </a>
      </div>

      <div className="bg-white text-black p-4 w-[900px] max-w-[90vw] min-w-[320px] max-h-[80vh] overflow-auto box-border">
        <Document
          file="/files/resume.pdf"
          onLoadError={(err) => setLoadError(err?.message || "Unable to load PDF")}
          onSourceError={(err) => setLoadError(err?.message || "Unable to load PDF")}
        >
          {loadError ? (
            <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md p-3">
              <TriangleAlert className="h-4 w-4" />
              <p>{loadError}</p>
            </div>
          ) : (
            <Page pageNumber={1} renderTextLayer renderAnnotationLayer className="shadow" />
          )}
        </Document>
      </div>
    </>
  )
}

const ResumeWindow = WindowWrapper(Resume, 'resume')

export default ResumeWindow;