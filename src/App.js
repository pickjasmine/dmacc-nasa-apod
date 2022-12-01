import './App.css';
import {getPictureOfTheDay} from "./api";
import {useEffect, useState} from "react";

function App() {
    // useState hook - function where first parameter is the initial state that you want saved
    const [pod, setPod] = useState(null);

    useEffect(() => {
        const getImage = async () => {
            const response = await getPictureOfTheDay();

            setPod(response);
        }

        getImage();
    }, []);

    console.log("picture of the day: ", pod);

    return (
        <div>
            {
                pod ?
                    <>
                        <h1>{pod.title}</h1>
                        <p>{pod.explanation}</p>
                        <img src={pod.hdurl} alt={pod.title} width="50%"></img>
                    </>
                    :
                    <h1>Loading...</h1>
            }
        </div>
    );
}

export default App;
