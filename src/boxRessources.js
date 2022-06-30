import './boxRessources.css';


function BoxRessources(props) {

    return (
        <>
            <div className='quizz-box-ressources'>
                <div className="box-ressources-links">
                    <h3>En savoir plus :</h3>
                    <a href={props.ressources[0]} target="_blank" rel="noopener noreferrer">{props.ressources[1]}</a>
                    <a href={props.ressources[2]} target="_blank" rel="noopener noreferrer">{props.ressources[3]}</a>
                    <a href={props.ressources[4]} target="_blank" rel="noopener noreferrer">{props.ressources[5]}</a>
                    <a href={props.ressources[6]} target="_blank" rel="noopener noreferrer">{props.ressources[7]}</a>
                </div>
            </div >
        </>
    );
}

export default BoxRessources;