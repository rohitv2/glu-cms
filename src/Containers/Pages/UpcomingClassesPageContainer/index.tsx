import React, { FC } from 'react';
import { UserType } from '../types';
import useMenuList from '../../../Hooks/useMenuList';
import NavigationMenu from '../../../components/NavigationMenu';
import LeftDrawerMenuContent from '../../Menus/LeftDrawerMenuContent';
import NextClassCard from '../../../components/Cards/NextClassCard';
import CardsGridContainer from '../../CardsGridContainer';
import Grid from '@material-ui/core/Grid';
import CardsGrid from '../../CardsGrid';
import TitlePrimary from '../../../components/Typographies/TitlePrimary';
import IconCircle from '../../../components/Icons/IconCircle';
import makeStyles from '@material-ui/core/styles/makeStyles';
import UpcomingClassCard from './UpcomingClassCard';
import RecommendedContainer from '../../RecommendedContainer';
import { recordedClasses } from '../../../data/tutorProfile';
import useToggle from '../../../Hooks/useToggle';
import ClassPurchaseDrawer from '../../Menus/ClassPurchaseDrawer';
import PageFooter from '../../../components/PageFooter';
import { upcomingClasses } from '../../../data/upcomingClasses';

const useStyles = makeStyles({
    titleContainer: {
        paddingBottom: '2.5rem',
        borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
        gap: '0 0.125rem',
    },
    cardsContainer: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
        '&:last-child': {
            borderBottom: 0,
        },
    },
    cardsTitleContainer: {
        paddingTop: '3.125rem',
    },
});

interface IUpcomingClassesPageContainer extends UserType {}

const UpcomingClassesPageContainer: FC<IUpcomingClassesPageContainer> = ({ userType }) => {
    const classes = useStyles();
    const menuList = useMenuList(userType);
    const [classPurchaseDrawer, toggleClassPurchaseDrawer] = useToggle(false);

    return (
        <NavigationMenu
            background="secondary"
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
            <NextClassCard
                imgBig
                background="secondary"
                title="Next"
                subject="English"
                subTitle="AED200"
                name="Jen Holden"
                description="How to structure narrative in fiction."
                img="https://res.cloudinary.com/ddwbbzuxw/image/upload/v1596607731/vrplayerboy_fyrdco.jpg"
                date="24/07/20"
                startTime="3pm"
                endTime="4.30pm"
                link={`/${userType}/profile/upcoming-classes/1`}
                teacherLink={`/${userType}/tutor`}
                teacherId={5}
            />
            <CardsGridContainer paddingTopVariant={2}>
                <CardsGrid rows={2} rootClassName={classes.titleContainer}>
                    <Grid container>
                        <TitlePrimary>Ray Smith</TitlePrimary>
                    </Grid>
                    <Grid container alignItems="center">
                        <IconCircle />
                        <TitlePrimary>Upcoming Classes</TitlePrimary>
                    </Grid>
                </CardsGrid>
                <Grid container direction="column">
                    <Grid container direction="column" className={classes.cardsContainer}>
                        <Grid container>
                            <Grid container item xs={3} className={classes.cardsTitleContainer}>
                                <TitlePrimary>June</TitlePrimary>
                            </Grid>
                            <Grid container direction="column" item xs={9}>
                                {upcomingClasses.slice(0, 2).map((card) => (
                                    <UpcomingClassCard
                                        key={card.id}
                                        {...card}
                                        link={`/${userType}/profile/upcoming-classes/${card.id}`}
                                        teacherLink={`/${userType}/tutor`}
                                    />
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container direction="column" className={classes.cardsContainer}>
                        <Grid container>
                            <Grid container item xs={3} className={classes.cardsTitleContainer}>
                                <TitlePrimary>August</TitlePrimary>
                            </Grid>
                            <Grid container direction="column" item xs={9}>
                                {upcomingClasses.map((card, index) => (
                                    <UpcomingClassCard
                                        key={index}
                                        {...card}
                                        link={`/${userType}/profile/upcoming-classes/${card.id}`}
                                        teacherLink={`/${userType}/tutor`}
                                    />
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardsGridContainer>
            <CardsGridContainer background="secondary" paddingTopVariant={2} paddingBottomVariant={2}>
                <RecommendedContainer
                    marginBottom={false}
                    title="Recorded Classes"
                    link={`/${userType}/profile/recorded-classes`}
                    data={recordedClasses}
                    cardTitleClick={toggleClassPurchaseDrawer}
                />
            </CardsGridContainer>
            <PageFooter background="secondary" />
        </NavigationMenu>
    );
};

export default UpcomingClassesPageContainer;
