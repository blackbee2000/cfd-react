import ProjectList from "./components/ProjectList";

export default function Project(){
    var listProject = [
        {
            nameProject: "Furnitown",
            personProject: "Trần Nghĩa"
        },
        {
            nameProject: "Furnitown",
            personProject: "Trần Nghĩa"
        },
        {
            nameProject: "Furnitown",
            personProject: "Trần Nghĩa"
        },
        {
            nameProject: "Furnitown",
            personProject: "Trần Nghĩa"
        },
        {
            nameProject: "Furnitown",
            personProject: "Trần Nghĩa"
        },
        {
            nameProject: "Furnitown",
            personProject: "Trần Nghĩa"
        },
    ]
    return(
        <main className="projectpage" id="main">
            <ProjectList 
            description = "Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt elementum sem" 
            listProject = {listProject}
            />
        </main>
    )
}