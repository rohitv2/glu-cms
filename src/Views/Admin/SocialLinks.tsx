import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import OutlineButton from '../../components/Button/OutlineButton';
import { adminContext } from './Admin';

const SocialLinks: React.FunctionComponent = () => {
    const context = useContext<any>(adminContext);
    return (
        <div className="social__media__container">
            <div className="row">
                <div className="col-md-12">
                    <TextField
                        className="line-input2"
                        label="Facebook"
                        value={context.socialLinks.facebook}
                        onChange={context.facebook}
                        fullWidth
                    />
                    <TextField
                        className="line-input2"
                        label="Twitter"
                        value={context.socialLinks.twitter}
                        onChange={context.twitter}
                        fullWidth
                    />
                    <TextField
                        className="line-input2"
                        label="Instagram"
                        value={context.socialLinks.instagram}
                        onChange={context.instagram}
                        fullWidth
                    />
                    <OutlineButton text="Add More" />
                </div>
            </div>
        </div>
    );
};

export default SocialLinks;
