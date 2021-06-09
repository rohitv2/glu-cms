import React, { FC, ReactNode, memo } from 'react';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import { IconButtonProps } from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import makeStyles from '@material-ui/core/styles/makeStyles';
import InputLabel from '@material-ui/core/InputLabel';
import { KeyboardDatePicker, MuiPickersUtilsProvider, KeyboardTimePicker, TimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

const useStyles = makeStyles({
    root: {
        width: ({ fullWidth }: any) => (fullWidth ? '100%' : 'fit-content'),
        position: 'relative',
        
    },
    rootColumn: {
        flexDirection: 'column',
    },
    rootRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputRoot: {
        flexGrow: 1,
        minWidth: ({ fullWidth }: any) => (fullWidth ? 'auto' : 250),
        height: '2.75rem',
        '& input': {
            padding: 0,
            height: '100%',
            fontSize: ({ fontSizeVariant }: any) => (fontSizeVariant === 1 ? '1rem' : '1.5625rem'),
            lineHeight: ({ fontSizeVariant }: any) => (fontSizeVariant === 1 ? '1' : '1.875rem'),
        },
        '& .MuiInputBase-root': {
            height: '100%',
        },
        '& .MuiInput-underline:after': {
            display: 'none'
        },
        '& .MuiInput-underline:before': {
            display: 'none'
        }
    },
    inputRootUnderlined: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
        '&.Mui-focused': {
            borderBottom: '1px solid rgba(0, 0, 0, 1)',
        },
        '& .MuiInputBase-input': {
            paddingLeft: ({ icon }: any) => (icon ? 25 : 0),
        },
    },
    inputRootOutlined: {
        border: '1px solid rgba(0, 0, 0, 0.25)',
        borderRadius: ({ rounded }: any) => (rounded ? 5 : 0),
        '&.Mui-focused': {
            border: '1px solid rgba(0, 0, 0, 1)',
        },
        '& .MuiInputBase-input': {
            paddingLeft: ({ icon }: any) => (icon ? 35 : 10),
            paddingRight: 10,
        },
    },
    iconContainer: {
        position: 'absolute',
        width: 20,
        height: '100%',
        pointerEvents: 'none',
        '& svg': {
            display: 'block',
            width: 'inherit',
            height: 'inherit',
        },
    },
    iconContainerOutlined: {
        width: 35,
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '1px',
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
});

export type OnInputChange = (event: { target: { name: string; value: Date | string | null } }) => void;
type OnDateChange = (date: MaterialUiPickersDate, value?: string | null | undefined) => void

interface IFormControlInput {
    id: string;
    name: string;
    placeholder?: string;
    value: string | Date;
    type?: string;
    onChange?: OnInputChange;
    variant?: 'underlined' | 'outlined';
    rounded?: boolean;
    fullWidth?: boolean;
    icon?: ReactNode;
    label?: string;
    labelClassName?: string;
    labelPlacement?: 'left' | 'top';
    rootClassName?: string;
    inputRootClassName?: string;
    fontSizeVariant?: 1 | 2;
    date?: boolean;
    time?: boolean;
    timeKeyboard?: boolean;
    readOnly?: boolean;
    keyboardIcon?: ReactNode;
    KeyboardButtonProps?: IconButtonProps;
}

const FormControlInput: FC<IFormControlInput> = ({
    id,
    name,
    placeholder,
    value,
    type,
    onChange,
    variant,
    rounded,
    fullWidth,
    icon,
    label,
    labelClassName,
    labelPlacement,
    rootClassName,
    inputRootClassName,
    fontSizeVariant,
    date,
    time,
    timeKeyboard,
    readOnly,
    keyboardIcon,
    KeyboardButtonProps
}) => {
    const classes = useStyles({ icon, rounded, fullWidth, fontSizeVariant });

    const handleDateChange: OnDateChange = (e) => {
        if (onChange) {
            onChange({ target: { value: e, name } });
        }
    }

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
            {icon && (
                <Grid
                    item
                    container
                    alignItems="center"
                    className={classNames(classes.iconContainer, {
                        [classes.iconContainerOutlined]: variant === 'outlined',
                    })}
                >
                    {icon}
                </Grid>
            )}
            {date ? (
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        clearable
                        value={value}
                        placeholder={placeholder}
                        onChange={handleDateChange}
                        minDate={new Date()}
                        format="MM/dd/yyyy"
                        className={classNames(classes.inputRoot, inputRootClassName, {
                            [classes.inputRootUnderlined]: variant === 'underlined',
                            [classes.inputRootOutlined]: variant === 'outlined',
                        })}
                        InputProps={{
                            readOnly
                        }}
                        keyboardIcon={keyboardIcon}
                        KeyboardButtonProps={KeyboardButtonProps}
                        invalidDateMessage={null}
                        maxDateMessage={null}
                        minDateMessage={null}
                    />
                </MuiPickersUtilsProvider>
            ) : time ? (
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    {timeKeyboard ? (
                        <KeyboardTimePicker
                            value={value}
                            placeholder={placeholder}
                            onChange={handleDateChange}
                            mask="__:__ _M"
                            className={classNames(classes.inputRoot, inputRootClassName, {
                                [classes.inputRootUnderlined]: variant === 'underlined',
                                [classes.inputRootOutlined]: variant === 'outlined',
                            })}
                            invalidDateMessage={null}
                            maxDateMessage={null}
                            minDateMessage={null}
                        />
                    ) : (
                        <TimePicker
                            value={value}
                            placeholder={placeholder}
                            onChange={handleDateChange}
                            className={classNames(classes.inputRoot, inputRootClassName, {
                                [classes.inputRootUnderlined]: variant === 'underlined',
                                [classes.inputRootOutlined]: variant === 'outlined',
                            })}
                            invalidDateMessage={null}
                            maxDateMessage={null}
                            minDateMessage={null}
                        />
                    )}
                </MuiPickersUtilsProvider>
            ) : (
                <InputBase
                    id={id}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={classNames(classes.inputRoot, inputRootClassName, {
                        [classes.inputRootUnderlined]: variant === 'underlined',
                        [classes.inputRootOutlined]: variant === 'outlined',
                    })}
                />
            )}
        </Grid>
    );
};

FormControlInput.defaultProps = {
    onChange: () => {},
    variant: 'underlined',
    labelPlacement: 'top',
    fontSizeVariant: 1,
    type: 'text',
    timeKeyboard: true,
};

export default memo(FormControlInput);
