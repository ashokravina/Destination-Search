// Write your code here

import './index.css'

const DestinationItem = props => {
  const {placeDetails} = props
  const {name, imgUrl} = placeDetails
  return (
    <li className="card">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <img src={imgUrl} alt="ashok" className="img" />
            <p className="para">{name}</p>
          </div>
        </div>
      </div>
    </li>
  )
}
export default DestinationItem
