import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { TagCardElement } from './Cards/types';

const useStyles = makeStyles({
    root: {
        width: 'fit-content',
        height: '2.5rem',
        padding: '0 0.75rem',
        border: '1px solid rgba(0, 0, 0, 0.25)',
        marginRight: '0.625rem',
        marginBottom: '0.625rem'
    }
})

interface ITag extends TagCardElement {}

const Tag: FC<ITag> = ({ title }) => {
    const classes = useStyles()
    return (
        <Grid container justify="center" alignItems="center" className={classes.root}>
            {title}
        </Grid>
    )
}

export default Tag
