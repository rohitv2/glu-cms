import { useCallback, useMemo, useState } from 'react';
import { PurchaseDrawerPage } from '../../Containers/Pages/types';
import { ClassType } from '../../Types';
import { purchaseClass } from '../../data/homepage';
import usePreviousClasses from './usePreviousClasses';
import { isRecorded, isUpcoming } from '../../Helper/compare';

export type OpenPurchaseDrawer = (type: ClassType, id: number) => void;

interface IUsePurchaseDrawer extends PurchaseDrawerPage {}

function usePurchaseDrawer(): IUsePurchaseDrawer {
    const [isOpen, setOpen] = useState(false);
    const [type, setType] = useState<ClassType>('recorded');
    const {
        getIndividualClass: getPreviousIndividualClass,
        individualClass: previousIndividualClass,
        clearIndividualClass: clearPreviousIndividualClass,
    } = usePreviousClasses();

    const handleOpen: OpenPurchaseDrawer = useCallback((type, id) => {
        setOpen(true);
        setType(type);
        if (isRecorded(type)) {
            getPreviousIndividualClass(id);
        }
        if (isUpcoming(type)) {
            // TODO getUpcomingIndividualClass(id)
        }
    }, []);

    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);

    const purchaseCard = useMemo(() => (isRecorded(type) ? previousIndividualClass.purchaseCard : purchaseClass), [
        type,
        previousIndividualClass,
    ]);

    const isLoading = previousIndividualClass.isPending;

    const handleLeave = isRecorded(type) ? clearPreviousIndividualClass : () => {}

    return useMemo(
        () => ({
            type,
            isOpen,
            isLoading,
            purchaseCard,
            onOpen: handleOpen,
            onClose: handleClose,
            onLeave: handleLeave,
        }),
        [type, isOpen, handleClose, handleOpen, purchaseCard, isLoading]
    );
}

export default usePurchaseDrawer;
