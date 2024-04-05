import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; // import useState hook

function App() {
  const [message, setMessage] = useState(''); // state to handle message

  const copyToClipboard = (email) => {
    navigator.clipboard.writeText(email)
      .then(() => setMessage('Email copied to clipboard!')) // success
      .catch(() => setMessage('Failed to copy email!')); // failure
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="standard-text">
          Clever Bear is a software development and consultancy company based in the UK. Please contact us for more information.
        </p>
        <a
          className="App-link"
          href="mailto:alex@cleverbear.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          alex@cleverbear.co.uk
        </a>
        <button className="copy-button" onClick={() => copyToClipboard('alex@cleverbear.co.uk')}>Copy email address</button>
        {message && <p className="standard-text-green">{message}</p>} {/* render message when it's not empty */}
      </header>
    </div>
  );
}

export default App;
