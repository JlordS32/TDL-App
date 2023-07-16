import '../../styles/nav.modules.css';
import LabelIcon from '../../assets/icons/LabelIcon';

const Nav = () => {
  return (
    <div className='nav-container'>
      <div className='nav-icons'>
        <LabelIcon width='25'/>
      </div>
      <div className='nav-icons'>
        <LabelIcon width='25'/>
      </div>
      <div className='nav-icons'>
        <LabelIcon width='25'/>
      </div>
    </div>
  );
}

export default Nav;
