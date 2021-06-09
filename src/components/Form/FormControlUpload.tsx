import React, { FC, memo, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ButtonPrimary from '../Button/ButtonPrimary';
import { mbToBytes } from '../../Helper/files';

const useStyles = makeStyles({
    button: {
        marginRight: '1.25rem',
    },
    text: {
        fontFamily: 'CircularXXMonoWeb-Regular',
    },
    choseOther: {
        paddingTop: '1rem',
    },
});

interface IFormControlUpload {
    max: number;
    onChange: (file: File) => void;
    value: File | null;
    onUploadClick?: () => void;
    isUploadButton?: boolean;
}

const FormControlUpload: FC<IFormControlUpload> = ({ max, onChange, value, onUploadClick, isUploadButton = true }) => {
    const classes = useStyles();

    const handleDrop = useCallback(
        (files) => {
            onChange(files[0]);
        },
        [onChange]
    );

    const { getInputProps, getRootProps } = useDropzone({
        onDrop: handleDrop,
        maxSize: mbToBytes(max),
        multiple: false,
    });

    const choseButton = (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            <ButtonPrimary variant="outlined" outlinedVariant={2} className={classes.button}>
                Chose
            </ButtonPrimary>
        </div>
    );

    return (
        <Grid container direction="column">
            <Grid container alignItems="center">
                {value && isUploadButton ? (
                    <div>
                        <ButtonPrimary
                            variant="outlined"
                            outlinedVariant={2}
                            className={classes.button}
                            onClick={onUploadClick}
                        >
                            Upload
                        </ButtonPrimary>
                    </div>
                ) : (
                    choseButton
                )}
                <Typography className={classes.text}>{value ? value.name : `Max size ${max}MB`}</Typography>
            </Grid>
            {value && isUploadButton && (
                <Grid container className={classes.choseOther}>
                    {choseButton}
                </Grid>
            )}
        </Grid>
    );
};

export default memo(FormControlUpload);
