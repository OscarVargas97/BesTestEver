import logo from './logo.svg';
import './App.css';

const Li = ({ children }, estado) => {
  return (
    <li>{children}</li>
  )
}

const App = () => {
  const valor = 'triste'
  return (
    <Li estado="feliz">valor de li</Li>
  );
}

export default App;
