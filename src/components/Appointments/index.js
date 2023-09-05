// Write your code here
import {Component} from 'react'
import {format} from 'date-fns'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import AppointmentList from '../AppointmentItem'

class Appointments extends Component {
  state = {
    title: '',
    date: '',
    stardBtn: false,
    appoinments: [
      //   {
      //     id: uuidv4(),
      //     titel: 'Html',
      //     day: format(new Date('08/25/2023'), 'dd MMMM yyyy,EEEE'),
      //     isFav: false,
      //   },
      //   {
      //     id: uuidv4(),
      //     titel: 'css',
      //     day: format(new Date('08/25/2023'), 'dd MMMM yyyy,EEEE'),
      //     isFav: false,
      //   },
      //   {
      //     id: uuidv4(),
      //     titel: 'js',
      //     day: format(new Date('08/25/2023'), 'dd MMMM yyyy,EEEE'),
      //     isFav: false,
      //   },
      //   {
      //     id: uuidv4(),
      //     titel: 'sql',
      //     day: format(new Date('08/25/2023'), 'dd MMMM yyyy,EEEE'),
      //     isFav: false,
      //   },
      //   {
      //     id: uuidv4(),
      //     titel: 'python',
      //     day: format(new Date('08/25/2023'), 'dd MMMM yyyy,EEEE'),
      //     isFav: false,
      //   },
    ],
  }

  titleOnchangeFunction = event => {
    this.setState({title: event.target.value})
  }

  dateOnchangeFunction = event => {
    this.setState({date: event.target.value})
  }

  onSubmitEvent = event => {
    event.preventDefault()
    const {appoinments, title, stardBtn, date} = this.state
    const dateValue = date ? format(new Date(date), 'dd MMMM yyyy, EEEE') : ''

    const newObj = {
      id: uuidv4(),
      titel: title,
      day: dateValue,
      isFav: false,
    }

    this.setState({
      appoinments: [...appoinments, newObj],
      title: '',
      date: '',
    })
  }

  addFavourite = id => {
    const {appoinments, title, date} = this.state
    const newList = appoinments.map(each => {
      if (each.id === id) {
        return {...each, isFav: !each.isFav}
      }
      return each
    })
    this.setState({appoinments: newList})
  }

  FavFilterdList = () => {
    const {appoinments, title, stardBtn, date} = this.state

    this.setState({stardBtn: !stardBtn})
  }

  render() {
    const {appoinments, stardBtn, title, date} = this.state
    const staredBtnClassName = stardBtn
      ? 'Appointments-star-btn-s'
      : 'Appointments-star-btn'
    const appoinmentsT = stardBtn
      ? appoinments.filter(each => each.isFav === true)
      : appoinments

    console.log(title)
    console.log(date)
    return (
      <div className="bg-container">
        <div className="main-card-container">
          <div className="first-card-container">
            <form onSubmit={this.onSubmitEvent} className="input-container">
              <h1 className="main-titel">Add Appointment</h1>
              <label htmlFor="name" className="title-input-label ">
                TITLE
              </label>
              <input
                value={title}
                onChange={this.titleOnchangeFunction}
                type="text"
                placeholder="Title"
                className="title-input"
                id="name"
              />
              <label htmlFor="date" className="title-input-label">
                DATE
              </label>
              <input
                value={date}
                onChange={this.dateOnchangeFunction}
                type="date"
                id="date"
                className="title-input"
              />
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt=" appointments"
              className="appointment-img"
            />
          </div>
          <hr className="line" />
          <div className="Appointments-title-container">
            <h1 className="Appointments-title">Appointments</h1>
            <button
              onClick={this.FavFilterdList}
              className={staredBtnClassName}
              type="button"
            >
              Starred
            </button>
          </div>
          <ul className="Appointment-list-container">
            {appoinmentsT.map(each => (
              <AppointmentList
                fav={this.addFavourite}
                key={each.id}
                val={each}
              />
            ))}
          </ul>
        </div>
        <a
          className="a"
          href="https://learning.ccbp.in/ide-coding-submission/e9112781-e431-40f4-8d0a-d4bb4fa35403/54037cb0-7ce6-4845-bd0a-3620f9e4bcdd"
        >
          View The testCases for the above project
        </a>
      </div>
    )
  }
}

export default Appointments
