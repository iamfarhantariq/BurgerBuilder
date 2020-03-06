import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button
            className={classes.Less}
            onClick={props.removed}
            disabled={props.count <= 0 ? 'disabled' : null}>Less</button>

        <p className={classes.Count}>{props.count}</p>

        <button
            className={classes.More}
            onClick={props.added}>More</button>
    </div>
);

export default buildControl;