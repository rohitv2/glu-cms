import React from 'react';
import { Box, makeStyles, Grid } from '@material-ui/core';
import commonImg from '../../Assets/images';

const useStyle = makeStyles(({
    parent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        width: '8rem',
        position: 'relative',
        marginTop: (props:any)=>props.mt,
        marginBottom: '4rem',
    },
    image: {
        width: '2rem',
        height: '2rem',
        borderRadius: '50%',
        position: 'absolute',
    },
}));

interface props{
    mt:any;
    studentList : any;
}
const ViewerOverlay: React.FC<props> = ({mt , studentList}) => {
    const [overlayData,setOverlayData] = React.useState([])
    React.useEffect(()=>{
        if(studentList!==undefined){
            setOverlayData(studentList)
        }
    },[studentList])

    const classes = useStyle({mt});
    return (
        <Box className={classes.parent} component="div">
            {overlayData && overlayData.map((overlay ,key)=>{
                if(key < 20){
                return(
                    <div>
                        <div style={{visibility: "hidden"}}>{key}</div>
                        <img style={{left:`${10*key}`}} className={classes.image} src={commonImg.blueshirtman} alt="" />
                    </div>
                )
                }
            })}

            {overlayData && overlayData.length > 20?
            <Grid
                style={{ left: 50, background: '#145DFF', color: '#fff', fontSize: '0.8rem', display: 'flex' }}
                className={classes.image}
                justify="center"
                alignItems="center"
            >
                20+
            </Grid>
            : ""}
        </Box>
    );
};

export default ViewerOverlay;
