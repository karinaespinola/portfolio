import './styles/styles.css';

function App() {
  return (
    <div className="App">
      <div 
        className="bg-primary h-screen" 
        style={{backgroundImage:"url('/assets/white-waves.svg')", backgroundRepeat: 'no-repeat'}}
      >
          <div className="h-5" />
          <img  src="/assets/star.svg" alt="Cali Espinola" title="Cali Espinola" />
        <div className="container mx-auto relative">
          <div className="absolute top-20">
            <h1 
              className="text-white text-7xl font-bold"
              >
                Karina Espínola
            </h1>
            <h2 
              className="text-white text-4xl"
              style={{fontFamily: ['Fira Mono', 'monospace']}}
            >
              Web Developer
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
