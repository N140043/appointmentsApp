import './index.css'

import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

const dateAt = new Date(2023, 9, 13)
const initialAppointmentsList = [
  {
    id: uuidv4(),
    title: 'My love',
    date: dateAt,
    isStarred: true,
  },
  {
    id: uuidv4(),
    title: 'React Discussion',
    date: dateAt,
    isStarred: false,
  },
]
class Appointments extends Component {
  state = {
    appointmentsList: [],
    title: '',
    date: '',
    displayStarred: false,
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isStarred: false,
    }
    if (title.length !== 0 && date !== undefined) {
      this.setState(prev => ({
        appointmentsList: [...prev.appointmentsList, newAppointment],
        title: '',
        date: '',
      }))
    }
  }

  onChangeDateInput = event => {
    this.setState({date: event.target.value})
  }

  onChangeTitleInput = event => {
    this.setState({title: event.target.value})
  }

  onChangeDisplayStarred = () => {
    this.setState(prev => ({
      displayStarred: !prev.displayStarred,
    }))
  }

  clickStar = id => {
    const {appointmentsList} = this.state
    const updateList = appointmentsList.map(each => {
      if (each.id === id) {
        return {...each, isStarred: !each.isStarred}
      }
      return each
    })
    this.setState({appointmentsList: updateList})
  }

  filterAppointmentsList = () => {
    const {appointmentsList} = this.state
    const filterdAppointmentsList = appointmentsList.filter(
      each => each.isStarred,
    )
    return filterdAppointmentsList
  }

  render() {
    const {appointmentsList, title, date, displayStarred} = this.state
    const filterdAppointments = displayStarred
      ? this.filterAppointmentsList()
      : appointmentsList

    return (
      <div className="home">
        <div className="appointments-container">
          <h1 className="appointments-heading">Add Appointment</h1>
          <div className="appointments-top-container">
            <form
              className="appointment-form-container"
              onSubmit={this.onAddAppointment}
            >
              <label htmlFor="title" className="label-input">
                TITLE
              </label>
              <input
                type="text"
                placeholder="Title"
                className="title-input"
                value={title}
                onChange={this.onChangeTitleInput}
                id="title"
              />
              <label htmlFor="date-time" className="label-input">
                DATE
              </label>
              <input
                type="date"
                id="date-time"
                className="date-input"
                value={date}
                onChange={this.onChangeDateInput}
              />
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="appointments-image"
            />
          </div>
          <div className="appointments-bottom-container">
            <div className="appointments-heading-bar">
              <h1 className="heading-bottom">Appointments</h1>
              <button
                type="button"
                className="star-btn"
                onClick={this.onChangeDisplayStarred}
              >
                Starred
              </button>
            </div>
            <ul className="appointment-container">
              {filterdAppointments.map(each => (
                <AppointmentItem
                  appointmentDetails={each}
                  key={each.id}
                  clickStar={this.clickStar}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
