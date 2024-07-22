import { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import axios from "axios"
import Artist from "../components/Artist"
import ShowPage from "../pages/ShowPage"

const HomePage= () => {

	const [artists, setArtists] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const getArtists = async () => {
		try{
			setIsLoading(true);
			const response = await axios.get('http://localhost:3000/api/artists/');
			console.log(response.data);
			setArtists(response.data);
			setIsLoading(false);

		}catch(error){
			console.log(error);
		}
	}

	useEffect(() => {
		getArtists();
	},[])

	return(
		<div>

			{/*Button Create new Artist*/}
			<div>
				<Link to="/create" className="inline-block mt-4 shadow-md bg-blue-600 text-white  rounded-sm px-4 py-2 font-bold hover:bg-green-600 hover:cursor-pointer">
					Create Artist
				</Link>
			</div>

			{/*Main Grid Displaying all Artist*/}
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
				{isLoading ? (
					"Loading"
				) : (
					<>
					{artists.length > 0 ? (
						<>
						{
							artists.map((artist, index) => {
								return(
									<Artist key={index} artist={artist}/>
								)
							})
						}
						</>
					) : (
						<div>
							There is no artist
						</div>
					)}
					</>
				)}
			</div>
		</div>
	)
}

export default HomePage;