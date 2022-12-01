import './App.css';
import {getPictureOfTheDay} from "./api";
import {useEffect, useState} from "react";

function App() {
    // useState hook - function where first parameter is the initial state that you want saved
    const [pod, setPod] = useState(null);
    const [date, setDate] = useState(null);

    useEffect(() => {
        const getImage = async () => {
            const response = await getPictureOfTheDay();

            setPod(response);
        }

        getImage();
    }, []);

    const handleInput = (event) => {
        console.log('input change event', event);
        setDate(event.target.value);
    }

    const handleClick = async (event) => {
        console.log('click event', event);
        setPod(null);
        const response = await getPictureOfTheDay(date);

        setPod(response);
    }

    console.log('DATE', date);

    return (
        <div>
            <input type="date" onChange={handleInput}/>
            <button onClick={handleClick}>
                <p>View Image</p>
            </button>
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
