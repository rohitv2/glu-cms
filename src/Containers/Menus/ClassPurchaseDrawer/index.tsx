import React, { FC, memo } from 'react';
import Drawer, { IDrawer } from '../../../components/Drawer';
import { Async, UserType } from '../../Pages/types';
import { PurchaseClassCardElement } from '../../../components/Cards/types';
import PurchaseClassCard from '../../../components/Cards/PurchaseClassCard';
import FullSizeLoader from '../../../components/Loaders/FullSizeLoader';

interface IClassPurchaseDrawer extends IDrawer, UserType, Async {
    purchased?: boolean;
    data: PurchaseClassCardElement;
    onLeave: () => void;
}

const ClassPurchaseDrawer: FC<IClassPurchaseDrawer> = ({
    open,
    onClose,
    userType,
    purchased,
    data,
    isLoading,
    onLeave,
}) => {
    return (
        <Drawer open={open} onClose={onClose} width="57vw">
            {isLoading && <FullSizeLoader blur={10} />}
            <PurchaseClassCard userType={userType} purchased={purchased} onLeave={onLeave} {...data} />
        </Drawer>
    );
};

export default memo(ClassPurchaseDrawer);
