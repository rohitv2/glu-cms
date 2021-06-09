import React, { FC } from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    root: {
        background: '#fff'
    }
})

type WhiteContainerProps = {
    rootClassName?: string;
}

const WhiteContainer: FC<WhiteContainerProps> = ({ children, rootClassName }) => {
    const classes = useStyles()
    return (
        <Grid container direction="column" className={classNames(classes.root, rootClassName)}>
            {children}
        </Grid>
    )
}

export default WhiteContainer
