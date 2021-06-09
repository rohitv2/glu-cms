import React, { FC } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import NavigationMenu from '../../components/NavigationMenu';
import { UserType } from './types';
import LeftDrawerMenuContent from '../Menus/LeftDrawerMenuContent';
import ProfileCard from '../../components/Cards/ProfileCard';
import useMenuList from '../../Hooks/useMenuList';
import CardsGridContainer from '../CardsGridContainer';
import CardsGrid from '../CardsGrid';
import TitlePrimary from '../../components/Typographies/TitlePrimary';
import ColumnsContainer from '../ColumnsContainer';
import PageFooter from '../../components/PageFooter';
import TextPrimary from '../../components/Typographies/TextPrimary';

const useStyles = makeStyles({
    educationCard: {
        '&:first-child': {
            paddingTop: 0
        },
        '&:last-child': {
            paddingBottom: 0
        }
    },
    infoTitleContainer: {
        marginBottom: '2.0625rem'
    },
    socialContainer: {
        marginBottom: '2.0625rem'
    }
});

interface IViewSchoolInfoPageContainer extends UserType {}

const ViewSchoolInfoPageContainer: FC<IViewSchoolInfoPageContainer> = ({ userType }) => {
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
            <ProfileCard
                isTitle={false}
                isEditLink={false}
                isRedirectLink
                redirectLink="https://www.google.com"
                redirectLinkText="gemsschool.ae"
                img="https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596608147/gluschool/vrplayerboy_ddqot7.jpg"
                name="GEMS School"
                email="information@gems.ae"
                phone="4 123 6987"
                address="Dubai, UAE (+971)"
                background="secondary"
            />
            <CardsGridContainer paddingBottomVariant={2} paddingTopVariant={2}>
                <CardsGrid rows={2}>
                    <Grid container direction="column">
                        <TitlePrimary>About</TitlePrimary>
                    </Grid>
                    <Grid container direction="column">
                        <TitlePrimary>
                            I’m Frank, a secondary Student at GEMS school in Dubai. Currently studying Maths, Business
                            Studies and History.
                        </TitlePrimary>
                    </Grid>
                </CardsGrid>
            </CardsGridContainer>
            <CardsGridContainer paddingTop={false}>
                <ColumnsContainer
                    leftContent={
                        <Grid container direction="column">
                            <TitlePrimary>Information</TitlePrimary>
                        </Grid>
                    }
                    rightContent={
                        <Grid container direction="column">
                            <ColumnsContainer
                                topBorder={false}
                                leftContent={
                                    <Grid container direction="column">
                                        <Grid container className={classes.infoTitleContainer}>
                                            <TextPrimary>Addresses</TextPrimary>
                                        </Grid>
                                        <Grid container direction="column">
                                            <TextPrimary>The Villa</TextPrimary>
                                            <TextPrimary>28th Street, Al Khail Street</TextPrimary>
                                            <TextPrimary>Al Nahda 1</TextPrimary>
                                            <TextPrimary>Dubai, UAE</TextPrimary>
                                        </Grid>
                                    </Grid>
                                }
                                rightContent={
                                    <Grid container direction="column">
                                        <Grid container className={classes.infoTitleContainer}>
                                            <TextPrimary>Social</TextPrimary>
                                        </Grid>
                                        <Grid container direction="column">
                                            <Grid container direction="column" className={classes.socialContainer}>
                                                <TextPrimary>Instagram</TextPrimary>
                                                <TextPrimary>@gems_uae</TextPrimary>
                                            </Grid>
                                            <Grid container direction="column" className={classes.socialContainer}>
                                                <TextPrimary>Facebook</TextPrimary>
                                                <TextPrimary>@gemsschool-uae</TextPrimary>
                                            </Grid>
                                            <Grid container direction="column" className={classes.socialContainer}>
                                                <TextPrimary>Twitter</TextPrimary>
                                                <TextPrimary>@gems_uae</TextPrimary>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                }
                            />
                        </Grid>
                    }
                />
            </CardsGridContainer>
            <PageFooter />
        </NavigationMenu>
    );
};

export default ViewSchoolInfoPageContainer;
