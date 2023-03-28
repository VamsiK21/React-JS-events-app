// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {imageUrl, name, location, id} = eventDetails

  const onClickEventCard = () => {
    setActiveEventId(id)
  }

  const eventImageClassName = isActive ? 'active event-img' : 'event-img'

  return (
    <li className="item-container">
      <button className="btn-event" type="button" onClick={onClickEventCard}>
        <img className={eventImageClassName} src={imageUrl} alt="event" />
      </button>
      <p className="event-heading">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
