

const Estudio = () => {
   
    const db = getFirestore();
    const [data, setData] = useContext(Store);
    const [ diligenciando, completoDiligenciado] = useState(false);
    
    const [formData, setFormData] = useState({

        nombres: '',
        apellidos: '',
        tipoDocumento: '',
        numero: '',
        fechaExpedicion: '',
        lugarExpedicion: '',
        fechaNacimiento: '',
        lugarNacimiento: '',
        Nacionalidad: '',
        direccionResidencia: '',
        ciudad: '',
        departamento: '',
        correo: '',
        telefonoCasa: '',
        celular: '',
        ocupacion: '',
        cargo: '',
        empresaDondeTrabaja: '',
        direccionOficina: '',
        telefonoOficina: '',
        personasCargo: '',
        estadoCivil: '',
        nombreConyuge: '',
        tipoDocumentoConyuge: '',
        numeroDocumentoConyuge: '',
        profesionConyuge: '',
        ingresosMensuales: '',
        egresosMensuales: '',
        activos: '',
        pasivos: '',
        patrimonio: '',
        personaPublica: '',
        administraPublicos: '',
        vinculoConPersonaPublica: '',
        inmueblesYVehiculos: '',
        origenFondeos: '',
        firma: '',
        huella: '',

    })

    const[idInmueble, setIdInmueble] = useState('');

    const handleChangeInput = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const inmueble ={
        nombre: formData,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        db.collection('inmuebles').add(inmueble)
        .then(({id}) =>{
            completoPublicado(true);
            setIdInmueble(id);
        }).then((inmuebleRef) => {
            console.log("Inmueble registrado con ID: ", inmuebleRef.id);
        })
        .catch(e => console.log(e))
    }

    
     





}