import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../actions/ItemActions";
import {
	Button,
	Col,
	Form,
	FormFeedback,
	Input,
} from "reactstrap";
class ItemModal extends Component {
	state = {
		error: false,
		name: "",
	};

    randomString = (length, chars) =>{
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }
    // var rString = randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
	onChange = (e) => {
        let check_url = "https://"
		this.setState({
			[e.target.name]: e.target.value,
            error : e.target.value.indexOf(check_url) === -1
		});
	};

	onSubmit = (e) => {
		e.preventDefault();

        let rString = this.randomString(5, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
		let host = window.location.protocol + "//" + window.location.host + "/";
		const newItem = {
            shortlink : rString,
			hostname : host + rString,
			name: this.state.name,
		};

        console.log(newItem)

		this.props.addItem(newItem);
	};
	render() {
		return (
			<div>
				<Form color="red" onSubmit={this.onSubmit}>
					<Col>
						<Input invalid={this.state.error}
							type="text"
							name="name"
							id="item"
							placeholder="Create Short Link"
							onChange={this.onChange}
						/>
                        <FormFeedback>
                            Please enter a valid URL
                        </FormFeedback>

						<Button disabled={this.state.error || this.state.name === ""} color="primary" style={{ marginTop: "1rem" }}>
							Create Short Link
						</Button>
					</Col>
				</Form>
                
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	item: state.item,
});

export default connect(mapStateToProps, { addItem ,})(ItemModal);
