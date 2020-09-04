import React from 'react';
import './App.css';

function App() {
  // TODO: for-loop rendering
  // 用<Route> 去Render
  return (
    <div className="App">
      <a href="tech-articles/golang/first-go-lang.html">first-go-lang</a>
      <a href="tech-articles/golang/second-go-lang.html">second-go-lang</a>
      <a href="tech-articles/angular/angular1.html">angular -1</a>
      <a href="tech-articles/angular/angular2">angular -2</a>
    </div>
  );
}

export default App;
