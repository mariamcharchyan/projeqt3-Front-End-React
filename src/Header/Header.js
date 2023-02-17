
// import toyslogo from './nkar/logo2.png';
// import zambyux1 from './nkar/zambyux1.png';
import {Link } from 'react-router-dom';

export default function Header({count}) {
return(
    <><header className="App-header">
        <div className="nav_Bar">
            <div className="nav_Bar_Left">
                <div className="nav-Left_Items">
                    <div className="nav-img">
                        <img src='./nkar/logo2.png' className="brand-logo" alt="Logo"/>
                    </div>
                    <div className="nav-Left-Text">
                        <Link to="/" className="link">Home</Link>
                        <Link to="shop" className="link">Shop</Link>
                        <Link to="#" className="link">Blog</Link>
                        <Link to="aboute" className="link">About</Link>
                        <Link to="#" className="link">Contact</Link>
                    </div>
                </div>
            </div>
            <div className="nav_Bar_Right">
                <div className="nav-Right_Items">
                    <div className="nav-Right-Text">
                        <a href="#" className="link">Subscribe</a>
                        <a href="#" className="link">FAQ</a>
                    </div>
                    <div className="nav-Right_Input">
                        <input  className="search-box" type="text"  placeholder="Search"/>
                    </div>
                    <div className="nac_basket-img">
                        <img src='./nkar/zambyux1.png' className="basket-img" alt=""/>
                        <div id="zambyux">{count}</div>
                    </div>
                </div>
            </div>
        </div>
        </header>
    </>
);
}