import './App.css';
import Card from './Card';
function App() {
  return (
    <div className="App">
      <h3>Calorie Counter</h3>
    <div className="container">
      <Card name="Sandwich" value="100"/>
      <Card name="Coke" value="200"/>
      <Card name="Burger" value="300"/>
      <Card name="Pizza" value="500"/>
    </div>
    </div>
  );
}

export default App;
