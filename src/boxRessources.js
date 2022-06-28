import './boxRessources.css';


function BoxRessources(props) {

    return (
        <>
            <div className='quizz-box-ressources'>
                <div className="box-ressources-links">
                    <h3>En savoir plus :</h3>
                    <a href={props.ressources[0]} target="_blank" rel="noopener noreferrer">{props.ressources[1]}</a>
                </div>
            </div >
        </>
    );
}

export default BoxRessources;