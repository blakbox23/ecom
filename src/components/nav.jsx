import React, { Component } from 'react'
import './style.css';
import logo from '../assets/logo.png'
import cart from '../assets/shopping-cart.png'
import Modal from 'react-modal'
import MiniCart from './MiniCart';

export class Nav extends Component {
  state = {
    modalIsOpen: false
  }
   handleClose = () => this.setState({modalIsOpen: false});
   handleShow = () => {
     this.setState({modalIsOpen: true});
    }

  render() {
    return (
      <div className="nav flex">
          <div className="links flex">
            <p>WOMEN</p>
            <p>MEN</p>
            <p>KIDS</p>
          </div>
          <div className="logo">
              <img src={logo} alt="Logo" />
          </div>

          <div className="nav-right flex">
              <div> $</div>
              <div className="shopping-cart" onClick={this.handleShow}><img src={cart} alt="" /></div>
          </div>

          <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.handleClose}
          shouldCloseOnOverlayClick={true}
          style={{
            content: {
              width: '20.3rem',
              // height: '60rem',
              position: 'absolute',
              top: '-0.5em',
              right: '4em',
              marginLeft: 'auto',
              padding: '1em',
              border: 'none',
              overflow: 'hidden',
              maxHeight: '90vh',
              overflowY: 'auto'
            },
            overlay: {
              marginTop: '80px',
              backgroundColor: 'rgba(57, 55, 72, 0.22)',
            },
          }}
        >
          <MiniCart />
        </Modal>
    
      </div>
    )
  }
}

export default Nav