import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import classNames from 'classnames';
import { downloadResource } from '../Helper/files';
import LinkOpnerButton from './Button/LinkOpnerButton';

const useStyles = makeStyles({
    download: {
        cursor: 'pointer',
        '&:hover': {
            textDecoration: ({ underlined }: any) => (underlined ? 'underline' : ''),
        },
        transform: 'translateY(-54px)',
    },
});

interface props {
    title?: string;
    subtitle?: string;
    resource?: string;
}

const ResourcesTableComponent: React.FunctionComponent<props> = ({ title, subtitle, resource = '' }) => {
    const [isPending, setPending] = useState(false);
    const [isFailed, setFailed] = useState(false);
    const classes = useStyles({ underlined: !isPending && !isFailed });

    const handleDownload = () => {
        if (resource && !isPending) {
            setPending(true);
            downloadResource(
                resource,
                () => {
                    setPending(false);
                },
                () => {
                    setPending(false);
                    setFailed(true);
                }
            );
        }
    };

    return (
        <>
            <div className="resources_table_component">
                <div className="col-md-12">
                    <Typography className="resources_text">
                        <LinkOpnerButton fontSize="1.5625rem" lineHeight="2rem" width="100%" linkName={resource} />
                    </Typography>
                    <Typography className={classNames('resources_subtext', classes.download)} onClick={handleDownload}>
                        {isPending ? 'Downloading...' : isFailed ? 'Failed' : subtitle}
                    </Typography>
                </div>
            </div>
        </>
    );
};

export default ResourcesTableComponent;
