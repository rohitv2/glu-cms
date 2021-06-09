import React from 'react';
import ImageOverlay from '../../components/ImageOverlay';
import commonImg from '../../Assets/images';

const ImageOverlayContainer: React.FunctionComponent = () => {
    return (
        <div className="full__width__image">
        <ImageOverlay image={commonImg.laptopbesideman} leftText="Sarah Frost" title="AED200 / 45mins" msg={<>Maths. <br/> An introduction to <br/> trigonometry</>}/>
        </div>
    );
}

export default ImageOverlayContainer;
