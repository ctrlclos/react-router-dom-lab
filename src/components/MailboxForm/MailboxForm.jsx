import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = ({addBox}) => {
  const navigate = useNavigate();

  const [mailBoxFormData, setMailBoxFormData] = useState({
    boxSize: "",
    boxOwner: "",
  });

  const handleMailBoxFormChange = (event) => {
    const {name, value} = event.target;
    setMailBoxFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleMailBoxFormSubmission = (event) => {
    event.preventDefault();
    addBox(mailBoxFormData)
    console.log('Submitted!');
    navigate('/mailboxes');
  }
  return(
    <form onSubmit={handleMailBoxFormSubmission}>
      <div>
        <select name="boxSize" value={mailBoxFormData.boxSize} onChange={handleMailBoxFormChange}>
          <option value="">Select a size</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

        <input type="text"
          name="boxOwner"
          placeholder="Box Owner"
          value={mailBoxFormData.boxOwner}
          onChange={handleMailBoxFormChange}
        />

        <button type='submit'>
          Add Mailbox
        </button>
      </div>
    </form>
  );
}

export default MailboxForm;
