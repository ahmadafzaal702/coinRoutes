import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

const NavBar = () => {
    return (
        <nav className={`flex jus items-center p-4 bg-primary border-b-[1px] border-b-grey border-opacity-20`}>
            <div className={`flex-1`}>
                <Link to="/">
                    <img src={logo} alt="Logo" className={'h-10'} />
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
