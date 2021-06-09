import React from 'react';
import commonImg from '../../../Assets/images';
interface props {
    name: string;
}
const Header: React.FunctionComponent<props> = ({ name }) => {
    return (
        <>
            <div className="heading">
                <h2>{name}</h2>
            </div>
            <h2 className="profile">Profile Image</h2>
            <img src={commonImg.boyCropped} className="profile__image" />
            <div className="photo__box">
                <p className="instruction">Add a photo to your account</p>
                <button>Upload</button>
                <span className="max">Max size 50MB</span>
            </div>
            <div className="bio__box">
                <p className="bio__heading">Bio</p>
                <textarea className="bio__detail">
                    I’m Frank, a secondary Student at GEMS school in Dubai. Currently studying Maths, Business Studies
                    and History.
                </textarea>
            </div>
        </>
    );
};

export default Header;
