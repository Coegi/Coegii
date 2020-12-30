import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap'
import img1 from '../Slider/banner.jpg'
import './Slider.css'
import Popup from '../Slider/Popup'

class Slider extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            addModalShow: false

        };
    }

    state = {
        basic: false
    };

    toggleModal = modal => this.setState({ [modal]: !this.state[modal] });
    render() {

        let addModalClose = () => this.setState({ addModalShow: false });
        return (

            <div className='hero-container' id="Home">
                <video src={img1} alt="banner" autoPlay loop muted />
                <h1>ADVENTURE AWAITS</h1>
                <p>What are you waiting for?</p>
                <div className='hero-btns'>


                    {/* <Button
                        className='btns'
                        variant='primary'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        onClick={() => this.setState({ addModalShow: true })}
                        onPressed={() => this.toggleModal('basic')}
                    >
                        GET Quate
        </Button> */}


                </div>
            </div>
        );
    }
}
export default Slider;

