import React from 'react';
import FixedNavigation from '../../Containers/FixedNavigation';
import NavigationMenu from '../../components/NavigationMenu';
import { menus } from '../../Helper/menus';

import DashboardWrapper from '../../Containers/DashboardWrapper';

import commonImg from '../../Assets/images';

interface props {
    name?: string;
    address?: string;
    phone?: string;
    email?: string;
}
const Section: React.FunctionComponent<props> = ({
    name = 'GEMS School',
    address = ' Dubai, UAE',
    phone = '(+971) 4 123 6987',
    email = 'gemsschool.ae',
}) => {
    return (
        <div className="school__info__section">
            <DashboardWrapper>
                <p className="heading">School Details</p>
                <div className="detail__box">
                    <p className="address">
                        The Villa
                        <br /> 28th Street,
                        <br /> Al Khail Street Al Nahda 1<br /> Dubai, UAE
                    </p>
                    <p className="about">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren.
                    </p>
                    <p className="more">Read more</p>
                    <div className="social__box">
                        <p className="social__heading">Instagram</p>
                        <p className="social__detail">@gem_uae</p>
                        <p className="social__heading">Instagram</p>
                        <p className="social__detail">@gem_uae</p>
                        <p className="social__heading">Instagram</p>
                        <p className="social__detail">@gem_uae</p>
                    </div>
                </div>
            </DashboardWrapper>
        </div>
    );
};
export default Section;
//
