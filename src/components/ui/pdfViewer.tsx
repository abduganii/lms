import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function PdfViewer({ fileUrl }:any) {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.10.377/build/pdf.worker.min.js">
            <div style={{ height: '750px' }}>
                <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
            </div>
        </Worker>
    );
}

export default PdfViewer;
