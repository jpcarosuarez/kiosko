import error from './img/error.jpg';
import './index.css';

const Error404 = () => {
    return (
        <div className='error'>
            <img src={error} alt="error"/>
            <p></p>
        </div>
    )
}

export default Error404;