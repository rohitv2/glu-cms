import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import Grid, { GridProps } from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    root: {
        position: 'relative',
        marginBottom: ({ marginBottom, marginBottomVariant }: any) =>
            marginBottom ? (marginBottomVariant === 1 ? '3.125rem' : '6.25rem') : 0,
    },
});

interface IFormGroup extends GridProps {
    marginBottom?: boolean;
    marginBottomVariant?: 1 | 2;
    children: ReactNode;
    rootClassName?: string;
}

const FormGroup: FC<IFormGroup> = ({ marginBottom, marginBottomVariant, children, rootClassName, ...props }) => {
    const classes = useStyles({ marginBottom, marginBottomVariant });
    return (
        <Grid container direction="column" className={classNames(classes.root, rootClassName)} {...props}>
            {children}
        </Grid>
    );
};

FormGroup.defaultProps = {
    marginBottom: true,
    marginBottomVariant: 1,
};

export default FormGroup;
