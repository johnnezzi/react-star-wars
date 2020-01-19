import React, { useState } from 'react';
import CharacterAvatar from "./Avatar";
import Modal from "react-modal";
import AdditionalDetails from "./AdditionalDetails";

const Card = ({character}) => {
    const [ modalShow, setModal ] = useState(false);

    return (
        <div>
            <h3>{character.name}</h3>
            <CharacterAvatar options={character} hash={character.name}/>
            <button onClick={() => setModal(true)}>More Info....</button>
            <Modal style={{
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(255, 255, 255, 0.25)'
                },
                content: {
                    width: "400px",
                    height: "400px",
                    top: "50%",
                    left: "50%",
                    right: "auto",
                    bottom: "auto",
                    marginRight: "-50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "black",
                    color: 'yellow',
                    display: "flex"
                }
            }} options={character} isOpen={modalShow}  onRequestClose={()=> setModal(false)}>
                <AdditionalDetails options={character}/>
            </Modal>
        </div>
    );
};

export default Card;
