import React, { FC, ElementType } from 'react';
import classNames from 'classnames';
import Grid, { GridProps } from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    root: {
        padding: ({ padding }: any) => (padding ? '9.375rem 3.125rem' : 0),
        background: ({ background }: any) => (background === 'primary' ? '#fff' : '#F7F7F7'),
        paddingTop: ({ paddingTop, paddingTopVariant }: any) =>
            paddingTop ? (paddingTopVariant === 1 ? '9.375rem' : '6.25rem') : 0,
        paddingBottom: ({ paddingBottom, paddingBottomVariant }: any) =>
            paddingBottom ? (paddingBottomVariant === 1 ? '9.375rem' : '6.25rem') : 0,
    },
});

interface ICardsGridContainer extends GridProps {
    background?: 'primary' | 'secondary';
    rootClassName?: string;
    padding?: boolean;
    paddingTop?: boolean;
    paddingTopVariant?: 1 | 2;
    paddingBottom?: boolean;
    paddingBottomVariant?: 1 | 2;
    component?: ElementType<any>;
}

const CardsGridContainer: FC<ICardsGridContainer> = ({
    background,
    rootClassName,
    padding,
    paddingTop,
    paddingTopVariant,
    paddingBottom,
    paddingBottomVariant,
    children,
    component = 'div',
    ...props
}) => {
    const classes = useStyles({
        background,
        padding,
        paddingTop,
        paddingTopVariant,
        paddingBottomVariant,
        paddingBottom,
    });
    return (
        <Grid container component={component} className={classNames(classes.root, rootClassName)} {...props}>
            {children}
        </Grid>
    );
};

CardsGridContainer.defaultProps = {
    background: 'primary',
    padding: true,
    paddingTop: true,
    paddingBottom: true,
    paddingTopVariant: 1,
    paddingBottomVariant: 1,
};

export default CardsGridContainer;
