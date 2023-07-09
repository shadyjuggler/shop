import { Link } from 'react-router-dom';


import Header from '../components/Header/Header';
import List from '../components/List/List';

function App() {
	return (
		<div className="app">
			<Header
				title={"Product List"}
				buttons=
				{
					<div className="header-btns">
						<Link to="addproduct">ADD</Link>
						<Link>MASS DELETE</Link>
					</div>
				}
			/>
			<List />
		</div>
	);
}

export default App;
