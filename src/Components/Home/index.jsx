import {useState, useEffect} from 'react';
import PropiedadesDestacadas from './PropiedadesDestacadas'
//import Slider from './Slider'
import CategoriesGrid from './CategoriesGrid'
import Requisitos from './Requisitos'

const Home = () => {
    const [setWidth] = useState(null);

    const resizeFn = (e) => {
        setWidth (e.target.innerWidth);

    }
    
    useEffect (() => {
        window.addEventListener('resize', resizeFn);
        return () => window.removeEventListener('resize', resizeFn);
    })

    return (
        <>
            <PropiedadesDestacadas />
            <CategoriesGrid />    
            <Requisitos />

        </>
 
    )
}

export default Home;