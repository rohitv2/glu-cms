import React, { FC, memo } from 'react';
import FeaturedCard from './FeaturedCard';
import ImageCard from './ImageCard';
import { FeaturedCardElement, TeacherLink } from './types';

interface IFeaturedTutorsCard extends FeaturedCardElement, TeacherLink {}

const FeaturedTutorsCard: FC<IFeaturedTutorsCard> = ({
    title = 'Featured Tutors',
    imgBig,
    imgBigTitle,
    imgBigSubtitle,
    imgSmall,
    imgSmallTitle,
    imgSmallSubtitle,
    teacherLink,
    imgBigId,
    imgSmallId,
}) => {
    return (
        <FeaturedCard title={title}>
            <ImageCard
                bigTitle
                imgAspectRatio="69%"
                title={imgSmallTitle}
                img={imgSmall}
                subTitle={imgSmallSubtitle}
                subTitleVariant={2}
                titleMarginBottomVariant={2}
                titleLinkTo={teacherLink}
                id={imgSmallId}
            />
            <ImageCard
                bigTitle
                imgAspectRatio="112%"
                title={imgBigTitle}
                img={imgBig}
                subTitle={imgBigSubtitle}
                subTitleVariant={2}
                titleMarginBottomVariant={2}
                titleLinkTo={teacherLink}
                id={imgBigId}
            />
        </FeaturedCard>
    );
};

export default memo(FeaturedTutorsCard);
