import React, { FC } from 'react';
import { UserType } from './types';
import useMenuList from '../../Hooks/useMenuList';
import NavigationMenu from '../../components/NavigationMenu';
import LeftDrawerMenuContent from '../Menus/LeftDrawerMenuContent';
import CardsGridContainer from '../CardsGridContainer';
import CardsGrid from '../CardsGrid';
import Grid from '@material-ui/core/Grid';
import TitlePrimary from '../../components/Typographies/TitlePrimary';
import { cards } from '../../data/filters';
import ImageCard from '../../components/Cards/ImageCard';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ShowMoreCard from '../../components/Cards/ShowMoreCard';
import PageFooter from '../../components/PageFooter';
import ClassPurchaseDrawer from '../Menus/ClassPurchaseDrawer';
import useToggle from '../../Hooks/useToggle';

const useStyles = makeStyles({
    titleContainer: {
        marginBottom: '2.5rem'
    }
})

interface IProfileImageCardsPageContainer extends UserType {
    title: string;
}

const ProfileImageCardsPageContainer: FC<IProfileImageCardsPageContainer> = ({ userType, title }) => {
    const classes = useStyles();
    const menuList = useMenuList(userType);
    const [classPurchaseDrawer, toggleClassPurchaseDrawer] = useToggle(false);

    return (
        <NavigationMenu
            absolute
            userType={userType}
            menuList={menuList}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            <ClassPurchaseDrawer
                open={classPurchaseDrawer}
                onClose={toggleClassPurchaseDrawer}
                userType={userType}
                purchased
            />
            <CardsGridContainer paddingBottom={false}>
                <CardsGrid rows={2} rootClassName={classes.titleContainer}>
                    <Grid container>
                        <TitlePrimary>Ray Smith</TitlePrimary>
                    </Grid>
                    <Grid container>
                        <TitlePrimary>{title}</TitlePrimary>
                    </Grid>
                </CardsGrid>
                <CardsGrid>
                    {cards.map((card, index) => (
                        <ImageCard onTitleClick={toggleClassPurchaseDrawer} key={index} {...card} />
                    ))}
                </CardsGrid>
            </CardsGridContainer>
            <ShowMoreCard total={2} current={2} />
            <PageFooter />
        </NavigationMenu>
    );
};

export default ProfileImageCardsPageContainer;
