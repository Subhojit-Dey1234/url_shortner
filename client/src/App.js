import "./App.css";
import AppNavbar from "./components/AppNavbar";
import ShoppingList from "./components/ShoppingList";
import ItemModal from "./components/ItemModal";

import { Provider } from "react-redux";
import store from "./store";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ItemRedirect from "./components/ItemRedirect";

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Switch>
				<Route path="/:id">
						<ItemRedirect />
					</Route>
					<Route path="/">
						<div className="App">
							<AppNavbar />
							<Container>
								<ItemModal />
								<ShoppingList />
							</Container>
						</div>
					</Route>
					
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
