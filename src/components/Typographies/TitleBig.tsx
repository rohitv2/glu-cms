import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

const TitleBig = withStyles({
    root: {
        fontSize: '5rem',
        lineHeight: '5rem',
    },
})(Typography);

export default TitleBig;
