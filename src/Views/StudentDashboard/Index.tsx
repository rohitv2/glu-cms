import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { menus } from '../../Helper/menus';
import DashboardWrapper from '../../Containers/DashboardWrapper';
import ImageRow from './ImageRow';
import MadeBy from '../Footer/MadeBy';
import ContainerBox from './ContainerBox';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import MiddleBox from './MiddleBox';

const Index: React.FunctionComponent = () => {
    return (
        <NavigationMenu menuList={menus}>
            <div className="dashboard">
                <DashboardWrapper>
                    <ImageRow />
                    <MiddleBox />
                    <ContainerBox
                        title={`Calender`}
                        icon={<CalendarTodayIcon className="icon" />}
                        subtitle={`24th july 2020`}
                        className={`box1`}
                    />
                    <ContainerBox
                        title={`Calender`}
                        icon={<CalendarTodayIcon className="icon" />}
                        subtitle={`24th july 2020`}
                        className={`box2`}
                    />
                    <ContainerBox
                        title={`Calender`}
                        icon={<CalendarTodayIcon className="icon" />}
                        subtitle={`24th july 2020`}
                        className={`box3`}
                    />
                    <ContainerBox
                        title={`Calender`}
                        icon={<CalendarTodayIcon className="icon" />}
                        subtitle={`24th july 2020`}
                        className={`box4`}
                    />
                    <ContainerBox
                        title={`Calender`}
                        icon={<CalendarTodayIcon className="icon" />}
                        subtitle={`24th july 2020`}
                        className={`box5`}
                    />{' '}
                    <ContainerBox
                        title={`Calender`}
                        icon={<CalendarTodayIcon className="icon" />}
                        subtitle={`24th july 2020`}
                        className={`box6`}
                    />
                </DashboardWrapper>
                <div className="footer">
                    <MadeBy />
                </div>
            </div>
        </NavigationMenu>
    );
};

export default Index;
