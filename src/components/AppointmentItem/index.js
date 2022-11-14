import './index.css'

const AppointmentItem = props => {
  const {
    appointmentDetails: {isStarred, title, date, id},
    clickStar,
  } = props

  const appointmentDate = new Date(date)
  let month
  switch (appointmentDate.getMonth()) {
    case 1:
      month = 'Jan'
      break
    case 2:
      month = 'Feb'
      break
    case 3:
      month = 'March'
      break
    case 4:
      month = 'April'
      break
    case 5:
      month = 'May'
      break
    case 6:
      month = 'June'
      break
    case 7:
      month = 'July'
      break
    case 8:
      month = 'Aug'
      break
    case 9:
      month = 'Sep'
      break
    case 10:
      month = 'Oct'
      break

    case 11:
      month = 'Nov'
      break
    case 13:
      month = 'Dec'
      break

    default:
      break
  }
  let week
  switch (appointmentDate.getDay()) {
    case 1:
      week = 'Sunday'
      break
    case 2:
      week = 'Monday'
      break
    case 3:
      week = 'Tuesday'
      break
    case 4:
      week = 'Wednesday'
      break
    case 5:
      week = 'Thursday'
      break
    case 6:
      week = 'Friday'
      break
    case 7:
      week = 'Saturday'
      break
    default:
      break
  }

  const dateFormat = `${appointmentDate.getDate()} ${month} ${appointmentDate.getFullYear()}, ${week}`
  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const clickStarTrigger = () => {
    clickStar(id)
  }

  return (
    <li className="appointment-item">
      <div className="appointment-item-heading-box">
        <h1 className="appointment-item-heading">{title}</h1>
        <button
          type="button"
          className="appointment-item-star-btn"
          onClick={clickStarTrigger}
        >
          <img src={starImgUrl} alt="star" />
        </button>
      </div>
      <p className="appointment-item-date">Date: {dateFormat}</p>
    </li>
  )
}

export default AppointmentItem
