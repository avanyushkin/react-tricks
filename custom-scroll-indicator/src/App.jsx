import {useState, useEffect} from 'react'
import './app.css'

function App() {

  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      const scrolled = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollPercentage(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='scroll-indicator-container'>
        <div
          className='scroll-indicator-bar'
          style={{ width: `${scrollPercentage}%` }}
        />
      </div>  
      <div style={{ height: '2000px', padding: '20px' }}>
        </div>
    </>
  );
}

export default App;