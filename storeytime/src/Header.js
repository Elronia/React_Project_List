import React from 'react'

//Functional Component: Function that returns one chunk of JSX (<> </>)
    //the function name should be capitalized
    //Functional components get their props from argument of the function

function Header(props) {
    return( <h1>{props.title}</h1> )
}

//Write your export at the buttom
export default Header