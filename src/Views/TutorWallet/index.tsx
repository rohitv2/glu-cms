import React, { FC } from 'react';
import WalletPageContainer from '../../Containers/Pages/WalletPageContainer';

const TutorWallet: FC = () => {
    return (
        <WalletPageContainer
            userType="tutor"
            noActivity={false}
            data={{
                balance: 1.32,
                monthlyIncome: 150,
                monthlySpent: 150,
                averageIncome: 1.38,
                averageSpent: 1.38,
            }}
        />
    );
};

export default TutorWallet;
