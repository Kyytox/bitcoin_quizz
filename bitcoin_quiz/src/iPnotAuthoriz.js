import { NavLink } from 'react-router-dom';
import { ipAuthorizElt1, ipAuthorizElt2, ipAuthorizElt3, ipAuthorizElt4 } from './data';
import './iPnotAuthoriz.css';
import './App';



function IPnotAuthoriz(props) {

    const lang = localStorage.getItem('lang')

    return (

        <div className='box-ip-no-authoriz'>
            <div className='result-quizz-ip'>
                <h4>{lang === 'fr' ? ipAuthorizElt1.FR : ipAuthorizElt1.EN}</h4>
                <h4>{lang === 'fr' ? ipAuthorizElt2.FR : ipAuthorizElt2.EN}</h4>
                <h4>{lang === 'fr' ? ipAuthorizElt3.FR : ipAuthorizElt3.EN}</h4>
                <p>&#128521;</p>
                <hr></hr>
                <NavLink to="/">
                    <button className='btn-claim-satoshis'>{lang === 'fr' ? ipAuthorizElt4.FR : ipAuthorizElt4.EN}</button>
                </NavLink>
            </div>
        </div >

    );
}

export default IPnotAuthoriz;