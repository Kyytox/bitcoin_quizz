import { boxRessElt1 } from './data';
import './boxRessources.css';


function BoxRessources(props) {

    const lang = localStorage.getItem('lang')

    return (
        <>
            <div className='quizz-box-ressources'>
                <div className="box-ressources-links">
                    <h3>{lang === 'fr' ? boxRessElt1.FR : boxRessElt1.EN} :</h3>
                    {props.ressources[1]
                        && <a href={props.ressources[0]} target="_blank" rel="noopener noreferrer">{props.ressources[1]} <i className="fa-solid fa-up-right-from-square"></i></a>
                    }
                    {props.ressources[3]
                        && <a href={props.ressources[2]} target="_blank" rel="noopener noreferrer">{props.ressources[3]} <i className="fa-solid fa-up-right-from-square"></i></a>
                    }
                    {props.ressources[5]
                        && <a href={props.ressources[4]} target="_blank" rel="noopener noreferrer">{props.ressources[5]} <i className="fa-solid fa-up-right-from-square"></i></a>
                    }
                    {props.ressources[7]
                        && <a href={props.ressources[6]} target="_blank" rel="noopener noreferrer">{props.ressources[7]} <i className="fa-solid fa-up-right-from-square"></i></a>
                    }
                </div>
            </div >
        </>
    );
}

export default BoxRessources;