import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
export class SelectedBeast extends Component {
 





    render() {
        return (
            <div>
                 
                 <Modal show={this.props.show} onHide={this.props.close}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.pervprops.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body> <Card.Img variant="top" src={this.props.pervprops.img_url} /> </Modal.Body>
        <Modal.Footer>
        <Card.Text>
                 descrption:{this.props.pervprops.descrption}
                </Card.Text>
          <Button variant="secondary" onClick={this.props.close}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>

            </div>
        )
    }
}

export default SelectedBeast
