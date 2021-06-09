import React, { useState } from 'react';
import { Button, Typography } from '@material-ui/core';
import OutlineBtn from './OutlineBtn';
import { colors } from '../../Styles/colors';
import { Publish } from '@material-ui/icons';

interface props {
    text: string;
    getFile: (value: any) => void;
    btnType?: string;
}
const UploadBtn: React.FunctionComponent<props> = ({ text, getFile, btnType }) => {
    const [filename, setFilename] = useState<File>();
    const input = React.useRef<HTMLInputElement>(null);
    const triggerInput = () => {
        if (null !== input.current) {
            input.current.click();
        }
    };

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const totalFile = (e.target as HTMLInputElement).files;
        if (totalFile) {
            getFile(totalFile[0]);
            setFilename(totalFile[0]);
        }
    };
    const getBtnType = () => {
        switch (btnType) {
            case 'inputBtn': {
                return (
                    <div className="upload-input-btn">
                        <div className="file-name-container">
                            <Typography className="filename">{filename ? filename.name : 'Choose File'}</Typography>
                        </div>
                        <Button onClick={triggerInput} className="upload-btn" endIcon={<Publish />}>
                            {text}
                        </Button>
                    </div>
                );
            }
            default: {
                return <OutlineBtn title={text} color={colors.primary} icon={<Publish />} trigger={triggerInput} />;
            }
        }
    };

    return (
        <>
            <input
                accept=".csv"
                style={{ display: 'none' }}
                id="contained-button-file"
                // multiple
                onChange={handleFile}
                type="file"
                ref={input}
            />
            <label style={{ width: '100%' }} htmlFor="contained-button-file">
                {getBtnType()}
            </label>
        </>
    );
};

UploadBtn.propTypes = {};
export default UploadBtn;
