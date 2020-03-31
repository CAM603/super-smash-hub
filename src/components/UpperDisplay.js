import React, { useState } from 'react';
import Followers from './Followers';
import Stats from './Stats';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Controls from './Controls';

const UpperDisplay = (props) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    
    return (
        <div className="upper-container">
            <Controls
                toggle={toggle}
                player2={props.player2}
                nextPage={props.nextPage}
                prevPage={props.prevPage}
                {...props}
            />
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
                setLoading={props.setLoading}
                changePlayer2={props.changePlayer2}
            />
        </div>
    )
}

export default UpperDisplay;