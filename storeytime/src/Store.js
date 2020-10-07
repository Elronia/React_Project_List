import React from 'react'

//Class Components: Need a function called 'render' that returns one chunk of JSX
    //Class Components should be capitalized
    //Class Components get their props via 'this.props'

class Store extends React.Component{

    //event listener should be defined in the same component as its being passed in 
        //event listener's inside class components should be arrow functions
    handleOrderClick = (evt) => {
        console.log("Inside of evt listener", this)
        console.log(this.props.storeName)
    }

    render() {
        console.log(this.props)
        //In class components, write your console.log above your return, below your render
        return(
            <li className="container">
                <img src="https://ih1.redbubble.net/image.1006770049.1439/flat,750x1000,075,f.jpg" alt='bubble tea' />
                    
                <p>Store Name: <span>{ this.props.storeName }</span></p>
                <button onClick={ this.handleOrderClick }>Orders: 0</button>
            </li>
        )
    }
}

export default Store