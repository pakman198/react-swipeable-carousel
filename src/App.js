import logo from './logo.svg';
import image1 from './img/markus-spiske-b6NTA4OtSwQ-unsplash.jpg';
import image2 from "./img/markus-winkler-LcaMfWaN28k-unsplash.jpg";
import image3 from "./img/yousef-espanioly-9SMoAjhV4Dw-unsplash.jpg";
import './App.css';

import { Carousel } from './Carousel/Carousel';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Swipeable Carousel</h1>
      </header>

      <div className="carousel">
      <Carousel>
        <div
          className="slide"
          style={{ backgroundImage: `url(${image1})` }}
        />
        <div
          className="slide"
          style={{ backgroundImage: `url(${image2})` }}
        />
        <div
          className="slide"
          style={{ backgroundImage: `url(${image3})` }}
        />
      </Carousel>
      </div>
    </div>
  );
}

export default App;
