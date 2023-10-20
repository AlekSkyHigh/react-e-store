import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

  const [results, setResults] = React.useState([])

  React.useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setResults(data);
      })
  }, [])

  return (
    <React.Fragment>
      <header>My store</header>

      <section>
        <nav>
          {results.map(d => (<div key={d.id}>{d.title}</div>))}
        </nav>
        <article>Main Area</article>
      </section>

      <footer>
        Footer
      </footer>

    </React.Fragment>
  );
}

export default App;
