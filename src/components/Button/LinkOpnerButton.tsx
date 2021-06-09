import { makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles({
    title: {
        fontSize: (props: any) => (props.fontSize ? props.fontSize : ' 1rem'),
        lineHeight: (props: any) => (props.lineHeight ? props.lineHeight : '1rem !important'),
        cursor: 'pointer',
        maxWidth: (props: any) => (props.width ? props.width : '80%'),
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
});

interface props {
    linkName?: string;
    exClassName?: string;
    style?: any;
    width?: string;
    fontSize?: string;
    lineHeight?: string;
}

const LinkOpnerButton: React.FC<props> = ({ linkName, exClassName, width, fontSize, lineHeight, ...props }) => {
    const [fileName, setFileName] = useState('');
    useEffect(() => {
        if (linkName) {
            const splittedLink = linkName.split('/');
            setFileName(splittedLink[splittedLink.length - 1]);
        }

    }, [linkName]);
    const classes = useStyles({ width, fontSize, lineHeight });
    const openLink = () => {
        window.open(linkName, '_blank');
    };
    return (
        <Typography className={`${classes.title} ${exClassName}`} {...props} onClick={openLink}>
            {fileName}
        </Typography>
    );
};

export default LinkOpnerButton;
