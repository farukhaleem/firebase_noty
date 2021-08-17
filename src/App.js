import './App.css';
import configureNotification from './services/firebaseService';

function App() {
  return (
    <div>
     <h1>hello</h1>
     <button onClick={configureNotification} >Configure Notification</button>
    </div>
  );
}

export default App;
