import { menuList } from "../data"
const Nav = () => {
    return ` 
    <ul>
        ${menuList.map(({ path, name }) => `<a href="${path}"> <li>${name}</li></a>`).join("")}
    </ul>
    `
}

export default Nav;
