import {useState} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import {toast} from "react-toastify"

const CreatePage = () => {

	const [name, setName] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const saveArtist = async(e) => {
		e.preventDefault();
		if(name === ""){
			toast.error('Plase give a name of Artist');
			return;
		}
		try{
			setIsLoading(true);
			const response = await axios.post('http://localhost:3000/api/artists', {name: name});
			toast.success('Saved successfully');
			setIsLoading(false);
			navigate("/");
		}catch(error){
			toast.error(error.message);
			setIsLoading(false);
		}
	}

	return(
		<div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
			<h2 className="font-semibold text-2xl mb-4 block text-center">
				Create an Artist
			</h2>
			<form onSubmit={saveArtist}>
				<div className="space-y-2">
					<div>
						<label>Artist Name</label>
						<input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full block border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Artist Name" />
					</div>
					<div>
						{ !isLoading && ( <button className="block w-full mt-6 bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-600 hover:cursor-pointer">Save</button>)}
					</div>
				</div>
			</form>

		</div>
	)
}

export default CreatePage;