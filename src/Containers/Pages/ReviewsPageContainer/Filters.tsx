import React, { FC, useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import FormControlSelect from '../../../components/Form/FormControlSelect';
import { monthsOptions } from '../../../Helper/options';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    input: {
        minWidth: 'auto',
    },
    root: {
        paddingBottom: '5rem',
    },
})

export type OnFilter = (from: string, to: string) => void;

interface IFilters {
    onFilter: OnFilter,
    from: string;
    to: string;
}

const Filters: FC<IFilters> = ({ onFilter, from: initFrom, to: initTo }) => {
    const classes = useStyles();
    const [from, setFrom] = useState(initFrom)
    const [to, setTo] = useState(initTo)

    useEffect(() => {
        if (from && to) {
            onFilter(from, to)
        }
    }, [from, to])

    return (
        <Grid container className={classes.root}>
            <Grid container item xs={3}>
                <FormControlSelect
                    fullWidth
                    name="from"
                    value={from}
                    options={monthsOptions}
                    onChange={({ target }) => setFrom(target.value)}
                    label="From"
                    labelPlacement="left"
                    variant="outlined"
                    placeholder="Month"
                    inputRootClassName={classes.input}
                />
            </Grid>
            <Grid container item xs={3} />
            <Grid container item xs={3}>
                <FormControlSelect
                    fullWidth
                    name="to"
                    value={to}
                    options={monthsOptions}
                    onChange={({ target }) => setTo(target.value)}
                    label="To"
                    labelPlacement="left"
                    variant="outlined"
                    placeholder="Month"
                    inputRootClassName={classes.input}
                />
            </Grid>
        </Grid>
    )
}

export default Filters
