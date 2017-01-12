class Modal extends React.Component {
  render() {
    const styles = {
      modalOpen: {
        background: 'white',
        boxShadow: '0 0 12px 0 rgba(0,0,0,.2)',
        margin: '2rem',
        padding: '2rem',
        transform: 'translate Y(0%)',
        transition: 'all 1s ease'
      },
      modalClosed: {
        display: 'none',
        transform: 'translate Y(-100%)',
        transition: 'all 1s ease'
      }

    }

    let modalStyles = this.props.open ? styles.modalOpen : styles.modalClosed;


    return (
      <div style={modalStyles}>{this.props.children}</div>
    )
  }
}
