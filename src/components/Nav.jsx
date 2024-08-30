import { faUserTie, faSearch} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav= () => {
  return (
    <nav className="nav-bar">
        <div className='icon-p'>
          <FontAwesomeIcon icon={faUserTie} style={{ fontSize: '40px' }}/>
          <p> <span style={{fontSize: 45}}>S</span>tudentMilli</p>
        </div>
        <ul>
          <li className="active"><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Pages</a></li>
          <li><a href="#">Contact</a></li>
          <li>
            <FontAwesomeIcon icon={faSearch}/>
          </li>
          <li className='download'>
          <a href='#'>Download Pro Version</a>
          </li>
        </ul>  
    </nav>
  )
}

export default Nav;