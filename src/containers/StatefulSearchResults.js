import { connect } from 'react-redux';
import MediaItemList from '../components/MediaItemList';
import {
  addSaved,
  removeSaved,
  addWatched,
  removeWatched,
  getMoreInfo,
} from '../actions';

const mapDispatchToProps = dispatch => ({
  onSave: (item) => {
    if (item.saved) {
      // already saved, remove
      dispatch(removeSaved(item));
    } else {
      // not saved, add
      dispatch(addSaved(item));
    }
  },
  onWatched: (item) => {
    if (item.watched) {
      // was watched before, remove watched status
      dispatch(removeWatched(item));
    } else {
      // add watched status
      dispatch(addWatched(item));
    }
  },
  onMoreInfo: (item) => {
    dispatch(getMoreInfo(item));
  }
});

const StatefulSearchResults = connect(
  null,
  mapDispatchToProps
)(MediaItemList);

export default StatefulSearchResults