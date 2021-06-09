import React, { FC } from 'react';
import { UserType } from '../types';
import useMenuList from '../../../Hooks/useMenuList';
import NavigationMenu from '../../../components/NavigationMenu';
import LeftDrawerMenuContent from '../../Menus/LeftDrawerMenuContent';
import CardsGridContainer from '../../CardsGridContainer';
import CardsGrid from '../../CardsGrid';
import Grid from '@material-ui/core/Grid';
import TitlePrimary from '../../../components/Typographies/TitlePrimary';
import TitleBig from '../../../components/Typographies/TitleBig';
import AspectRatioImgCard from '../../../components/Cards/AspectRationImgCard';
import Search from './Search';
import Cards from './Cards';
import ColumnsContainer from '../../ColumnsContainer';
import FAQAccordion from './FAQAccordion';
import { faq } from '../../../data/help';
import PageFooter from '../../../components/PageFooter';

interface IHelpSupportPageContainer extends UserType {}

const HelpSupportPageContainer: FC<IHelpSupportPageContainer> = ({ userType }) => {
    const menuList = useMenuList(userType);
    return (
        <NavigationMenu
            absolute
            background="secondary"
            menuList={menuList}
            userType={userType}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
        >
            <CardsGridContainer background="secondary">
                <CardsGrid rows={2}>
                    <Grid container direction="column">
                        <TitlePrimary>
                            Help &<br />
                            Support
                        </TitlePrimary>
                    </Grid>
                    <Grid container direction="column">
                        <TitleBig>Ask us anything and we’ll do our best to find you answers</TitleBig>
                        <Grid container>
                            <Grid container item xs={8}>
                                <AspectRatioImgCard
                                    ratio="80%"
                                    img="https://res.cloudinary.com/ddwbbzuxw/image/upload/v1599028758/supportPageBoy_kn0wdj.png"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </CardsGrid>
            </CardsGridContainer>
            <CardsGridContainer paddingBottom={false}>
                <Search />
            </CardsGridContainer>
            <CardsGridContainer paddingBottom={false}>
                <Cards />
            </CardsGridContainer>
            <CardsGridContainer>
                <ColumnsContainer
                    leftContent={
                        <Grid container>
                            <TitlePrimary>FAQs</TitlePrimary>
                        </Grid>
                    }
                    rightContent={
                        <Grid container direction="column">
                            {faq.map((accordion, index) => (
                                <FAQAccordion key={index} {...accordion} />
                            ))}
                        </Grid>
                    }
                />
            </CardsGridContainer>
            <PageFooter />
        </NavigationMenu>
    );
};

export default HelpSupportPageContainer;
