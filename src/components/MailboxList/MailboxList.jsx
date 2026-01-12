import { Link } from 'react-router-dom';

const MailboxList = ({mailboxes}) => {
  return(
    <>
      <h1>Mailboxes</h1>
      {mailboxes.length === 0 ? (
        <p>No mailboxes available</p>
      ) : (
        <ul>
          {mailboxes.map((mailbox) => (
            <li key={mailbox._id}>
              <Link to={`/mailboxes/${mailbox._id}`} className="mail-box">
                Mailbox {mailbox._id}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default MailboxList;
