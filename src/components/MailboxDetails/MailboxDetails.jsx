import { useParams } from 'react-router-dom';
import MailBoxLetters from '/src/components/MailBoxLetters/MailBoxLetters.jsx'

const MailboxDetails = ({ mailboxes, letters }) => {
  const { mailboxId } = useParams();
  const mailbox = mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));
  const selectedLetters = letters.filter((letter) => (
    letter.mailboxId === Number(mailboxId)
  ));

  if (!mailbox) {
    return <div><h1>Mailbox Not Found!</h1></div>;
  }

  return(
    <div className="mail-box">
      <h1>Mailbox {mailbox._id}</h1>
      <h2>Details</h2>
      <p>Boxholder: <span>{mailbox.boxOwner}</span></p>
      <p>Box Size: <span>{mailbox.boxSize}</span></p>
      <MailBoxLetters letters={selectedLetters}/>
    </div>
  );
}
export default MailboxDetails;
