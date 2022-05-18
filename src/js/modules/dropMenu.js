const dropMenu = (dropList, scrollOlenList) => {
    const drop = document.querySelectorAll(dropList),
        openList = document.querySelectorAll(scrollOlenList);

        drop.forEach((elem, i) => {
            elem.addEventListener('click', () => {
                openList[i].click();
            });
        });
};

export default dropMenu;