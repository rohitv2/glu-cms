import React, { useContext } from 'react';
import UserDetailsForm from './UserDetailsForm';
import OutlineButton from '../../components/Button/OutlineButton';
import { registerContext } from './Index';

interface props {
    handler: () => void;
}
const ParentChildren: React.FunctionComponent<props> = ({ handler }) => {
    const context = useContext(registerContext);
    const handleSfirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const data = { ...context.state };
        data.parent.childs[data.parent.childs.length - 1] = {
            ...context.state.parent.childs[data.parent.childs.length - 1],
            firstName: e.target.value,
        };
        context.setState(data);
    };
    const handleSlastName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const data = { ...context.state };
        data.parent.childs[data.parent.childs.length - 1] = {
            ...context.state.parent.childs[data.parent.childs.length - 1],
            lastName: e.target.value,
        };
        context.setState(data);
    };
    const handleSemailName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const data = { ...context.state };
        data.parent.childs[data.parent.childs.length - 1] = {
            ...context.state.parent.childs[data.parent.childs.length - 1],
            email: e.target.value,
        };
        context.setState(data);
    };
    const handleSphoneCode = (e: React.SyntheticEvent<any>) => {
        const data = { ...context.state };
        data.parent.childs[data.parent.childs.length - 1] = {
            ...context.state.parent.childs[data.parent.childs.length - 1],
            phoneCode: (e.target as any).value,
        };
        context.setState(data);
    };

    const handleSPhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        const data = { ...context.state };
        data.parent.childs[data.parent.childs.length - 1] = {
            ...context.state.parent.childs[data.parent.childs.length - 1],
            phoneNum: e.target.value,
        };
        context.setState(data);
    };
    const handleSlocation = (e: React.ChangeEvent<HTMLInputElement>) => {
        const data = { ...context.state };
        data.parent.childs[data.parent.childs.length - 1] = {
            ...context.state.parent.childs[data.parent.childs.length - 1],
            location: e.target.value,
        };
        context.setState(data);
    };
    return (
        <div className="info__container">
            <UserDetailsForm
                firstName={context.state.parent.childs[context.state.parent.childs.length - 1].firstName}
                handleFirstName={handleSfirstName}
                lastName={context.state.parent.childs[context.state.parent.childs.length - 1].lastName}
                handleLastName={handleSlastName}
                email={context.state.parent.childs[context.state.parent.childs.length - 1].email}
                handleEmail={handleSemailName}
                mobilePre={context.state.parent.childs[context.state.parent.childs.length - 1].phoneCode}
                handleMobilePre={handleSphoneCode}
                mobile={context.state.parent.childs[context.state.parent.childs.length - 1].mobile}
                handleMobile={handleSPhoneNumber}
                location={context.state.parent.childs[context.state.parent.childs.length - 1].location}
                handleLocation={handleSlocation}
            />
            <div className="mb-4"></div>

            <OutlineButton text="Add" width="10rem" btnClick={handler} />
            <div>
                <OutlineButton text="Next" width="10rem" mt="4rem" btnClick={context.goNext} />
            </div>
        </div>
    );
};

export default ParentChildren;
