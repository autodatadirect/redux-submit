import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'

import * as actions from '../actions'
import SubmitButton from '../components/SubmitButton'
// import stateByName from '../util/stateByName'

const mapStateToProps = (state, props) => {
  // const namedState = stateByName(state, props.name)
  return {}
}

const mapDispatchToProps = dispatch => bindActionCreators({
  register: actions.register,
  destroy: actions.destroy
}, dispatch)

const lifecycleMethods = {
  componentWillMount () {
    this.props.register(this.props.name)
  },
  componentWillUnmount () {
    this.props.destroy(this.props.name)
  }
}

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle(lifecycleMethods)
)

export default enhance(SubmitButton)
