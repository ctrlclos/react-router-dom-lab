// Within NavBar.jsx, import Link from react-router and create a <Link> for each destination in the table below:

// Destination	to	Text Content
// Home	/	Home
// MailboxList	/mailboxes	Mailboxes
// MailboxForm	/new-mailbox	New Mailbox
import { Link } from 'react-router-dom';

const Navbar = () => {
  return(
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/mailboxes'>Mailboxes</Link></li>
        <li><Link to='/new-mailbox'>New Mailbox</Link></li>
        <li><Link to='/new-letter'>New Letter</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;
