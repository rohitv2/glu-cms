import React, { FC } from 'react';
import classNames from 'classnames';
import { use100vh } from 'react-div-100vh';
import Grid, { GridProps } from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    root: {
        minHeight: ({ height }: any) => height,
    },
});

interface FullHeightContainer extends GridProps {
    rootClassName?: string
}

const FullHeightContainer: FC<FullHeightContainer> = ({ children, rootClassName, ...props }) => {
    const height = use100vh();
    const classes = useStyles({ height });
    return (
        <Grid container direction="column" className={classNames(classes.root, rootClassName)} {...props}>
            {children}
        </Grid>
    );
};

export default FullHeightContainer;
