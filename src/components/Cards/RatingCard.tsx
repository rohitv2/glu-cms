import React, { FC } from 'react';
import classNames from 'classnames';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
    icon: {
        fontSize: '0.85em',
    },
});

interface IRatingCard {
    rating: string;
    rootClassName?: string;
    rightSpace?: boolean;
    leftSpace?: boolean;
    iconPlacement?: 'right' | 'left';
}

const RatingCard: FC<IRatingCard> = ({ rating, rootClassName, rightSpace, leftSpace, iconPlacement }) => {
    const classes = useStyles();
    return (
        <span className={rootClassName}>
            {leftSpace && ' '}
            {iconPlacement === 'right' && rating + ' '}
            {<i className={classNames('icon-Star_3', classes.icon)}/>}
            {iconPlacement === 'left' && ' ' + rating}
            {rightSpace && '   '}
        </span>
    );
};

RatingCard.defaultProps = {
    rightSpace: true,
    leftSpace: false,
    iconPlacement: 'left'
}

export default RatingCard;
