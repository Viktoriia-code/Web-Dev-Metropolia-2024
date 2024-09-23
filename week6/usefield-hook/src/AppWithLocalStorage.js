import useLocalStorage from './useLocalStorage';

const AppWithLocalStorage = () => {
  const [name, setName] = useLocalStorage('name', '');

  return (
    <div>
      <h2>useLocalStorage hook:</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Your name is stored in localStorage: {name}</p>
    </div>
  );
};

export default AppWithLocalStorage;