
import { NavLink } from 'react-router-dom';


function ButtonPlay() {
    return (
        <div className='App-main-div-create-session' >
            <NavLink to="/quizz">
                <button className='button-play'>Play</button>
            </NavLink>
        </div >
    );
}

export default ButtonPlay;