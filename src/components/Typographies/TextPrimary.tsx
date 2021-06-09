import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

const TextPrimary = withStyles({
    root: {
        fontSize: '1.5625rem',
        lineHeight: '1.875rem',
    },
})(Typography);

export default TextPrimary;
