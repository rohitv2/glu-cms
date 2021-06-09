import withStyles from '@material-ui/core/styles/withStyles';
import MuiTabs from '@material-ui/core/Tabs'
import MuiTab from '@material-ui/core/Tab'

export const Tabs = withStyles({
    root: {
        minHeight: 'fit-content',
        '& .MuiTabs-indicator': {
            display: 'none',
        },
    }
})(MuiTabs)

export const Tab = withStyles({
    root: {
        width: 'fit-content',
        height: 'fit-content',
        minWidth: 'fit-content',
        minHeight: 'fit-content',
        textTransform: 'unset',
        padding: 0
    }
})(MuiTab)
