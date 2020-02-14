import React, { useState } from 'react';
import Followers from './Followers';
import Stats from './Stats';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const UpperDisplay = (props) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    
    const logOut = () => {
        localStorage.removeItem('username');
        props.history.push('/')
    }

    const battle = () => {
        if(props.player2.login) {
            toggle()
        } else {
            alert('No player 2 selected')
        }
    }
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <div>
                    <p onClick={() => logOut()}>Back</p>
                </div>
                <div style={{display: 'flex'}}>
                    <p onClick={() => props.prevPage()}>Prev</p>
                    <h2>Followers Battle</h2>
                    <p onClick={() => props.nextPage()}>Next</p>
                    <p onClick={battle}>Hi</p>
                </div>
            </div>
            <div style={{maxHeight: '400px'}}>
                
                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalBody>
                            <Stats 
                            player1={props.player1}
                            player2={props.player2}
                            />
                        </ModalBody>
                    </Modal>
                    <Followers
                    randomPlayer2={props.randomPlayer2}
                    followers={props.followers}
                    loading={props.loading}
                    changePlayer2={props.changePlayer2}
                    />
                
                
            </div>
        </div>
    )
}

export default UpperDisplay;