import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LetterForm = ({ addLetter, mailboxes }) => {
  const navigate = useNavigate();

  const [letterFormData, setLetterFormData] = useState({
    mailboxId: "",
    recipient: "",
    message: "",
  });

  const handleLetterFormChange = (event) => {
    const { name, value } = event.target;
    setLetterFormData((prev) => ({
      ...prev,
      [name]: name === 'mailboxId' ? Number(value) : value,
    }))
  }

  const handleLetterFormSubmission = (event) => {
    event.preventDefault();
    addLetter(letterFormData);
    navigate(`/mailboxes/${letterFormData.mailboxId}`);
  }

  return(
    <form onSubmit={handleLetterFormSubmission}>
      <div>
        <select name="mailboxId" value={letterFormData.mailboxId} onChange={handleLetterFormChange}>
          <option value="">Select a mailbox</option>
          {mailboxes.map((mailbox) => (
            <option key={mailbox._id} value={mailbox._id}>
              {mailbox._id} - {mailbox.boxOwner}
            </option>
          ))}
        </select>

        <input type="text"
          name="recipient"
          placeholder="Recipient Name"
          value={letterFormData.recipient}
          onChange={handleLetterFormChange}
        />

        <textarea
          name="message"
          placeholder="Message"
          value={letterFormData.message}
          onChange={handleLetterFormChange}
        ></textarea>

        <button type='submit'>
          Send Letter
        </button>
      </div>
    </form>
  );
}

export default LetterForm;
