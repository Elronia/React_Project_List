import React from 'react'

//Class Components: Need a function called 'render' that returns one chunk of JSX
    //Class Components should be capitalized
    //Class Components get their props via 'this.props'

//Anything dynamically rendered in your frontend application should come from state somewhere
    //setState -> triggers a rerender -> modifies the DOM
class Store extends React.Component{
    //State can only exist inside of a class component
    state = {
        count: 5, 
        open: true
    }
    //event listener should be defined in the same component as its being passed in 
        //event listener's inside class components should be arrow functions
    handleOrderClick = (evt) => {
        //Using arrow functions makes 'this' the instance, using 'bind' is annoying

        // console.log("Inside of evt listener", this)
        // console.log(this.props.storeName)

        //Any time that state needs to change, use 'this.setState'
            //setState triggers a rerender
        let partialStateObj = {count: this.state.count + 1}
        this.setState(partialStateObj)

        //SECOND ARGUMENT of this.setState is a callback
        //this.setState({}, () => { //what to do after the state has changed})

        //Anytime that your new state is dependent on your old state, you might want to use functional setState
            //the return value of the callback is a POJO, that POJO gets merged into old state
        // this.setState((oldState) =>{
        //     return {
        //         count: oldState.count + 1
        //     }
        // })
    }

    render() {
        console.log("State", this.state)
        //In class components, write your console.log above your return, below your render
        return(
            <li className="container">
                <img src="https://ih1.redbubble.net/image.1006770049.1439/flat,750x1000,075,f.jpg" alt='bubble tea' />
                    
                <p>Store Name: <span>{ this.props.storeName }</span></p>
                <button onClick={ this.handleOrderClick }>Orders: {this.state.count}</button>
            </li>
        )
    }
}

export default Store