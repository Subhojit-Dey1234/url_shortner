import React, { Component } from 'react'
import { getItems, deleteItems, getItemsById } from "../actions/ItemActions";
import { connect } from "react-redux";

class ItemRedirect extends Component {
    state={
        link : null
    }
    componentDidMount(){
        this.props.getItemsById(window.location.pathname.slice(1,))
        .then(res=>{
            window.location = res.data[0].name
            this.setState({
                link : res.data[0].hostname
            })
        })
    }
    render() {
        if(!this.setState.link){
            return <h2 style={{textAlign:"center"}}>Redirecting....</h2>
        }
        return (
            <div>
                Redirecting to {this.state.link}
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        item : state.item
    }
}

export default connect( mapStateToProps,{
    getItemsById
})(ItemRedirect)
