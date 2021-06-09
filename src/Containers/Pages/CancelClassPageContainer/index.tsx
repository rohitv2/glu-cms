import React, { FC } from 'react';
import { UserType } from '../types';
import NavigationMenu from '../../../components/NavigationMenu';
import useMenuList, { useMenuOptions } from '../../../Hooks/useMenuList';
import LeftDrawerMenuContent from '../../Menus/LeftDrawerMenuContent';
import CardsGridContainer from '../../CardsGridContainer';
import CardsGrid from '../../CardsGrid';
import Grid from '@material-ui/core/Grid';
import TitlePrimary from '../../../components/Typographies/TitlePrimary';
import TitleBig from '../../../components/Typographies/TitleBig';
import TextPrimary from '../../../components/Typographies/TextPrimary';
import PageFooter from '../../../components/PageFooter';
import FullHeightContainer from '../../FullHeightContainer';
import makeStyles from '@material-ui/core/styles/makeStyles';
import FormGroup from '../../../components/Form/FormGroup';
import FormControlInput from '../../../components/Form/FormControlInput';
import ButtonPrimary from '../../../components/Button/ButtonPrimary';

const useStyles = makeStyles({
    titleContainer: {
        marginBottom: '2.5rem',
    },
    subTitle: {
        fontSize: '1.25rem',
        lineHeight: '1.5625rem',
    },
    subTitleContainer: {
        marginBottom: '5.75rem',
    },
});

interface ICancelClassPageContainer extends UserType {}

const CancelClassPageContainer: FC<ICancelClassPageContainer> = ({ userType }) => {
    const classes = useStyles();
    const menuList = useMenuList(userType);
    const menuOptions = useMenuOptions(userType);
    return (
        <NavigationMenu
            absolute
            userType={userType}
            menuList={menuList}
            LeftDrawerMenuComponent={<LeftDrawerMenuContent userType={userType} />}
            {...menuOptions}
        >
            <FullHeightContainer direction="column" justify="space-between">
                <CardsGridContainer>
                    <CardsGrid rows={2}>
                        <Grid container direction="column">
                            <TitlePrimary>Cancel Class</TitlePrimary>
                        </Grid>
                        <Grid container direction="column">
                            <Grid container className={classes.titleContainer}>
                                <TitleBig>
                                    Igneous, Sedimentary, and Metamorphic rocks.
                                    <br />
                                    Geography
                                </TitleBig>
                            </Grid>
                            <Grid container direction="column" className={classes.subTitleContainer}>
                                <TextPrimary className={classes.subTitle}>
                                    If cancelling within 48 hours prior to class, you will get a 50% refund.
                                </TextPrimary>
                                <TextPrimary className={classes.subTitle}>
                                    If cancelling within 24 hours prior to class, you will not receive a refund.
                                </TextPrimary>
                            </Grid>
                            <Grid container direction="column" item xs={10}>
                                <FormGroup>
                                    <FormControlInput
                                        fullWidth
                                        fontSizeVariant={2}
                                        id="cancel-class-reason"
                                        name="reason"
                                        label="Reason for cancelling"
                                        value=""
                                        onChange={() => {}}
                                    />
                                </FormGroup>
                                <ButtonPrimary variant="outlined" outlinedVariant={2}>
                                    Cancel class
                                </ButtonPrimary>
                            </Grid>
                        </Grid>
                    </CardsGrid>
                </CardsGridContainer>
                <PageFooter />
            </FullHeightContainer>
        </NavigationMenu>
    );
};

export default CancelClassPageContainer;
