const footerDate = (now, selector) => {
    const nowYear = new Date().getFullYear(),
        elem = document.querySelector(selector);

        if (nowYear > now) {
            elem.innerHTML = `${now} - ${nowYear}`;
        } else {
            elem.innerHTML = `${now}`;
        }
};

export default footerDate;