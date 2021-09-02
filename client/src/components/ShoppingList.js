import React, { Component } from "react";
import { Alert, Button, Container, ListGroup, ListGroupItem } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { connect } from "react-redux";
import { getItems, deleteItems, getItemsById } from "../actions/ItemActions";
import PropTypes from "prop-types";
import { compose } from "redux";

class ShoppingList extends Component {
	state={
		success : false
	}
	
	componentDidMount() {
		this.props.getItems();
	}

	onDeleteClick = (id) => {
		this.props.deleteItems(id);
	};
	render() {
		const { items } = this.props.item;
		console.log(items)
		return (
			<div style={{ marginTop: "3rem" }}>
				<Container>
					<ListGroup horizontal="sm">
						<TransitionGroup className="shopping-list">
							{items.map(({ _id, name , shortlink,hostname}) => (
								<CSSTransition key={_id} timeout={500} classNames="fade">
									<ListGroup horizontal="sm">
									<ListGroupItem>
										<Button
											className="remove-btn"
											color="danger"
											size="sm"
											onClick={this.onDeleteClick.bind(this, _id)}
										>
											Delete
										</Button>
										<a
											style={{ cursor: "pointer" }}
											onClick={() => {
												console.log(shortlink,name)
												this.props.getItemsById(shortlink).then((res) => {
													window.location = res.data[0].name;
												});
											}}
										>
										{ hostname }
										</a>
										</ListGroupItem>
										<ListGroupItem>
										<Button color="warning"
											onClick={() => {
												navigator.clipboard.writeText(
													hostname
												).then(()=>{
													this.setState({
														success : true
													})

													setTimeout(()=>{
														this.setState({
															success : false
														})
													},1000)
												})
											}}
										>
											Copy
										</Button>
										<a style={{marginLeft:"1rem"}}> Shortened link of <b>{name}</b></a>
									</ListGroupItem>
									</ListGroup>
								</CSSTransition>
							))}
						</TransitionGroup>
					</ListGroup>
				</Container>
				<Alert color="success" style={{display:this.state.success ? "block" : "none",marginTop:"2rem"}}>
					Copied
				</Alert>
			</div>
		);
	}
}
ShoppingList.propTypes = {
	getItems: PropTypes.func.isRequired,
	deleteItems: PropTypes.func.isRequired,
	item: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
	item: state.item,
});

export default connect(mapStateToProps, {
	getItems,
	deleteItems,
	getItemsById,
})(ShoppingList);
