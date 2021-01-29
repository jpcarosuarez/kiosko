import React, { useState, useEffect } from "react";
import { getStorage } from '../../../db';


export default function Imagen({ src, alt}) {
  //Setear imagen por defecto
  const [url, setUrl] = useState();

  useEffect(() => {
    getStorage()
      //referencia al path/nombre del archivo en el storage
      .ref()
      .child(`${src}`)
      //Se obtiene una URL de la imagen
      .getDownloadURL()
      //devuelve una promesa con la url
      .then((val) => setUrl(val))
      .catch((err) => console.log(err))
  }, []);

  //uso la url en un tag de imagen
  
  
  return (
    <div>

      <img src={url} alt={alt} />


    </div>
  );
}