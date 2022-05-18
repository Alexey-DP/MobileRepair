const modals = (btnsSelector, modalSelector, closeSelector) => {
    const btns = document.querySelectorAll(btnsSelector),
        modal = document.querySelector(modalSelector),
        close = modal.querySelector(closeSelector),
        scroll = calcScroll();

        function calcScroll() {
            let div = document.createElement('div');

            div.style.width = '50px';
            div.style.height = '50px';
            div.style.overflowY = 'scroll';
            div.style.visibility = 'hidden';

            document.body.appendChild(div);

            let scrollWidth = div.offsetWidth - div.clientWidth;
            div.remove();

            return scrollWidth;
        }

        btns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
                document.body.style.paddingRight = `${scroll}px`;
            });
        });

        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            document.body.style.paddingRight = `0`;
        }

        close.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        const burgerItems = document.querySelectorAll('.burger-list a');

        burgerItems.forEach(item => {
            item.addEventListener('click', () => {
                closeModal();
            });
        });

};

export default modals;