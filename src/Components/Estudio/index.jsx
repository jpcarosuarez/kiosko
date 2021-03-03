

const Estudio = () => {
   
    const db = getFirestore();
    const [data, setData] = useContext(Store);
    const [ diligenciando, completoDiligenciado] = useState(false);
    
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
        db.collection('estudiosInquilinos').add(estudio)
        .then(({id}) =>{
            completoEstudio(true);
            setIdEstudio(id);
        }).then((estudioRef) => {
            console.log("Estudio realizado con exito registrado con ID: ", estudioRef.id);
        })
        .catch(e => console.log(e))
    }

    return (
        <div>
            <form>
                <label>
                    <p>Nombre</p>
                    <input type="text" value="nombre"/>
                </label>
                <label>
                    <p>Tipo de Documento</p>
                    <select>
                        <option name="cc">C.C</option>
                        <option name="ce">C.E</option>
                        <option name="nit">Nit</option>
                    </select>
                </label>
                <label>
                    <p>Numero</p>
                    <input type="text" name="numero" />
                </label>
                <label>
                    <p>Fecha Nacimiento</p>
                    <input  type="date" name="fechaNacimiento" />
                </label>
                <label>
                    <p>Dirección</p>
                    <input type="text" name="direccion" />
                </label>
                <label>
                    <p>Ciudad</p>
                    <input type="text" name="ciudad" />

                </label>
                <label>
                    <p>Departamento</p>
                    <input type="text" name="departamento" />

                </label>
                <label>
                    <p>Correo Electrónico</p>
                    <input type="text" name="correo" />

                </label>
                <label>
                    <p>Teléfono</p>
                    <input type="tel" name="telefono" />
                </label>
                <label>
                    <p>Ocupación</p>
                    <input type="text" name="ocupacion" />

                </label>
                <label>
                    <p>Ingresos Mensuales</p>
                    <input type="text" name="ingresos" />

                </label>
                <label>
                    <p>Egresos Mensuales</p>
                    <input type="text" name="egresos" />

                </label>
                <label>
                    <p>Firma</p>
                </label>
                <label>
                    <p>Imagen Documento de Identidad</p>
                </label>

            </form>
        </div>
    )
     





}