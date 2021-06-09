import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, IconButton, Grid } from '@material-ui/core';
// import { v4 as uuidv4 } from 'uuid';
// import { Search, Menu } from '@material-ui/icons';
import commonImg from '../Assets/images';
export const BigMenu=()=>{
    return(
        <div className="big_menu">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <div>
                            <Typography className="big_menu_title" >Academic</Typography>
                            <div className="big_menu_items">
                                <li className="big_menu_item">Maths</li>
                                <li className="big_menu_item">Science</li>
                                <li className="big_menu_item">Physics</li>
                                <li className="big_menu_item">Chemistry</li>
                                <li className="big_menu_item">Biology</li>
                                <li className="big_menu_item">Business Studies</li>
                                <li className="big_menu_item">Languages</li>
                                <li className="big_menu_item">Religious Education</li>
                                <li className="big_menu_item">English</li>
                                <li className="big_menu_item">Geography</li>
                                <li className="big_menu_item">History</li>
                            </div>
                            <Link to="" className="big_menu_see_more_link">See all</Link>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <div>
                            <Typography className="big_menu_title" style={{paddingTop:25}}>{' '}</Typography>
                            <div className="big_menu_items">
                                <li className="big_menu_item">Design Technology</li>
                                <li className="big_menu_item">Computer Science</li>
                                <li className="big_menu_item">ICT</li>
                                <li className="big_menu_item">Art</li>
                                <li className="big_menu_item">Drama</li>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <div>
                            <Typography className="big_menu_title" >Extra Circular</Typography>
                            <div className="big_menu_items">
                                <li className="big_menu_item">Boxing</li>
                                <li className="big_menu_item">Football</li>
                                <li className="big_menu_item">Rugby</li>
                                <li className="big_menu_item">Basketball</li>
                                <li className="big_menu_item">Code</li>
                                <li className="big_menu_item">Gaming</li>
                                <li className="big_menu_item">Film</li>
                                <li className="big_menu_item">Photography</li>
                                <li className="big_menu_item">Painting</li>
                                <li className="big_menu_item">Mechanics</li>
                                <li className="big_menu_item">Astronomy</li>
                            </div>
                            <Link to="" className="big_menu_see_more_link">See all</Link>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <div className="border_left_featured">
                            <Typography className="big_menu_title">Featured</Typography>
                            <div className="big_menu_items">
                                <div className="big_menu_feature_img_container">
                                    <img src={commonImg.orangetopgirlcrop} className="big_menu_feature_img" />
                                </div>
                                <div>
                                    <h3 className="big_menu_feature_title">Skateboarding. Charlie Ray</h3>
                                    <p className="big_menu_feature_subtitle">AED200 / 45mins</p>
                                </div>
                            </div>
                            <Link to="" className="big_menu_see_more_link">See</Link>
                        </div>
                    </Grid>
                   
                </Grid>
            </div>
    )
}