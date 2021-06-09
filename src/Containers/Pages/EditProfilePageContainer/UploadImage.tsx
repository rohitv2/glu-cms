import React, { FC, useCallback } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import AspectRatioImgCard from '../../../components/Cards/AspectRationImgCard';
import TextPrimary from '../../../components/Typographies/TextPrimary';
import FormControlUpload from '../../../components/Form/FormControlUpload';

const useStyles = makeStyles({
    imgContainer: {
        width: '11.5rem',
    },
    infoContainer: {
        maxWidth: 'calc(100% - 11.5rem)',
        flexGrow: 1,
        paddingLeft: '3.125rem',
    },
    title: {
        lineHeight: '1rem',
        marginBottom: '1.5625rem',
    },
});

interface IUploadImage {
    value: string;
    onSelect: (file: File) => void;
    selectedFile: File | null;
    onUploadClick: () => void;
}

const UploadImage: FC<IUploadImage> = ({ value, onSelect, selectedFile, onUploadClick }) => {
    const classes = useStyles();

    const handleSelect = useCallback(
        (file: File) => {
            onSelect(file);
        },
        [onSelect]
    );

    return (
        <Grid container>
            <Grid container className={classes.imgContainer}>
                <AspectRatioImgCard ratio="100%" img={value} />
            </Grid>
            <Grid container className={classes.infoContainer}>
                <Grid container direction="column">
                    <TextPrimary className={classes.title}>Add a photo to your account</TextPrimary>
                    <FormControlUpload
                        max={50}
                        onChange={handleSelect}
                        value={selectedFile}
                        onUploadClick={onUploadClick}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default UploadImage;
