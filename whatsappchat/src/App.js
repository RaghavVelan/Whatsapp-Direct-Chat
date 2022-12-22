import {useState} from 'react';
import logo from './img/whatsapp-black-icon.png'



function App() {
  
  const [number, setNumber] = useState('');

  const url = `https://api.whatsapp.com/send?phone=91${number}`;

  const handleChange = event => {
    setNumber(event.target.value);
  }
  
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      sendfunc();
    }
  };

  function sendfunc(){
  window.open(url);
  }

  function waweb(){
    const waweburl = `https://web.whatsapp.com/`;
    window.open(waweburl);
  }

  return (
    <div className="App">
      <header>
        <div className='head'><img className='logo' src={logo} alt="logo" />
        <h1 className='title'>Whatsapp Direct Chat</h1></div>
      </header>
      <section>
        <div className='main'>
        <label htmlFor="ph_no">Enter the Whatsapp Number without country code</label> <br />
        <input type="tel" name="phone_number" id="ph_no" placeholder='whatsapp number' onChange={handleChange} value={number} onKeyDown={handleKeyDown} /> <br />
        <button onClick={sendfunc} className='send-btn btn'>Send Message</button>
        </div>
        <div className='waweb'>
          <button onClick={waweb} className='waweb-btn btn'>Try Whatsapp Web</button>
        </div>
      </section>
      <footer className='footer'>
        <p>Developed by RV</p>
      </footer>
    </div>
  );
}

export default App;
