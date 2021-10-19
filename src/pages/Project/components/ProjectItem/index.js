export default function ProjectItem({nameProject, personProject}){
    return(
        <a href="#" className="item col-md-6">
              <div className="wrap">
                <div className="cover">
                  <img src="img/project/project (1).jpg" alt="" />
                </div>
                <div className="info">
                  <div className="name">{nameProject}</div>
                  <div className="makeby">Hoàn thành với {personProject} </div>
                </div>
              </div>
        </a>
    )
}