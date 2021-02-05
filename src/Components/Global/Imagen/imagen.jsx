import React, { useState, useEffect } from "react";
import { getStorage } from '../../../db';
import { SpinningCircles } from 'svg-loaders-react'
import './imagen.css';

export default function Imagen({ src, alt}) {
  const [url, setUrl] = useState("http://placehold.it/300x300");//ruta por defecto
  const [loading, setLoading] = useState(true);


  useEffect(()=>{
    getStorage().ref(src).getDownloadURL()
      .then(val=>setUrl(val))
      .catch(err=>console.log(err))
      .finally(() => setLoading(false));

  },[]);

  return (
    
    <div className="imagen">
      {loading ? (
        <SpinningCircles fill="Aquamarine" size="small" />
        ) : (
          <img src={url} alt={alt} />
        )}
    </div>
  );


}



