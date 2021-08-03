import './styles/styles.css';
import Email from './components/icons/Email';
import LinkedIn from './components/icons/LinkedIn';
import GitHub from './components/icons/GitHub';

function App() {
  return (
    <div className="App">
      <div 
        className="bg-primary h-screen" 
        style={{backgroundImage:"url('/assets/white-waves.svg')", backgroundRepeat: 'no-repeat'}}
      >
          <div className="h-5" />
          <img  src="/assets/star.svg" alt="Cali Espinola" title="Cali Espinola" />
        <div className="container mx-auto relative grid grid-cols-2 gap-4">
          <div className="sm:mt-28">
            <h1 
              className="text-white text-7xl font-bold"
              >
                Karina Espínola
            </h1>
            <h2 
              className="text-white text-4xl mt-3"
              style={{fontFamily: ['Fira Mono', 'monospace']}}
            >
              Web Developer
            </h2>
            <p className="text-white mt-3">
            Hello! Welcome to my website, thank you for stopping by :) I'm a web developer located in El Salvador. 
            I have been working as a web developer for 7 years now, I have been involved in front-end and back-end projects. 
            I love the fact that I learn something new every day! It's the best feeling! 
            If you want to contact me please feel free to e-mail me or drop me a line through social media :)
            </p>
            <div className="flex items-center mt-5">
              <a href="mailto:kl.spinolah@gmail.com" className="mr-3">
                <Email classes="text-white h-10 w-10" />
              </a>
              <a href="https://www.linkedin.com/in/karina-espinola/" className="mr-3">
                <LinkedIn classes="text-white h-11 w-11" />
              </a>
              <a href="https://github.com/karinaespinola">
                <GitHub classes="text-white h-10 w-10" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
