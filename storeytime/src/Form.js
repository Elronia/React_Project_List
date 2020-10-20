import React from 'react'

class Form extends React.Component {

    render() {
        return(
            <div>
                <h2>Open Up a Franchise</h2>
                <form>
                    <label htmlFor="s_name">Name</label>
                    <input type="text" id="s_name"/>
                    <label htmlFor="s_order">Order</label>
                    <input type="text" id="s_order"/>
                    <input type="submit" value="Create a store"/>
                </form>
            </div>
            
        )
    }

}

export default Form;