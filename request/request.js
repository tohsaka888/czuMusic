export const indeximg = async () => {
    const res = await fetch(`http://www.hjmin.com/banner?type=1`);
    const data = await res.json();
    return data;
};
