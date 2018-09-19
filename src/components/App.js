import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../styles/App.css'
// pull in actions from actions/index
import { fetchingData } from '../actions'

class App extends Component {
  componentDidMount() {
    // call our action
    this.props.fetchingData()
  }
  render() {
    return (
      <div className="App">
        {/* {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.chars.map(char => {
              return <li key={char.name}>{char.name}</li>
            })}
          </ul>
        )} */}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  chars: state.charsReducer.chars,
  fetching: state.charsReducer.fetching,
  fetched: state.charsReducer.fetching,
  null: state.charsReducer.fetching,
})

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapStateToProps, {
  /* actions go here */
  fetchingData
})(App)
