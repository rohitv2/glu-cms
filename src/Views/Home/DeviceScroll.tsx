import React, { createRef, useEffect } from 'react';
import commonImg from '../../Assets/images';

interface props {
    image?: string;
    containerName?: string;
}
const DeviceScroll: React.FunctionComponent<props> = ({ image, containerName }) => {
    const device = createRef<HTMLImageElement>();
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const deviceContainer = document.querySelector(`#${containerName}`);
            const bounding: any = deviceContainer?.getBoundingClientRect();
            if (bounding !== null && bounding !== undefined) {
                const winwowHeight = window.innerHeight || document.documentElement.clientHeight;
                if (winwowHeight - bounding.top >= 400 && bounding.bottom > 0) {
                    let scrollAt = bounding.top - winwowHeight + 400;
                    (device as any).current.style.cssText = `will-change: transform;
                transform: translate3d(0px, ${scrollAt}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                transform-style: preserve-3d;`;
                }
            }
        });
    }, []);

    return (
        <div id={containerName} className="device__animation">
            <div className="device__mask__container">
                <img className="mask" src={commonImg.deviceMask} alt="" />
                <div className="taskbar__container">
                    <img className="taskbar" src={commonImg.deviceTaskbar} alt="" />
                </div>
            </div>
            <div className="device__container">
                <img ref={device} src={image} alt="" />
            </div>
        </div>
    );
};

export default DeviceScroll;
