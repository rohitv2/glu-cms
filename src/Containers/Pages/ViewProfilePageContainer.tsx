import React, { FC } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import NavigationMenu from '../../components/NavigationMenu';
import { Async, UserType, ViewProfilePage } from './types';
import LeftDrawerMenuContent from '../Menus/LeftDrawerMenuContent';
import ProfileCard from '../../components/Cards/ProfileCard';
import useMenuList from '../../Hooks/useMenuList';
import CardsGridContainer from '../CardsGridContainer';
import CardsGrid from '../CardsGrid';
import TitlePrimary from '../../components/Typographies/TitlePrimary';
import ColumnsContainer from '../ColumnsContainer';
import EducationCard from './EditProfilePageContainer/EducationCard';
import PageFooter from '../../components/PageFooter';
import FullScreenLoader from '../../components/Loaders/FullScreenLoader';

const useStyles = makeStyles({
    educationCard: {
        '&:first-child': {
            paddingTop: 0,
        },
        '&:last-child': {
            paddingBottom: 0,
        },
    },
});

interface IViewProfilePageContainer extends UserType, ViewProfilePage, Async {}

const ViewProfilePageContainer: FC<IViewProfilePageContainer> = ({
    userType,
    profileCard,
    isLoading,
    about,
    education,
}) => {
    const classes = useStyles();
    const menuList = useMenuList(userType);
    return (
        <NavigationMenu
            absolute
            background="secondary"
            userType={userType}
            menuList={menuList}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            {isLoading && <FullScreenLoader />}
            <ProfileCard editLink={`/${userType}/profile/edit`} background="secondary" {...profileCard} />
            <CardsGridContainer paddingBottomVariant={2} paddingTopVariant={2}>
                <CardsGrid rows={2}>
                    <Grid container direction="column">
                        <TitlePrimary>About</TitlePrimary>
                    </Grid>
                    <Grid container direction="column">
                        <TitlePrimary>{about}</TitlePrimary>
                    </Grid>
                </CardsGrid>
            </CardsGridContainer>
            <CardsGridContainer paddingTop={false}>
                <ColumnsContainer
                    leftContent={
                        <Grid container direction="column">
                            <TitlePrimary>Education</TitlePrimary>
                        </Grid>
                    }
                    rightContent={
                        <Grid container direction="column">
                            {education.map((card, index) => (
                                <EducationCard
                                    key={index}
                                    actions={false}
                                    {...card}
                                    rootClassName={classes.educationCard}
                                />
                            ))}
                        </Grid>
                    }
                />
            </CardsGridContainer>
            <PageFooter />
        </NavigationMenu>
    );
};

ViewProfilePageContainer.defaultProps = {
    education: []
}

export default ViewProfilePageContainer;
