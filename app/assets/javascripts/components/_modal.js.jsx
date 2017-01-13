class Modal extends React.Component {

  render() {
    const styles = {
      modalOpen: {
        background: 'white',
        boxShadow: '0 0 12px 0 rgba(0,0,0,.2)',
        margin: '2rem',
        padding: '2rem',
        transform: 'translate Y(0%)',
        transition: 'all 1s ease',
        textAlign: 'center',
        width: '800px',
        maxWidth: '100%'
      },
      modalClosed: {
        display: 'none',
        transform: 'translate Y(-100%)',
        transition: 'all 1s ease'
      },
    closeButton: {
       color: '#fff',
       textDecoration: 'none',
       display: 'inline-block',
       padding: '5px 5px',
       borderRadius: '5px',
       backgroundColor: '#E74C3C'
      }
    }

    let modalStyles = this.props.open ? styles.modalOpen : styles.modalClosed;


    return (
      <div style={modalStyles} >
         {this.props.children}
          <div style={styles.closeButton}>
            <a href="#" onClick={this.props.onHide}>Close</a>
          </div>
      </div>
    )
  }
}
