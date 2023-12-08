import { useRef } from "react"
import emailjs from "@emailjs/browser"

function ContactPage() {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        "service_1pmc99d",
        "mariahs_contact_form",
        form.current,
        "egqjmO1StnVC6BvoN"
      )
      .then(
        (result) => {
          console.log(result.test)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

  return (
    <div className="single-column">
      <h1>Let's work together</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label className="label">
          Email
          <input
            type="email"
            name="email"
            placeholder="email@company.com"
            className="input"
            required
          />
        </label>
        <label className="label">
          Full Name
          <input
            type="text"
            name="fullName"
            placeholder="John Doe"
            className="input"
            required
          />
        </label>
        <label className="label">
          Company Name
          <input
            type="text"
            name="companyName"
            placeholder="Company Inc."
            className="input"
          />
        </label>
        <label className="label">
          Message
          <textarea
            name="message"
            placeholder="Want to collaborate? Tell me a bit more about yourself."
            rows
            className="input"
            required
          />
        </label>
        <button type="submit" value="Send" className="button">
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactPage
