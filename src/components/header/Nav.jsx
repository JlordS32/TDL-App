import { useEffect, useState } from 'react';
import '../../styles/nav.modules.css';

const Nav = () => {

  const [toggle, setToggle] = useState(false);
 
  const handleClick = () => {
    setToggle(true)
  }

  useEffect(() => {
    console.log('Its been toggled');
  }, [toggle])

  return (
    <div className='nav-container'>
      <div>
        <button style={{
        color: 'black'
      }} onClick={() => handleClick()}>Click me</button>
      </div>
      <div className='nav-items' style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div>Folder</div>
        <div>Settings</div>
        <div>Groups</div>
      </div>
    </div>
  );
}

export default Nav;
