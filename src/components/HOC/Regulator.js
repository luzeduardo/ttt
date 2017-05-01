function Regulator(WrappedComponent) {
  return class PP extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        name: ''
      }

      this.onNameChange = this.onNameChange.bind(this)
    }
    onNameChange(event) {
      this.setState({
        name: event.target.value
      })
    }
    render() {
      const newProps = {
        name: {
          value: this.state.name,
          onChange: this.onNameChange
        }
      }
      return <WrappedComponent {...this.props} {...newProps}/>
    }
  }
}
