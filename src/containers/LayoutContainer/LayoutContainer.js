import { connect } from 'react-redux'
import { Layout } from '../../components'
import * as actions from '../../store/actions'

const mapStateToProps = state => {
  const { data, err, loading } = state.data
  return { data, err, loading }
}

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(actions.fetchData())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)
