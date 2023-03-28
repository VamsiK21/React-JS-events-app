// Write your code here
import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistrationStatus} = props

  const renderYetToRegisterPage = () => (
    <div className="view-container">
      <img
        className="yet-to-register-img"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p className="yet-to-register-text">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button className="button-register" type="button">
        Register Here
      </button>
    </div>
  )

  const renderRegisteredPage = () => (
    <div className="view-container">
      <img
        className="registered-img"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1 className="success-text">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderRegistrationsClosedPage = () => (
    <div className="view-container">
      <img
        className="closed-img"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt=" registrations closed"
      />
      <h1 className="closed-text">Registrations Are Closed Now!</h1>
      <p className="alert-text">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderInitialTextPage = () => (
    <>
      <p className="status-text">
        Click on an event, to view its registration details
      </p>
    </>
  )

  const renderActiveEventRegistrationDetails = () => {
    switch (activeEventRegistrationStatus) {
      case registrationStatus.yetToRegister:
        return renderYetToRegisterPage()
      case registrationStatus.registered:
        return renderRegisteredPage()
      case registrationStatus.registrationsClosed:
        return renderRegistrationsClosedPage()
      default:
        return renderInitialTextPage()
    }
  }

  return (
    <div className="registration-status-container">
      {renderActiveEventRegistrationDetails()}
    </div>
  )
}

export default ActiveEventRegistrationDetails
