const MailBoxLetters = ({ letters }) => {
  if (letters.length === 0) {
    return <div><p>No letters yet</p></div>;
  }

  return(
    <div>
      <h2>Letters</h2>
      {letters.map((letter) => (
        <div key={letter._id}>
          <h3>Letter from {letter.recipient}</h3>
          <p>{letter.message}</p>
        </div>
      ))}
    </div>
  );
}

export default MailBoxLetters;
