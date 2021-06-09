import React, { useContext } from 'react';
import Identity from './Identity';
import UploadMaxSize from '../../components/Button/UploadMaxSize';
import { registerContext } from './Index';
import OutlineButton from '../../components/Button/OutlineButton';
import { makeStyles } from '@material-ui/core';
import { colors } from '../../Styles/colors';

const useStyles = makeStyles({
    ml: {
        marginLeft: '4rem',
    },
});

const IdentyCard = () => {
    const classes = useStyles();
    const context = useContext(registerContext);
    const handleUpload = (file: File) => {
        const data = { ...context.state };
        data.teacher.file = file;
        context.setState(data);
    };

    return (
        <div>
            <Identity />
            <div className={classes.ml}>
                <UploadMaxSize
                    fileName={context.state.teacher.file ? context.state.teacher.file?.name : 'Max file size 5MB'}
                    width="10rem"
                    onClick={handleUpload}
                />
                <OutlineButton text="Next" width="10rem" mt="3rem" btnClick={context.goNext} />
            </div>
        </div>
    );
};

export default IdentyCard;
