import { NavLink } from "react-router-dom";
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="left-aria">
                <h2>Contact</h2>
                <ul className="box">
                    <li>Kara-Balta, KG</li>
                    <li>0554-07-01-26</li>
                    <li>0704-15-09-06</li>
                </ul>
            </div>
            <ul className="right-aria">
                <li className="link-aria">
                    <h2>Useful Link</h2>

                    <ul className="box h-box">
                    <li><NavLink to="home">Home</NavLink></li>
                    <li><NavLink to="/movies">films</NavLink></li>
                    <li><NavLink to="/SignIn">Sign In</NavLink></li>
                    <li><NavLink to="/SignUp">Sign Up</NavLink></li>
                    </ul>
                </li>

                <li>
                    <h2>Recent Post</h2>
                    <ul className="box">
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                    </ul>
                </li>

                <li>
                    <h2>Newletter</h2>
                    <form action="" className="form-search">
                        <div className="search-box">
                            <input type="text" name="" id="" />
                            <button className="btn" type="submit">Search</button>
                        </div>
                    </form>

                    <div className="socials">
                    <a><i className="fa fa-facebook"></i></a>
                    <a><i className="fa fa-twitter"></i></a>
                    <a><i className="fa fa-dribble"></i></a>
                    <a><i className="fa fa-youtube"></i></a>
                    <a><i className="fa fa-tumblr"></i></a>
                    </div>
                </li>
            </ul>

            <div className="footer-button">
                <img src="logo.png" alt="" />
                <p>All Right reserved by &copy; creativo 2023</p>
            </div>

            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLxiZP5-HeMYFvrOHKiye9yYZy5sTeuSlOEg&usqp=CAU"/> */}
        </div>
    )
}

export default Footer;