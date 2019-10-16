export const sortArr = arr => {
    let arr1 = [...arr];
    arr1.sort((a,b) => a.price - b.price);
    return arr1;
};

export const sortQuickArr = arr => {
    let arr1 = [...arr];
    arr1.sort((a,b) => a.segments[0].duration - b.segments[0].duration);
    return arr1;
};