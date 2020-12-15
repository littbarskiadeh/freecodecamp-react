import React from "react";

class LikeButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            //no. of likes begins at 0
            likes: 0 
         }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const noOfLikes = this.state.likes + 1;
        this.setState({ 
            likes: noOfLikes
        });
    }

    render() { 
        return ( 
            <div style={{ display:'flex', flexDirection:'row',}}>
                <button style={{margin: '.1rem', width:'50px', padding:'.4rem', borderRadius:'.5rem', outline:'none'}} onClick= {(e) => this.handleClick(e) }>Like!</button>
                <span style={{margin: '.3rem'}}>{this.state.likes} { this.state.likes === 1 ? 'Like' : 'Likes'} </span>     
            </div>
         );
    }
}
 
export default LikeButton;