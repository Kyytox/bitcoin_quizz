import { NavLink } from 'react-router-dom';
import { ipFindElt1, ipFindElt2, ipFindElt3 } from './data';
import './iPnotAuthoriz.css';
import './App';



function IPnotFind(props) {

    const lang = localStorage.getItem('lang')

    return (

        <div className='box-ip-no-authoriz'>
            <div className='result-quizz-ip'>
                <h4>{lang === 'fr' ? ipFindElt1.FR : ipFindElt1.EN}</h4>
                <h4>{lang === 'fr' ? ipFindElt2.FR : ipFindElt2.EN}</h4>
                <p>&#128521;</p>
                <hr></hr>
                <NavLink to="/">
                    <button className='btn-claim-satoshis'>{lang === 'fr' ? ipFindElt3.FR : ipFindElt3.EN}</button>
                </NavLink>
            </div>
        </div >

    );
}

export default IPnotFind;