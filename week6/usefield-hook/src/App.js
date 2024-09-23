import AppWithLocalStorage from './AppWithLocalStorage';
import AppWithCustomHook from './AppWithCustomHook';
import './App.css';

const App = () => {

  return (
    <div className='app-container'>
      <AppWithCustomHook />
      <AppWithLocalStorage />
    </div>
  );
};

export default App;