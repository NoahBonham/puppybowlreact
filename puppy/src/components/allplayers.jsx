// import { useState, useEffect } from "react"


// export default function Allplayers() {

// const [players, setplayers] = useState([])

// useEffect(() => {
//     async function fetchpuppies() {
//         try {
//             const response = await fetch ("https://fsa-puppy-bowl.herokuapp.com/api/2407-FTB-ET-WEB-FT/players")
//             const result = await response.json()
//             setplayers(result.data.players)
//             console.log(result.data.players);
//         } catch (error) {
//             console.error(error)
//         }
//     }
//     fetchpuppies()
// }, []);

//     return (
//         <>
//         <div>
//             <h1>Player Images</h1>
//             <div className="gallery">
//                 {players.map(player => (
//                     <div key={player.id} className="player">
//                         <h2>{player.name}</h2>
//                         <img src={player.imageUrl} alt={player.name} style={{ width: '200px', height: 'auto' }} />
//                     </div>
//                 ))}
//             </div>
//         </div>
//         </>
//     )
// }