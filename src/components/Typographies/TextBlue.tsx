import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { colors } from '../../Styles/colors';

const TextBlue = withStyles({
    root: {
        fontSize: '1.25rem',
        lineHeight: '1.25rem',
        cursor: 'pointer',
        color: colors.primary
    }
})(Typography)

export default TextBlue
