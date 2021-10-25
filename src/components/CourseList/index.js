import CourseItem from "../CourseItem"

export function CourseList({title, description, smallTitle, name, list}){
    return(
        <section className="section-courseoffline">
            <div className="container">
                {
                    title ? (<h2 class="main-title">{title}</h2>) :null
                }
                {
                    description ? (
                        <p className="top-des">
                            {description}
                        </p>
                    )
                    : null
                }
                <div className="textbox">
                    { 
                        smallTitle ? (<h3 className="sub-title">{smallTitle}</h3>) : null
                    }
                    <h2 className="main-title">{name}</h2>
                </div>
                <div className="list row">
                    {list.map((o, i) => (
                        <CourseItem key={i} {...o} />
                    ))};
                </div>
            </div>
      </section>
    )
}