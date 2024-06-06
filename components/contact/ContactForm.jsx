import React from 'react'
import classes from './ContactFrom.module.css'
import Notification from '../ui/notification'
import { useRouter } from 'next/router'
async function fetcher(userMessageDetails) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(userMessageDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error('Failed to post message!')
  }
}

export default function ContactForm() {
  const [fetchStatus, setFetchStatus] = React.useState(null) // pending , success , error
  const [notificationMessage, setNotificationMessage] = React.useState('')
  const email = React.useRef()
  const name = React.useRef()
  const message = React.useRef()

  const router = useRouter()

  async function handleSubmit(event) {
    event.preventDefault()
    setFetchStatus('pending')
    setNotificationMessage('Loading...')
    // add client side validation if you want

    const bodyContent = {
      email: email.current.value,
      name: name.current.value,
      message: message.current.value,
    }
    try {
      await fetcher(bodyContent)
      setFetchStatus('success')
      setNotificationMessage('Feedback sent Successfully')
      email.current.value = ''
      name.current.value = ''
      message.current.value = ''
      router.push('/')
    } catch (err) {
      setFetchStatus('error')
      setNotificationMessage('Something went wrong, please try again later!')
      throw new Error(err.message || 'something failed!')
    }
  }
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setFetchStatus(null)
      console.log(fetchStatus)
    }, 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [fetchStatus])

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input
              ref={email}
              type='email'
              id='email'
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input
              ref={name}
              type='text'
              id='name'
              required
            />
          </div>

          <div className={classes.control}>
            <label htmlFor='message'>Your Message</label>
            <textarea
              ref={message}
              name='message'
              id='message'
              rows={5}
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button>Send Message</button>
          </div>
        </div>
      </form>
      {(fetchStatus === 'success' || fetchStatus === 'error') && (
        // even though this element is rendered in a portal outside ROOT, we can still use it here. WOW
        <Notification
          title={fetchStatus}
          message={notificationMessage}
          status={fetchStatus}
        />
      )}
    </section>
  )
}
