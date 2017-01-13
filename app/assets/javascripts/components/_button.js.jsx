
class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false,
      modalContent: ''
    }
  }

  close(e) {
    e.preventDefault();
    this.setState({ modalOpen: false });
 }

  open(e) {
    e.preventDefault();
    this.setState({ modalOpen: true });
    $.getJSON('/api/v1/facts.json', (response) => {
      const i = response.randomElement();
      // console.log(response[0].content)
      // debugger
      this.setState({
        modalContent: i.content
      })
    });
    }

  toggleModal(e) {
    e.preventDefault();
    this.setState({modalOpen: !this.state.modalOpen})
  }

  render() {
    return (
      <div>
      <a href='#' onClick={this.open.bind(this)}>{this.state.modalOpen ? 'How about...' : 'Did you know...'}</a>
      <Modal open={this.state.modalOpen} onHide={this.close.bind(this)} >
        <p>{this.state.modalContent}</p>
      </Modal>
      </div>
    )
  }
}

Array.prototype.randomElement = function () {
      return this[Math.floor(Math.random() * this.length)]
  }
