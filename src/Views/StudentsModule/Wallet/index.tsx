import React, { FC } from 'react';
import WalletPageContainer from '../../../Containers/Pages/WalletPageContainer';

const Wallet: FC = () => {
    return (
        <WalletPageContainer
            userType="students"
            noActivity={false}
            data={{
                balance: 1.32,
                monthlySpent: 150,
                averageSpent: 1.38,
            }}
        />
    );
};

export default Wallet;
