import React from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../Components/PageShell';

function ConfirmationPage({ registration }) {
  return (
    <PageShell title="You're officially registered">
      <p className="confirmation__intro">
        Thank you, <strong>{registration.fullName || 'tech attendee'}</strong>. Your spot at the Tech Innovation Conference is confirmed,
        and your selected ticket ({registration.ticketType}) awaits you in the lounge.
      </p>
      <p className="confirmation__note">
        We sent a confirmation to <strong>{registration.email || 'your inbox'}</strong>. Keep an eye out for updates and the event guide.
      </p>
      <Link className="btn primary" to="/my-registration">
        View submitted registration
      </Link>
    </PageShell>
  )
}

export default ConfirmationPage
