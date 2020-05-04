import React, { Component } from 'react';
import { connect } from 'react-redux';
import StatefulSearchResults from '../containers/StatefulSearchResults';
import Pagination from '../components/Pagination';
import {
  searchMedia,
  updateSearchYear,
  updateSearchTitle,
  updateSearchType,
  searchNextPage,
  searchPreviousPage,
  searchResetPage, searchSpecificPage,
} from '../actions';
import constants from '../constants';
import '../css/Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.updateType = this.updateType.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }
  updateType(t) {
    const { dispatch } = this.props;
    dispatch(updateSearchType(t.currentTarget.value));
  }
  updateTitle(t) {
    const { dispatch } = this.props;
    dispatch(updateSearchTitle(t.currentTarget.value));
  }
  updateYear(y) {
    const { dispatch } = this.props;
    dispatch(updateSearchYear(y.currentTarget.value));
  }
  handleSearch(e) {
    e.preventDefault();
    const { dispatch, title, year, type } = this.props;
    dispatch(searchResetPage());
    dispatch(searchMedia({ title, year, type }));
  }
  handleEnter(e) {
    if (e.charCode === 13) {
      // enter was pressed
      this.handleSearch(e);
    }
  }
  specificPage(i) {
    const { dispatch, title, year, type } = this.props;
    dispatch(searchSpecificPage(i));
    dispatch(searchMedia({ title, year, type, page: i }));
  }
  nextPage(e) {
    e.preventDefault();
    const { dispatch, title, year, type, page } = this.props;
    dispatch(searchNextPage());
    // I'm sure there's a better way to do this, but in the interest of time skipping that for now
    dispatch(searchMedia({ title, year, type, page: page + 1 }));
  }
  previousPage(e) {
    e.preventDefault();
    const { dispatch, title, year, type, page } = this.props;
    dispatch(searchPreviousPage());
    // I'm sure there's a better way to do this, but in the interest of time skipping that for now
    dispatch(searchMedia({ title, year, type, page: page - 1 }));
  }
  render() {
    const { title, year } = this.props;
    return (
      <div className='home-container'>
        <h1>Binge Next</h1>
        <p>Find your next binge session</p>
        <div id='search-container'>
          <div className='field-group'>
            <label htmlFor='title-search' className='search-label'>Title:</label>
            <input id='title-search' type='text' placeholder='The Godfather' value={title}
                   onChange={this.updateTitle.bind(this)} onKeyPress={this.handleEnter}/>
          </div>
          <div className='field-group'>
            <label htmlFor='year-search' className='search-label'>Year:</label>
            <input id='year-search' type='text' placeholder='1972' maxLength='4' value={year}
                   onChange={this.updateYear.bind(this)} onKeyPress={this.handleEnter}/>
            <button id='search' onClick={this.handleSearch}>Search</button>
          </div>
          <div className='field-group radio-buttons'>
            <input type='radio' id='movie-type' name='type-group' onChange={this.updateType} value={constants.TYPES.MOVIE}/>
            <label htmlFor='movie-type'>Movies</label>
            <input type='radio' id='series-type' name='type-group' onChange={this.updateType} value={constants.TYPES.SERIES}/>
            <label htmlFor='series-type'>Series</label>
            <input type='radio' id='episode-type' name='type-group' onChange={this.updateType} value={constants.TYPES.EPISODE}/>
            <label htmlFor='episode-type'>Episodes</label>
          </div>
        </div>
        <StatefulSearchResults items={this.props.items}/>
        <Pagination page={this.props.page}
                    pages={this.props.pages}
                    items={this.props.items}
                    nextPage={this.nextPage.bind(this)}
                    previousPage={this.previousPage.bind(this)}
                    specificPage={this.specificPage.bind(this)}/>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    title: state.search.title,
    year: state.search.year,
    type: state.search.type,
    page: state.search.page,
    pages: state.searchResults.pages,
    items: state.searchResults.items,
  }
}

export default connect(mapStateToProps)(Search);
