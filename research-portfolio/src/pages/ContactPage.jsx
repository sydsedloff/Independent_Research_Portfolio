function ContactPage() {
  return (
    <div className="single-column">
      <h1>Let's work together</h1>
      <form>
        <label className="label">
          Email
          <input
            type="text"
            name="email"
            placeholder="email@company.com"
            className="input"
          />
        </label>
        <label className="label">
          Full Name
          <input
            type="text"
            name="fullName"
            placeholder="John Doe"
            className="input"
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
            placeholder="Want to collaborate? Tell me a bit more about yourself"
            rows
            className="input"
          />
        </label>
        <button type="submit" value="Submit" className="button">
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactPage
