import React from 'react';
import Aux from '../../hoc/Aux'
import classes from './Layout.module.css';
import NavBar from '../NavBar/NavBar';

const layout = (props) => {
    return (
        <Aux>
            <NavBar/>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    )
}

export default layout;