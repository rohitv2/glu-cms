import React from 'react';
import SchoolInfoHeader from './SchoolInfoHeader';
import SchoolInfoBody from './SchoolInfoBody';
import PageFooter from '../../components/PageFooter';

import { makeStyles } from '@material-ui/core';
import NavigationMenu from '../../components/NavigationMenu';

const useStyles = makeStyles({
    footer: {
        textAlign: 'center',
        marginTop: '3rem',
    },
});
const SchoolInfo = () => {
    const classes = useStyles();

    return (
        <div>
            <NavigationMenu background="secondary">
                <SchoolInfoHeader />
                <SchoolInfoBody />
                <div className="commonFooter" style={{ padding: '0 3rem' }}>
                    <PageFooter padding={false} />
                </div>
            </NavigationMenu>
        </div>
    );
};

export default SchoolInfo;
