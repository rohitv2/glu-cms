import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CardsGrid from './CardsGrid';

const useStyles = makeStyles({
    root: {
        borderTop: ({ topBorder }: any) => (topBorder ? '1px solid rgba(0, 0, 0, 0.25)' : 0),
        paddingTop: ({ topBorder }: any) => (topBorder ? '3.125rem' : 0),
    },
    section: {
        padding: '0',
        borderRight: ({ centerBorder }: any) => centerBorder ? '1px solid rgba(0, 0, 0, 0.25)' : '',
        '&:last-child': {
            borderRight: 'none',
        },
        '&:first-child': {
            paddingRight: '3.125rem',
        },
    },
    sectionRight: {
        position: 'relative',
        top: ({ rightContentPaddingTop }: any) => (rightContentPaddingTop ? 0 : '-2.5rem'),
    },
    sectionSticky: {
        position: 'sticky',
        flexDirection: 'column',
        top: '4rem',
        height: 'fit-content'
    },
});

interface IColumnsContainer {
    leftContent: ReactNode;
    rightContent: ReactNode;
    rightContentPaddingTop?: boolean;
    rootClassName?: string;
    topBorder?: boolean;
    leftSticky?: boolean;
    centerBorder?: boolean;
}

const ColumnsContainer: FC<IColumnsContainer> = ({
    leftContent,
    rightContent,
    rightContentPaddingTop,
    rootClassName,
    topBorder,
    leftSticky,
    centerBorder,
}) => {
    const classes = useStyles({ rightContentPaddingTop, topBorder, centerBorder });
    return (
        <Grid container className={classNames(classes.root, rootClassName)}>
            <CardsGrid rows={2}>
                <Grid container className={classes.section}>
                    <Grid
                        container
                        className={classNames({
                            [classes.sectionSticky]: leftSticky,
                        })}
                    >
                        {leftContent}
                    </Grid>
                </Grid>
                <Grid container className={classNames(classes.section, classes.sectionRight)}>
                    {rightContent}
                </Grid>
            </CardsGrid>
        </Grid>
    );
};

ColumnsContainer.defaultProps = {
    topBorder: true,
    rightContentPaddingTop: true,
    centerBorder: true,
};

export default ColumnsContainer;
