import './Encabezado.css'
import Dropdown from './Menu/Dropdown';
import logo from '/logo.svg'
import items from './data/Items';

const Header = () => {

  return (
    <div className="header">
        <div className='logo-container-h'>
         <a href="http://localhost:5173/" target="_self">
            <img src={logo} className="logo-h" alt="Logo de Ing. G. Villanueva" />
         </a>
         <h1 className="site-name-h">I.G.V.<br/>4-108</h1>
        </div>
        <nav>
        <Dropdown items={items} dropdownTitle="Menú"/>
		    </nav>
      
    </div>
  );
};

export default Header;