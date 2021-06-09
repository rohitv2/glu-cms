import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import TitlePrimary from '../../../components/Typographies/TitlePrimary';
import FormGroup from '../../../components/Form/FormGroup';
import FormControlInput from '../../../components/Form/FormControlInput';
import CardsGrid from '../../CardsGrid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ButtonPrimary from '../../../components/Button/ButtonPrimary';
import TextPrimary from '../../../components/Typographies/TextPrimary';
import { suggestions } from '../../../data/help';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    input: {
        '& input': {
            fontSize: '2.625rem',
            lineHeight: '1.875rem'
        }
    },
    goButton: {
        fontSize: '1.25rem',
        lineHeight: '1.875rem',
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    link: {
        color: 'unset',
        '&:hover': {
            color: 'unset',
        },
    },
})

const Search: FC = () => {
    const classes = useStyles();
    return (
        <CardsGrid rows={2}>
            <Grid container direction="column">
                <TitlePrimary>Ask Something</TitlePrimary>
            </Grid>
            <Grid container direction="column">
                <FormGroup>
                    <FormControlInput
                        fullWidth
                        id="help-search"
                        name="search"
                        placeholder="Search"
                        value=""
                        fontSizeVariant={2}
                        inputRootClassName={classes.input}
                    />
                    <ButtonPrimary className={classes.goButton}>Go</ButtonPrimary>
                </FormGroup>
                <Grid container direction="column">
                    {suggestions.map(({ label, path }: any, index) => (
                        <Link to={path} key={index} className={classes.link}>
                            <TextPrimary>{label}</TextPrimary>
                        </Link>
                    ))}
                </Grid>
            </Grid>
        </CardsGrid>
    )
}

export default Search
