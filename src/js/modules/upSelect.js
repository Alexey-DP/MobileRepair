const upSelect = (upSelector) => {
    const upElem = document.querySelector(upSelector);

    window.addEventListener('scroll', () => {

        if(document.documentElement.scrollTop > 300) {
            upElem.classList.add('active');
        } else {
            upElem.classList.remove('active');
        }
    });

};

export default upSelect;