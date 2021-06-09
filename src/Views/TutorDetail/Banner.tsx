import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import commonImg from '../../Assets/images';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';
import IconTextRow from '../../components/IconTextRow';

const Banner: React.FunctionComponent = () => {
    const menu = [
        { link: '', name: 'Home' },
        { link: '', name: 'Dashboard' },
        { link: '', name: 'Subjects' },
        { link: '', name: 'Messages' },
    ];
    return (
        <NavigationMenu menuList={menu} customClass="banner__links">
            <div className="banner">
                <img src={commonImg.orangetopgirlcrop} className="banner__image" alt="girl" />
                <div className="banner__heading">
                    <h1 className="banner__heading__text">
                        Ray Smith <br /> Maths Tutor
                    </h1>
                    <IconTextRow icon={<FavoriteBorderIcon />} title="favourite" />
                </div>
                <div className="banner__rating">
                    <h1 className="banner__rating__text">Grade: Primary, Secondary</h1>
                    <div className="banner__rating__icon">
                        <IconTextRow icon={<StarIcon />} title="5/5" />
                    </div>
                </div>
            </div>
        </NavigationMenu>
    );
};

export default Banner;
