import React, { FC, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import List from './List';
import data from './data';

const Notifications: FC = () => {
    return (
        <Grid container direction="column">
            {data.map(({ id, title, data }) => (
                <List key={id} title={title} data={data} />
            ))}
        </Grid>
    );
};

export default memo(Notifications);
