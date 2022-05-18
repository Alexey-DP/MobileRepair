const moreProducts = (moreSelector, lessSelector, items, showElementsFirst = 7) => {
    const moreBtn = document.querySelector(moreSelector),
        lessBtn = document.querySelector(lessSelector),
        elements = document.querySelectorAll(items);

        function show(n) {
            elements.forEach((elem, i) => {
                elem.classList.remove('show');
                if(i < n) {
                    elem.classList.add('show');
                }
            });
        }
        show(showElementsFirst);

        moreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            show(elements.length);
            moreBtn.style.display = 'none';
            lessBtn.style.display = 'flex';
        });

        lessBtn.addEventListener('click', (e) => {
            e.preventDefault();
            show(showElementsFirst);
            moreBtn.style.display = 'flex';
            lessBtn.style.display = 'none';
            elements[0].scrollIntoView();
        });

};

export default moreProducts;