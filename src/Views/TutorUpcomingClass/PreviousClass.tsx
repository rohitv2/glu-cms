import React from 'react';
import { makeStyles, Typography, Grid } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import { Link, useHistory } from 'react-router-dom';
import ImageThumbnail from '../../components/ImageThumbnail';

const useStyles = makeStyles({
    imageBox: {
        marginBottom: '3.125rem',
        width: '100%',
    },
    imgg: {},
    headerText: {
        fontSize: '2.625rem',
        display: 'inline-block',
        lineHeight: 1,
        marginBottom: '1.875rem',
        marginTop: '5.25rem',
        fontFamily: 'CircularXXWeb-Book',
    },
    upload: {
        fontSize: '1.25rem',
        width: '9.375rem',
        height: '2.5rem',
        paddingTop: '4.1px',
        paddingBottom: '0.5625rem',
        marginBottom: '1.875rem',
        marginTop: '5.25rem',
        boxSizing: 'border-box',
        display: 'inline-block',
        textAlign: 'right',
        fontFamily: 'CircularXXWeb-Book',
    },
    mainBox: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    textBox: {
        fontSize: '1.5625rem',
        width: 'inherit',
        fontFamily: 'CircularXXWeb-Book',
        lineHeight: 1,
        marginTop: '1.3125rem',
    },
    rating: {
        color: '#5F5F5F',
        fontSize: '1.3125rem',
        marginTop: '0.5rem',
    },
    img: {
        width: '100%',
        height: '25vw'
    },
});
interface props {
    previousClasses?: any;
}

const PreviousClass: React.FC<props> = ({ previousClasses }) => {
    const classes = useStyles();
    const routes = useHistory();
    const handleRecordClasses = (data:any) => {
            routes.push({
                pathname: '/tutor/my-class/edit',
                state: {
                    record: data,
                },
            });
    }
    return (
        <div>
            <div className={classes.mainBox}>
                <Typography className={classes.headerText}>Previous Classes</Typography>
                <Link
                    to="/tutor/my-classes"
                    className={classes.upload}
                    style={{ textDecoration: 'none', color: 'black' }}
                >
                    See all
                </Link>
            </div>
            <Grid container spacing={4}>
                {previousClasses.map((item: any, i: number) => (
                    <Grid key={i} item xs={12} sm={6} md={4} lg={3} onClick={()=> handleRecordClasses(item)}>
                        <div className={classes.imageBox}>
                            <div className={classes.imgg}>
                                <ImageThumbnail image={item.img}/>
                                {/* <img src={item.img} alt="sedimentary rocks" className={classes.img} /> */}
                            </div>
                            <div className={classes.textBox}>
                                <div className={classes.textBox}>{item.title}</div>
                                <div className={classes.rating}>
                                    <div style={{ transform: 'translateY(-3.5px)', display: 'inline-block' }}>
                                        <StarIcon fontSize="small" />
                                    </div>
                                    {item.subtitle}
                                </div>
                            </div>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default PreviousClass;
