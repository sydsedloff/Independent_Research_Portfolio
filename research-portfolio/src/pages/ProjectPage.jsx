function ProjectPage() {
  return (
    <div className="App">
      <h1>Projects</h1>
      {/* BUTTONS NEED CONDITIONAL STYLING */}
      <div className="filter-container">
        <div className="filter-buttons">all</div>
        <div className="filter-buttons">motion graphic design</div>
        <div className="filter-buttons">2d animation</div>
        <div className="filter-buttons">3d modeling</div>
      </div>
      <div>
        {/* PLACEHOLDER. THIS WILL BE A REACT COMPONENT */}
        <img
          src="https://placehold.co/300x200"
          alt="Project"
          className="project-pictures"
        ></img>
        <p>Project Name</p>
      </div>
    </div>
  );
}

export default ProjectPage;
