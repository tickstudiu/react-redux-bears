import { toast } from 'react-toastify';

export const errorNotify = (msg) => {
    return toast.error(msg);
};

export const warningNotify = (msg) => {
    return toast.warn(msg);
};


export const successNotify = (msg) => {
    return toast.success(msg);
};


export const infoNotify = (msg) => {
    return toast.info(msg);
};