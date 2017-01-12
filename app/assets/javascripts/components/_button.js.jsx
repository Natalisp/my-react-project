
class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false
    }
  }

  toggleModal(e) {
    e.preventDefault();
    this.setState({modalOpen: !this.state.modalOpen})
    console.log('Hola')
  }


  render() {
    return (
      <div>
      <a href='#' onClick={this.toggleModal.bind(this)}>{this.state.modalOpen ? 'Close Me' : 'Open Me'}</a>
      <Modal open={this.state.modalOpen} >
        <p>Waaaaaaah</p>
      </Modal>
      </div>
    )
  }
}
