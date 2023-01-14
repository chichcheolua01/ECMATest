import ProjectItem from "./ProjectItem"

const ProjectList = ({ data }) => {
    return `
    ${data.map((project) => {
        return ` ${ProjectItem({ project })}`
    }).join("")}
`
}

export default ProjectList