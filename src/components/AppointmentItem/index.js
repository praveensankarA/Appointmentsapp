// Write your code here
import './index.css'

const AppointmentList = props => {
  const {val, fav} = props

  const favouriteList = () => {
    fav(val.id)
  }
  const imgUrl = !val.isFav
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'

  return (
    <li className="list-element">
      <div className="list-ele-name-container">
        <p className="list-ele-name">{val.titel}</p>
        <button data-testid="star" type="button" onClick={favouriteList}>
          <img src={imgUrl} className="list-ele-star" alt="star" />
        </button>
      </div>
      <p className="list-ele-time">Date: {val.day}</p>
    </li>
  )
}

export default AppointmentList
