import {useContext} from 'react';
import {Store} from '../../../../store';
import './login.css';
import SignIn from '../../../Admin';


const LoginMenu = () => {
    const [data, setData] = useContext(Store);

    return (
        <div className="loginMenu" >


        <SignIn />



        </div>
    )
};

export default LoginMenu;