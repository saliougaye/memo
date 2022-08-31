import dayjs from 'dayjs';

export const getMemoDate = (date: Date) => {

    const parsedDate = dayjs(date);

    if(parsedDate.year() !== dayjs().year()) {
        return parsedDate.format('DD/MM/YYYY HH:mm');
    }

    return parsedDate.format('DD/MM HH:mm');
}