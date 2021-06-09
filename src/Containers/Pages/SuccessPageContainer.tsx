import React, { FC } from 'react';
import { UserType } from './types';
import NavigationMenu from '../../components/NavigationMenu';
import useMenuList, { useMenuOptions } from '../../Hooks/useMenuList';
import FullHeightContainer from '../FullHeightContainer';
import PageFooter from '../../components/PageFooter';
import Grid from '@material-ui/core/Grid';
import TitleBig from '../../components/Typographies/TitleBig';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    root: {
        background: '#2267FF'
    },
    titleContainer: {
        padding: '0 3.125rem'
    },
    title: {
        color: '#fff',
        fontSize: '7.5rem'
    }
})

interface ISuccessPageContainer extends UserType {}

const SuccessPageContainer: FC<ISuccessPageContainer> = ({ userType }) => {
    const classes = useStyles()
    const menuList = useMenuList(userType)
    const menuOptions = useMenuOptions(userType)
    return (
        <NavigationMenu
            absolute
            colorWhite
            background="transparent"
            userType={userType}
            menuList={menuList}
            {...menuOptions}
        >
            <FullHeightContainer direction="column" justify="center" rootClassName={classes.root}>
                <Grid container className={classes.titleContainer}>
                    <TitleBig className={classes.title}>Class Cancelled.</TitleBig>
                </Grid>
                <PageFooter absolute background="transparent" text="We’re sorry to see you go." colorWhite />
            </FullHeightContainer>
        </NavigationMenu>
    )
}

export default SuccessPageContainer
