import logo from './logo.svg';
import './App.css';
import {getPictureOfTheDay} from "./api";
import {useEffect, useState} from "react";

function App() {
  // useState in order to save state in our app

  // pod = picture of the day
  const [pod, setPod] = useState(null);

  // useEffect is a hook
  // useEffect is function
  // useEffect takes two parameters - first is a function that will happen when the effect triggers
  // second param is the dependency array
  // dependency array tells the effect hook when to run
  useEffect(() => {
    // useEffect hooks cannot call out to async calls directly
    const getImage = async () => {
      const response = await getPictureOfTheDay();
      console.log("Parsed response body:", response);

      setPod(response);

      // js here
      // put this data into HTML via JS
      // H1 and some p tags to display data
      // image tag with src
    }

    getImage();
  }, []);

  // h1, p, and img src need to be dynamic AKA using variables instead of just strings

  console.log("Picture of the day", pod);

  return (
      <div>
          {
              pod ?
                  <h1>{pod.title}</h1>
                  :
                  <h1>Loading...</h1>
          }
        {/*<p>Because the Gum Nebula is the closest supernova remnant, it is actually hard to see.  Spanning 40 degrees across the sky, the nebula appears so large and faint that it is easily lost in the din of a bright and complex background.  The Gum Nebula is highlighted nicely in red emission toward the right of the featured wide-angle, single-image photograph taken in late May. Also visible in the frame are the Atacama Desert in Chile in the foreground, the Carina Nebula in the plane of our Milky Way galaxy running diagonally down from the upper left, and the neighboring Large Magellanic Cloud (LMC) galaxy. The Gum Nebula is so close that we are much nearer the front edge than the back edge, each measuring 450 and 1500 light years respectively.  The complicated nebula lies in the direction of the constellations of Puppis and Vela.  Oddly, much remains unknown about the Gum Nebula, including the timing and even number of supernova explosions that formed it.</p>*/}
        {/*<img src={"https://apod.nasa.gov/apod/image/2211/Gum_Lima_1365.jpg"} alt={"NASA APOD"}/>*/}
      </div>
  );
}

export default App;
