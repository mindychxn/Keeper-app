import './Header.css';
import Note from '../svg/note-sticky-regular.svg';

function Header() {
  return (
    <div className="header">
      <img src={Note} className="note-icon"/>
      <h1>Keeper</h1>
    </div>
  )
}

export default Header;