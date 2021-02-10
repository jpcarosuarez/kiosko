import './formEstudio.css';
import formulario from './assets/Formulario inquilino_codeudor_natural';
import PDFViewer from 'pdf-viewer-reactjs';

const Estudio = () => {
    return (
        <PDFViewer
            document={formulario}
        />
    )
}

export default Estudio;