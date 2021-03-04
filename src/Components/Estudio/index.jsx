import {useState, useContext} from 'react';
import Camera from 'react-html5-camera-photo';
import SignaturePad from 'react-signature-pad';
import {getFirestore} from '../../db';
import {Store} from '../../store';
import firebase from 'firebase/app';
import './estudio.css';

const Estudio = () => {
    const db = getFirestore();
    const [data, setData] = useContext(Store);
    const [ diligenciando, completoEstudio] = useState(false);

    
    const [formData, setFormData] = useState({

        nombre: '',
        tipoDocumento: '',
        numero: '',
        fechaNacimiento: '',
        direccion: '',
        ciudad: '',
        departamento: '',
        correo: '',
        telefono: '',
        ocupacion: '',
        ingresos: '',
        egresos: '',
        firma: '',
        imgDocumento: '',

    })

    const[idEstudio, setIdEstudio] = useState('');

    const handleChangeInput = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const estudioInquilino ={
        nombre: formData,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        db.collection('estudiosInquilinos').add(estudioInquilino)
        .then(({id}) =>{
            completoEstudio(true);
            setIdEstudio(id);
        }).then((estudioRef) => {
            console.log("Estudio realizado con exito registrado con ID: ", estudioRef.id);
        })
        .catch(e => console.log(e))
    }

    return (
        <div className="estudio">

            { 
                !diligenciando ?

                <form onSubmit={handleSubmitForm}>
                
                <h1> Formulario estudio de arrendamiento</h1>

                <p>Requisitos de arriendo de $400.000 hasta $3.000.000 incluida la administración</p>

                <p>Un codeudor Solidario Solvente </p> 
                <p>Tanto el tomador o inquilino, como el codeudor deben acreditar ingresos por mas del doble del canon de arriendo</p>

                <h1>Datos del Inquilino o tomador del Apartamento</h1>

                <label>
                    <p>Nombre Completo</p>
                    <input type="text" name="nombreInquilino" value={formData.nombreInquilino} onChange={handleChangeInput}/>
                </label>
                <label>
                    <p>Tipo de Documento</p>
                    <select type="text" value={formData.tipoDocumentoInquilino} onChange={handleChangeInput} name="tipoDocumentoInquilino" id="tipoDocumentoInquilino">
                        <option value="cc">C.C</option>
                        <option value="ce">C.E</option>
                        <option value="nit">Nit</option>
                    </select>
                </label>
                <label>
                    <p>Número</p>
                    <input type="text" name="numeroInquilino" value={formData.numeroInquilino} onChange={handleChangeInput} />
                </label>
                <label>
                    <p>Fecha Nacimiento</p>
                    <input  type="date" name="fechaNacimientoInquilino" value={formData.fechaNacimientoInquilino} onChange={handleChangeInput} />
                </label>
                <label>
                    <p>Dirección</p>
                    <input type="text" name="direccionInquilino" value={formData.direccionInquilino} onChange={handleChangeInput} />
                </label>
                <label>
                    <p>Ciudad</p>
                    <input type="text" name="ciudadInquilino" value={formData.ciudadInquilino} onChange={handleChangeInput}/>

                </label>
                <label>
                    <p>Departamento</p>
                    <input type="text" name="departamentoInquilino" value={formData.departamentoInquilino} onChange={handleChangeInput}/>

                </label>
                <label>
                    <p>Correo Electrónico</p>
                    <input type="text" name="correoInquilino" value={formData.correoInquilino} onChange={handleChangeInput} />

                </label>
                <label>
                    <p>Teléfono</p>
                    <input type="tel" name="telefonoInquilino" value={formData.telefonoInquilino} onChange={handleChangeInput} />
                </label>
                <label>
                    <p>Ocupación</p>
                    <input type="text" name="ocupacionInquilino" value={formData.ocupacionInquilino} onChange={handleChangeInput}/>

                </label>
                <label>
                    <p>Ingresos Mensuales</p>
                    <input type="text" name="ingresosInquilino" value={formData.ingresosInquilino} onChange={handleChangeInput}/>

                </label>
                <label>
                    <p>Egresos Mensuales</p>
                    <input type="text" name="egresosInquilino" value={formData.egresosInquilino} onChange={handleChangeInput}/>

                </label>
                <label>
                    <p>Firma aceptando el estudio de arrendamiento (Inquilino)</p>
                    <SignaturePad           
                    clearButton={true}                 
                    />

                </label>

                <label>
                    <p>Foto del documento de identidad con el que arrendaras el inmueble (Inquilino)</p>
                    <Camera />
                </label>

                <h1>Datos del Codeudor Solidario Solvente</h1>

                <label>
                    <p>Nombre Completo</p>
                    <input type="text" name="nombreCodeudor" value={formData.nombreCodeudor} onChange={handleChangeInput}/>
                </label>
                <label>
                    <p>Tipo de Documento</p>
                    <select type="text" value={formData.tipoDocumentoCodeudor} onChange={handleChangeInput} name="tipoDocumentoCodeudor" id="tipoDocumentoCodeudor">
                        <option value="cc">C.C</option>
                        <option value="ce">C.E</option>
                        <option value="nit">Nit</option>
                    </select>
                </label>
                <label>
                    <p>Número</p>
                    <input type="text" name="numeroCodeudor" value={formData.numeroCodeudor} onChange={handleChangeInput} />
                </label>
                <label>
                    <p>Fecha Nacimiento</p>
                    <input  type="date" name="fechaNacimientoCodeudor" value={formData.fechaNacimientoCodeudor} onChange={handleChangeInput} />
                </label>
                <label>
                    <p>Dirección</p>
                    <input type="text" name="direccionCodeudor" value={formData.direccionCodeudor} onChange={handleChangeInput} />
                </label>
                <label>
                    <p>Ciudad</p>
                    <input type="text" name="ciudadCodeudor" value={formData.ciudadCodeudor} onChange={handleChangeInput}/>

                </label>
                <label>
                    <p>Departamento</p>
                    <input type="text" name="departamentoCodeudor" value={formData.departamentoCodeudor} onChange={handleChangeInput}/>

                </label>
                <label>
                    <p>Correo Electrónico</p>
                    <input type="text" name="correoCodeudor" value={formData.correoCodeudor} onChange={handleChangeInput} />

                </label>
                <label>
                    <p>Teléfono</p>
                    <input type="tel" name="telefonoCodeudor" value={formData.telefonoCodeudor} onChange={handleChangeInput} />
                </label>
                <label>
                    <p>Ocupación</p>
                    <input type="text" name="ocupacionCodeudor" value={formData.ocupacionCodeudor} onChange={handleChangeInput}/>

                </label>
                <label>
                    <p>Ingresos Mensuales</p>
                    <input type="text" name="ingresosCodeudor" value={formData.ingresosCodeudor} onChange={handleChangeInput}/>

                </label>
                <label>
                    <p>Egresos Mensuales</p>
                    <input type="text" name="egresosCodeudor" value={formData.egresosCodeudor} onChange={handleChangeInput}/>

                </label>
                <label>
                    <p>Firma aceptando el estudio de arrendamiento (Codeudor)</p>
                    <div className="signature-pad">
                        <SignaturePad />
                    </div>


                </label>

                <label>
                    <p>Foto del documento de identidad con el que arrendaras el inmueble (Codeudor)</p>
                    <Camera />
                </label>



            </form> : 
            <p><strong>Recibimos su solicitud de estudio de arrendamiento: </strong>  {idEstudio}. En unos momentos </p>

            }


        </div>
    )
     
}

export default Estudio;