import { useState, useEffect } from "react";

export default function Newplayerform() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [image, setImage] = useState("");
    const [error, setError] = useState(null);
    const [searchParam, setSearchParam] = useState("");
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        async function fetchPlayers() {
            try {
                const response = await fetch
                ("https://fsa-puppy-bowl.herokuapp.com/api/2407-FTB-ET-WEB-FT/players")
                const result = await response.json();
                    setPlayers(result.data.players);
            } catch (error) {
                setError(error.message);
            }
        }

        fetchPlayers();
    }, []);

    // Handle form submission
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2407-FTB-ET-WEB-FT/players", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({ name, breed, image })
            });
            const result = await response.json();
            console.log(result);
            setPlayers(result.data.player);

            setName("");
            setBreed("");
            setImage("");
        } catch (error) {
            setError(error.message);
        }
    }

    const playersToDisplay = searchParam
        ? players.filter(player => player.name.toLowerCase().includes(searchParam.toLowerCase()))
        : players;

    return (
        <>
            <h3>Add New Player</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Breed: <input
                        type="text"
                        value={breed}
                        onChange={(e) => setBreed(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Image: <input
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
                <br />
                <label>
                    <input
                        type="text"
                        placeholder="Search"
                        onChange={(e) => setSearchParam(e.target.value)}
                    />
                </label>
                <div>
                    {playersToDisplay.map(player => (
                        player && player.name ? (
                            <div key={player.id}>
                                <h3>{player.name}</h3>
                                <img src={player.imageUrl} alt={player.name} style={{ width: '100px', height: 'auto' }} />
                            </div>
                        ) : null
                    ))}
                </div>
            </form>
            {error && <p>Error: {error}</p>}
        </>
    );
}