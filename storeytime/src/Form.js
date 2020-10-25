import React from 'react'

//Controlled Components -
    //State controlling input - `value`
    //Input controlling state - `onChange`

//to use `evt.target.name`, the keys of your state has to match the name of your inputs
class Form extends React.Component {

    state = {
        storeName: "",
        orders: 0
    }

    handleInputChange = (evt) => {
        // console.log(evt.target.name, evt.target.value)
        // if(evt.target.type === "number")
        
        this.setState({
            [evt.target.name] : evt.target.value //dynamically assigning the keys of an object; name of the input matching the name of the state

            // evt.target.value is only going to return strings
                // parseInt (parseFloat) to turn into a number
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.creditCard(this.state)
    }

    render() {
        console.log(this.state)
        return(
            <div>
                <h2>Open Up a Franchise</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="s_name">Name</label>
                    <input type="text" 
                        id="s_name" 
                        value={this.state.storeName} 
                        onChange={this.handleInputChange}
                        name="storeName"
                    />
                    <label htmlFor="s_order">Order</label>
                    <input type="number" 
                        id="s_order" 
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        name="orders"
                    />
                    <input type="submit" value="Create a store"/>
                </form>
            </div>
            
        )
    }

}

export default Form;