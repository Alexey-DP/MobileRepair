import postData from '../services/requests';

const forms = (formsBlock, tokenIDname, chatIDname) => {
    const forms = document.querySelectorAll(formsBlock),
    token = tokenIDname,
    chatId = chatIDname;

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = form.querySelector('[name="name"]').value,
                phone = form.querySelector('[name="phone"]').value,
                message = form.querySelector('[name="message"]') ? form.querySelector('[name="message"]').value : '',
                errorPhone = form.querySelector('.phone-error');


            let text;

            if (name && phone && message) {
                text = encodeURI(`Сообщение с формы на сайте :)😂\nИмя: ${name}\nТелефон: ${phone}\nСообщение: ${message}`);
            } else {
                text = encodeURI(`Сообщение с формы на сайте :)😂\nИмя: ${name}\nТелефон: ${phone}`);
            }

            const okBlock = form.parentElement.querySelector('.form-ok'),
                errorBlock = form.parentElement.querySelector('.form-error');

            if (phone.length == 19) {
                postData(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}&parse_mode=html`)
            .then(() => {
                console.log(phone.length)
                form.style.display = 'none';
                okBlock.classList.add('active');
            })
            .catch (() => {
                form.style.display = 'none';
                errorBlock.classList.add('active');
            })
            .finally(() => {
                form.reset();
                errorPhone.style.display = 'none';
                setTimeout(() => {
                    form.style.display = 'block';
                    okBlock.classList.remove('active');
                    errorBlock.classList.remove('active');
                }, 3000);
            });
            } else {
                errorPhone.style.display = 'block';
            }

        });
    });

};

export default forms;