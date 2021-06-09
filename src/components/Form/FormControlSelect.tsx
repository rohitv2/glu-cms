import React, { FC, memo } from 'react';
import classNames from 'classnames';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { ISelectOption, ISelectValue } from './types';

const useStyles = makeStyles({
    root: {
        width: ({ fullWidth }: any) => (fullWidth ? '100%' : 'fit-content'),
        height: 'fit-content',
    },
    rootColumn: {
        flexDirection: 'column',
    },
    rootRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        color: '#000',
        marginBottom: 0,
        fontSize: ({ fontSizeVariant }: any) => (fontSizeVariant === 1 ? '1rem' : '1.5625rem'),
        lineHeight: ({ fontSizeVariant }: any) => (fontSizeVariant === 1 ? '1' : '1.875rem'),
    },
    labelTop: {
        marginBottom: '0.6875rem',
    },
    labelLeft: {
        marginRight: '0.6875rem',
    },
    inputRoot: {
        flexGrow: 1,
        minWidth: 250,
        height: '2.75rem',
        cursor: 'default',
        '&::before': {
            display: 'none',
        },
        '&::after': {
            display: 'none',
        },
        '& .MuiSelect-select': {
            padding: ({ variant }: any) => (variant === 'underlined' ? 0 : '0 0.6875rem'),
            height: '100%',
            color: ({ value }: any) => (value ? '#000' : '#5F5F5F'),
            fontSize: ({ fontSizeVariant }: any) => (fontSizeVariant === 1 ? '1rem' : '1.5625rem'),
            lineHeight: ({ fontSizeVariant }: any) => (fontSizeVariant === 1 ? '1' : '1.875rem'),
            '&:focus': {
                background: 'inherit',
            },
        },
        '&.Mui-focused': {
            borderColor: '#000',
        },
        '& .MuiSelect-icon': {
            top: 'unset',
        },
    },
    inputRootUnderlined: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
    },
    inputRootOutlined: {
        border: '1px solid rgba(0, 0, 0, 0.25)',
        borderRadius: ({ rounded }: any) => (rounded ? 5 : 0),
    },
});

export type OnSelectChange = (e: React.ChangeEvent<any>) => void;

interface IFormControlSelect {
    name: string;
    value?: ISelectValue;
    label?: string;
    placeholder?: string;
    options: ISelectOption[];
    onChange: OnSelectChange;
    variant?: 'underlined' | 'outlined';
    rounded?: boolean;
    rootClassName?: string;
    inputRootClassName?: string;
    labelPlacement?: 'left' | 'top';
    labelClassName?: string;
    fullWidth?: boolean;
    fontSizeVariant?: 1 | 2;
}

const FormControlSelect: FC<IFormControlSelect> = ({
    name,
    value,
    label,
    options,
    onChange,
    variant,
    rounded,
    placeholder,
    rootClassName,
    inputRootClassName,
    labelPlacement,
    labelClassName,
    fullWidth,
    fontSizeVariant,
}) => {
    const classes = useStyles({ rounded, variant, value, fullWidth, fontSizeVariant });
    return (
        <Grid
            container
            className={classNames(classes.root, rootClassName, {
                [classes.rootColumn]: labelPlacement === 'top',
                [classes.rootRow]: labelPlacement === 'left',
            })}
        >
            {label && (
                <InputLabel
                    className={classNames(classes.label, labelClassName, {
                        [classes.labelTop]: labelPlacement === 'top',
                        [classes.labelLeft]: labelPlacement === 'left',
                    })}
                >
                    {label}
                </InputLabel>
            )}
            <Select
                name={name}
                native
                value={value}
                className={classNames(classes.inputRoot, inputRootClassName, {
                    [classes.inputRootUnderlined]: variant === 'underlined',
                    [classes.inputRootOutlined]: variant === 'outlined',
                })}
                IconComponent={() => {
                    return <i className="icon-Down" style={{ marginRight: '0.8rem' }} />;
                }}
                onChange={onChange}
            >
                {placeholder && (
                    <option value="" disabled>
                        {placeholder}
                    </option>
                )}
                {options.map(({ value, label }: ISelectOption, index) => (
                    <option value={value} key={index}>
                        {label}
                    </option>
                ))}
            </Select>
        </Grid>
    );
};

FormControlSelect.defaultProps = {
    options: [],
    onChange: () => {},
    variant: 'underlined',
    labelPlacement: 'top',
    fontSizeVariant: 1
};

export default memo(FormControlSelect);
