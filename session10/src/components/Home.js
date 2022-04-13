import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Welcome to my project - Home Page</h1>
            <ul>
                <li>
                    <NavLink to="/auth">Authentication</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Home;