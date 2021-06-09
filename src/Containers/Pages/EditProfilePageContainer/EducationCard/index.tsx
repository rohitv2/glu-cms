import React, { FC } from 'react';
import classNames from 'classnames';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import TextPrimary from '../../../../components/Typographies/TextPrimary';
import ButtonPrimary from '../../../../components/Button/ButtonPrimary';
import TitlePrimary from '../../../../components/Typographies/TitlePrimary';
import { EducationCardElement } from '../../../../components/Cards/types';
import useToggle from '../../../../Hooks/useToggle';
import EditForm from './EditForm';
import { OnEducationEdit } from '../index';

const useStyles = makeStyles({
    root: {
        padding: '3.125rem 0',
        borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
        '&:last-child': {
            borderBottom: 0,
        },
    },
    button: {
        fontSize: '1.25rem',
        marginRight: '1.875rem',
        '&:last-child': {
            marginRight: 0,
        },
    },
    titleContainer: {
        marginBottom: '1.5625rem',
    },
});

interface IEducationCard extends EducationCardElement {
    rootClassName?: string;
    actions?: boolean;
    onDelete?: (id: number) => void;
    onEdit?: OnEducationEdit;
}

const EducationCard: FC<IEducationCard> = ({
    id,
    type,
    name,
    level,
    subjects,
    rootClassName,
    actions = true,
    onDelete = () => {},
    onEdit = () => {},
    formData,
}) => {
    const [isEdit, toggleEdit] = useToggle(false);
    const classes = useStyles();

    if (isEdit) {
        return <EditForm id={id} toggleEdit={toggleEdit} formData={formData} onSave={onEdit} />
    }

    return (
        <Grid container direction="column" className={classNames(classes.root, rootClassName)}>
            <Grid container justify="space-between" className={classes.titleContainer}>
                <TextPrimary>{type === 'current' ? 'Current Education' : 'Previous Education'}</TextPrimary>
                {actions && (
                    <Grid container justify="flex-end" item xs={6}>
                        <ButtonPrimary color="secondary" className={classes.button} onClick={toggleEdit}>
                            Edit
                        </ButtonPrimary>
                        <ButtonPrimary color="secondary" className={classes.button} onClick={() => onDelete(id)}>
                            Delete
                        </ButtonPrimary>
                    </Grid>
                )}
            </Grid>
            <Grid container direction="column">
                <TitlePrimary>{name}</TitlePrimary>
                <TitlePrimary>{level}</TitlePrimary>
                <TitlePrimary>{subjects}</TitlePrimary>
            </Grid>
        </Grid>
    );
};

export default EducationCard;
