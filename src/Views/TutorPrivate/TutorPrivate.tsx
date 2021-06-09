import React from 'react';
import NavigationMenu from '../../components/NavigationMenu';
import { Typography, TextField } from '@material-ui/core';
import commonImg from '../../Assets/images'
import PageFooter from '../../components/PageFooter';
import useMenuList from '../../Hooks/useMenuList';

const TutorRecord: React.FunctionComponent = () => {
    const menu = useMenuList('tutor')
    return (
        <NavigationMenu menuList={menu} showBurgerNav={'hide'} tutorOptions={"show"} reverseButtons={'yes'} background="secondary">
            <div className="private_tutor_page">
            <div className="reusable_private_tutor_banner">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6 p-0">
                            <Typography className="tutor_private_text">Frank Howard</Typography></div>
                        <div className="col-6 p-0">
                            <div className="private_tutor_right_container">
                                <img src={commonImg.boyCropped}  width="393px" height="393px" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="private_tutor_container_2">
                        <div className="row">
                            <div className="col-md-6 order-md-1 order-2 p-0">
                                <div className="text1">
                                    <Typography className="tutor_private_text">12/08/20</Typography>
                                    <Typography className="tutor_private_text"> 10.30am-<br></br>12pm</Typography>
                                    </div>
                            </div>
                            <div className="col-md-6 order-md-2 order-1 p-0">
                                    <div className="private_tutor_right_container_2">
                
                                        <div className="firstText">
                                        <Typography className="private_tutor_bigtext">Chemistry.</Typography>
                                        <Typography className="private_tutor_bigtext">(+971) 4 554 0350</Typography>
                                        </div>
                                        <div className="secondText">
                                            <div className="smalltext1">
                                        <Typography className="private_tutor_smalltext">Reschedule</Typography>
                                        </div>
                                        <div className="smalltext2">
                                        <Typography className="private_tutor_smalltext">Cancel</Typography>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="commonFooter">
                    <PageFooter padding={false}/>
                </div>
            </div>
            
            </div>
              
          
        </NavigationMenu>
    );
};

export default TutorRecord;
