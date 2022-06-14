import './styles/styles.css';
import SideBar from './components/SideBar';

function App() {
  return (
    <main>
      <div className="App">
        <div 
          className="bg-primary h-full flex" 
          style={{backgroundImage:"url('/assets/white-waves.svg')", backgroundRepeat: 'no-repeat'}}
        >
            <SideBar />
          <div className="container mx-auto relative grid grid-cols-1 md:grid-cols-12 gap-4 px-2">
            <div className="sm:mt-28 md:col-span-5">
              <div className="slideEffect">
                <h1 
                  className="text-white text-7xl font-bold slideElement slideLeft"
                  >
                    Karina Espínola
                </h1>
              </div>
              <div className="slideEffect">
                <h2 
                  className="text-white text-4xl mt-3 slideElement slideLeft"
                  style={{fontFamily: ['Fira Mono', 'monospace'], animationDelay: '0.5s'}}
                >
                  Web Developer
                </h2>
              </div>
              <div className="slideEffect">
                <p className="slideElement slideUp text-white mt-3">
                Hello! Welcome to my website, thank you for stopping by :) I'm a web developer located in El Salvador. 
                I have been working as a web developer for 7 years now, I have been involved in both front-end and back-end projects. 
                I love the fact that I learn something new every day! It's the best feeling! 
                If you'd like to contact me please feel free to e-mail me or drop me a line through social media :)
                </p>
              </div>

            </div>
            <div className="md:col-span-6 flex items-center justify-center">
              <div className="slideEffect">
                <img className="slideElement slideUp" src="/assets/stars_and_me.png" alt="Karina Espinola" />
              </div>              
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
