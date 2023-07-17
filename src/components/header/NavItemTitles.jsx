import '../../styles/nav.modules.css';

const NavItemTitles = ({ onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className='icon-title'
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
    >
      <div className='icon-title-wrapper'>
        <div>Folder</div>
        <div>Test</div>
        <div>Test</div>
      </div>
    </div>
  );
};

export default NavItemTitles;
