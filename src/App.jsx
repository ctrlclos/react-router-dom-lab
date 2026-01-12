// src/App.jsx
import MailboxDetails from '/src/components/MailboxDetails/MailboxDetails.jsx'
import MailboxForm from '/src/components/MailboxForm/MailboxForm.jsx'
import MailboxList from '/src/components/MailboxList/MailboxList.jsx'
import LetterForm from '/src/components/LetterForm/LetterForm.jsx'
import Navbar from '/src/components/Navbar/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react';


const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);

  const addBox = (mailBoxFormData) => {
    // accept form data for a new mailbox
    //  and setMailboxes state accordingly.
    const newMailBox = {
      _id: mailboxes.length + 1,
      ...mailBoxFormData
    };
    setMailboxes([...mailboxes, newMailBox])
  }

  const addLetter = (letterFormData) => {
    const newLetter = {
      _id: letters.length + 1,
      ...letterFormData
    }
    setLetters([...letters, newLetter]);
  }

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<main><h1>Post Office</h1></main>} />
      <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes} />} />
      <Route path='/new-mailbox' element={<MailboxForm addBox={addBox} />} />
      <Route path='/new-letter' element={<LetterForm addLetter={addLetter} mailboxes={mailboxes} />} />
      <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes} letters={letters} />} />
    </Routes>
    </>
  )
};

export default App;
