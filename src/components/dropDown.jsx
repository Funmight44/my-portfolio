import { Link } from "react-router-dom";

const Dropdown = ({setShowdropdown}) => {
    return ( 
        <div id="dropdownAvatar" className="select-none	absolute top-14  left-1/2 z-10  transform-translate-x-1/2 w-32 text-center bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
            <ul onClick={() => setShowdropdown(false)} className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                <li>
                    <Link to="/cssProjects" className="block py-2 px-4 hover:bg-purple-300  dark:hover:text-white">html/css</Link>
                </li>
                <li>
                    <Link to="/javascript" className="block py-2 px-4 hover:bg-purple-300  dark:hover:text-white">Javascript</Link>
                </li>
                <li>
                    <Link to="/reactPro"  className="block py-2 px-4 hover:bg-purple-300  dark:hover:text-white">React.js</Link>
                </li>
            </ul>
        </div>
     );
}
 
export default Dropdown;