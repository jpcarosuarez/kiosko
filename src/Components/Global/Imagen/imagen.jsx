import React, { useState, useEffect } from "react";
import { getStorage } from '../../../db';


export default function Imagen({ src, alt}) {
  //Setear imagen por defecto
  const [url, setUrl] = useState('https://plchldr.co/1/300x300');//ruta por defecto
  useEffect(()=>{
    getStorage().ref(src).getDownloadURL()
      .then(val=>setUrl(val))
      .catch(err=>console.log(err))
  },[]);

  return <img src={url} alt={alt} />;

}

