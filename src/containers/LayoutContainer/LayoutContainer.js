import { connect } from 'react-redux'
import { Layout } from '../../components'
import * as actions from '../../store/actions'

const mapStateToProps = state => {
  const { data, err, loading, src } = state.data
  return { data, err, loading, src }
}

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(actions.fetchData())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)
