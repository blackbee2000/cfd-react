import ProjectItem from "../ProjectItem"

export default function ProjectList({description, listProject}){
    return(
        <section className="section-1">
        <div className="container">
          <h2 className="main-title">dự án</h2>
          <p className="top-des">
            {description}
          </p>
          <div className="list row">
              {
                listProject.map((o, i) => (
                   <ProjectItem key={i} nameProject = {o.nameProject} personProject = {o.personProject}/>
                ))
              };
          </div>
          <div className="bottom">
            <div className="btn overlay round btn-more">
              tải thêm
            </div>
          </div>
        </div>
      </section>
    )
}