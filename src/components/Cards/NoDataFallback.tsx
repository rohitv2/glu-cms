import React, { FC, ReactNode, Fragment } from 'react';
import TextPrimary from '../Typographies/TextPrimary';

interface INoDataFallback {
    condition: boolean;
    children: ReactNode;
}

const NoDataFallback: FC<INoDataFallback> = ({ children, condition }) => {
    return <Fragment>{condition ? children : <TextPrimary>No data</TextPrimary>}</Fragment>;
};

export default NoDataFallback;
