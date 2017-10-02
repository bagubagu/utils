export const date2String = (value: Date) => {
    let tmpDate = value.getFullYear().toString();
    tmpDate += "-" + String("00" + (value.getMonth() + 1)).slice(-2);
    tmpDate += "-" + String("00" + value.getDate()).slice(-2);
    return tmpDate;

};
