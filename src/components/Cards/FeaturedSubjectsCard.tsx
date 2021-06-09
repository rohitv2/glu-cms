import React, { FC, memo } from 'react';
import ImageCard from './ImageCard';
import FeaturedCard from './FeaturedCard';
import { FeaturedCardElement } from './types';

interface IFeaturedSubjectsCard extends FeaturedCardElement {}

const FeaturedSubjectsCard: FC<IFeaturedSubjectsCard> = ({ imgBig, imgBigTitle, imgSmall, imgSmallTitle }) => {
    return (
        <FeaturedCard title="Featured Subjects">
            <ImageCard bigTitle imgAspectRatio="112%" title={imgBigTitle} img={imgBig} />
            <ImageCard bigTitle imgAspectRatio="69%" title={imgSmallTitle} img={imgSmall} />
        </FeaturedCard>
    );
};

export default memo(FeaturedSubjectsCard);
