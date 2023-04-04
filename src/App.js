

function App() {
  return (
    <div className="App">
      <div id="display">0</div>
      <div id="buttons-container">
        <button className="operator" id="add">+</button>
        <button className="operator" id="subtract">-</button>
        <button className="operator" id="multiply">x</button>
        <button className="operator" id="divide">/</button>
        <button id="seven">7</button>
        <button id="eight">8</button>
        <button id="nine">9</button>
        <button id="four">4</button>
        <button id="five">5</button>
        <button id="six">6</button>
        <button id="one">1</button>
        <button id="two">2</button>
        <button id="three">3</button>
        <button id="zero">0</button>
        <button id="decimal">.</button>
        <button id="clear">AC</button>
        <button id="equals">=</button>
      </div>
    </div>
  );
}

export default App;
