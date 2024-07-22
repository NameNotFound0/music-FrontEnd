import {Link} from "react-router-dom"

const Artist = ({artist}) => {
	return (
		<Link to={"/show"}>
			<div className="bg-white rounded shadow-lg overflow-hidden">
				<div className="px-4 pt-2 pb-4">
					<h2 className="text font-semibold">{artist.name}</h2>
				</div>
			</div>
		</Link>
	)
}

export default Artist;