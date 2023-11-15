function ContactPage() {
  return (
    <div className="App">
      <h1>Let's work together</h1>
      <form>
        <label>
          Email
          <input type="text" name="email" placeholder="email@company.com" />
        </label>
        <label>
          Full Name
          <input type="text" name="fullName" placeholder="John Doe" />
        </label>
        <label>
          Company Name
          <input type="text" name="companyName" placeholder="Company Inc." />
        </label>
        <label>
          Message
          <input
            type="text"
            name="message"
            placeholder="Want to collaborate? Tell me a bit more about yourself"
            rows
          />
        </label>
        <button type="submit" value="Submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactPage;
