import './styles/styles.css';
import Email from './components/icons/Email';
import LinkedIn from './components/icons/LinkedIn';
import GitHub from './components/icons/GitHub';

function App() {
  return (
    <main>
      <div className="App">
        <div 
          className="bg-primary h-full" 
          style={{backgroundImage:"url('/assets/white-waves.svg')", backgroundRepeat: 'no-repeat'}}
        >
            <div className="h-5" />
            <img  src="/assets/star.svg" alt="Cali Espinola" title="Cali Espinola" />
          <div className="container mx-auto relative grid grid-cols-1 md:grid-cols-12 gap-4 px-2">
            <div className="sm:mt-28 md:col-span-6">
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
              I have been working as a web developer for 7 years now, I have been involved in both front-end and back-end projects. 
              I love the fact that I learn something new every day! It's the best feeling! 
              If you'd like to contact me please feel free to e-mail me or drop me a line through social media :)
              </p>
              <div className="flex items-center mt-5">
                <a 
                  href="mailto:kl.spinolah@gmail.com" 
                  className="mr-3 h-14 w-14 bg-white rounded-full flex items-center justify-center hover:bg-secondary group"
                  aria-label="Email"                
                >
                  <Email classes="text-primary h-10 w-10 group-hover:text-pink-500" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/karina-espinola/" 
                  className="mr-3 h-14 w-14 bg-white rounded-full flex items-center justify-center hover:bg-secondary group"
                  aria-label="LinkedIn"
                >
                  <LinkedIn classes="text-primary h-11 w-11 group-hover:text-pink-500" />
                </a>
                <a 
                  href="https://github.com/karinaespinola"
                  className="mr-3 h-14 w-14 bg-white rounded-full flex items-center justify-center hover:bg-secondary group"
                  aria-label="GitHub"
                >
                  <GitHub classes="text-primary h-10 w-10 group-hover:text-pink-500" />
                </a>
              </div>
            </div>
            <div className="md:col-span-6 flex items-center justify-center">
              <img src="/assets/stars_and_me.png" alt="Karina Espinola" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
