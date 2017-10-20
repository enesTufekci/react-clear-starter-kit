import { connect } from 'react-redux';
import Zen from './components';
import { fetchZen } from './reducer';

const mapStateToProps = state => ({
  zen: state.zen.zen,
  fetching: state.zen.fetching,
});

const mapDispatchToProps = {
  fetchZen,
};

export default connect(mapStateToProps, mapDispatchToProps)(Zen);
