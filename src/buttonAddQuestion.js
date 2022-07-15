
import { NavLink } from 'react-router-dom';


function ButtonAddQuestion() {
    return (
        <div className='App-main-div-add-question' >
            <NavLink to="/ajouter-question">
                <button className='button-add-question'>Ajouter une question</button>
            </NavLink>
        </div >
    );
}

export default ButtonAddQuestion;