import React, { FC, memo, useState } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Drawer, { DrawerBase } from '../../components/Drawer';
import TextPrimary from '../../components/Typographies/TextPrimary';
import FormControlInput from '../../components/Form/FormControlInput';
import FormGroup from '../../components/Form/FormGroup';
import ButtonPrimary from '../../components/Button/ButtonPrimary';
import { UserType } from '../Pages/types';

const useStyles = makeStyles({
    root: {
        padding: '6.25rem 0',
        flexGrow: 1,
    },
    suggestedTitleContainer: {
        marginBottom: '1.4375rem',
    },
    suggestedTitle: {
        color: '#5F5F5F',
    },
    inputRoot: {
        height: '5rem',
    },
    input: {
        '& input': {
            fontSize: '5rem',
            lineHeight: '5rem',
        },
    },
    submit: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        fontSize: '1.25rem',
        lineHeight: '2.0625rem',
    },
    link: {
        color: '#000',
        '&:hover': {
            color: '#000'
        }
    }
});

const ModalProps = {
    style: {
        zIndex: 1298,
    },
};

interface ISearchDrawer extends DrawerBase, UserType {}

const SearchDrawer: FC<ISearchDrawer> = ({ open, onClose, userType }) => {
    const [search, setSearch] = useState('');
    const classes = useStyles();

    return (
        <Drawer
            fullHeight
            open={open}
            onClose={onClose}
            header={false}
            position="left"
            width="45vw"
            ModalProps={ModalProps}
        >
            <Grid container className={classes.root}>
                <Grid container direction="column" justify="flex-end">
                    <FormGroup marginBottomVariant={2}>
                        <FormControlInput
                            id="search"
                            name="search"
                            value={search}
                            onChange={(e) => setSearch(`${e.target.value}`)}
                            placeholder="Search"
                            rootClassName={classes.inputRoot}
                            inputRootClassName={classes.input}
                        />
                        <Link to={`/${userType}/search?query=${search}`}>
                            <ButtonPrimary className={classes.submit} onClick={onClose}>Go</ButtonPrimary>
                        </Link>
                    </FormGroup>
                    <Grid container direction="column" className={classes.suggestedTitleContainer}>
                        <TextPrimary className={classes.suggestedTitle}>Suggested</TextPrimary>
                    </Grid>
                    <Grid container direction="column">
                        <Link to={`/${userType}/search`} className={classes.link}>
                            <TextPrimary>Maths</TextPrimary>
                        </Link>
                        <Link to={`/${userType}/search`} className={classes.link}>
                            <TextPrimary>Science</TextPrimary>
                        </Link>
                        <Link to={`/${userType}/search`} className={classes.link}>
                            <TextPrimary>Physics</TextPrimary>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Drawer>
    );
};

export default memo(SearchDrawer);
