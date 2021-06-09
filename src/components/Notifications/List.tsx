import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Card from './Card';

const useStyles = makeStyles({
    root: {
        marginBottom: '2.375rem',
    },
    title: {
        fontSize: '2.625rem',
        marginBottom: '1.1875rem',
    },
});

type ListProps = {
    title: string;
    data: object[];
};

const List: FC<ListProps> = ({ title, data }) => {
    const classes = useStyles();
    return (
        <Grid container direction="column" className={classes.root}>
            <Typography variant="h4" className={classes.title}>
                {title}
            </Typography>
            <Grid container direction="column">
                {data.map(({ id, title, message, time }: any) => (
                    <Card key={id} id={id} title={title} message={message} time={time} />
                ))}
            </Grid>
        </Grid>
    );
};

List.defaultProps = {
    data: [],
};

export default List;
