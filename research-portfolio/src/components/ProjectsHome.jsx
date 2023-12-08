import "../App.css"

export default function ProjectsHome(props) {
  const importAll = (r) => {
    let images = {}
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item)
    })
    return images
  }
  const images = importAll(require.context("../assets/images", false))

  return (
    <div className="home-grid">
      {props.data.map((item, key) => (
        <div key={key}>
          <div>
            <img
              src={images[`${item.images[0]}`]}
              alt=""
              className="project-pictures"></img>
          </div>
          <div
            style={{
              display: "inline-block",
              verticalAlign: "top",
            }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
