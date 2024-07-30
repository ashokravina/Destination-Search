import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  OnSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const lowerCaseInput = searchInput.toLowerCase()
    const filterdSearchInput = destinationsList.filter(eachUser =>
      eachUser.name.includes(lowerCaseInput),
    )
    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-container">
          <div>
            <input
              type="search"
              placeholder="Search"
              className="searchinput"
              onChange={this.OnSearchInput}
            />
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
        </div>
        <ul className="places-container">
          {filterdSearchInput.map(eachUser => (
            <DestinationItem placeDetails={eachUser} key={eachUser.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
