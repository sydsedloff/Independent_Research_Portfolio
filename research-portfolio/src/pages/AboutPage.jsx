function AboutPage() {
  return (
    <div className="single-column">
      <img
        src="https://placehold.co/300x200"
        alt="Mariah Profile"
        className="profile-picture-rectangle"></img>

      <h1>Here's a little about me.</h1>
      <div className="article-body">
        <p>
          Put more stuff here, like a summary of who you are, what kind of work
          you do, a bit about your background, and maybe give a little of your
          personality.
        </p>
        <p>And here's another paragraph</p>
      </div>
      <button className="button">Let's Work Together</button>
    </div>
  )
}

export default AboutPage
