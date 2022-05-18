const inputs = (nameInputs, messageInputs) => {
    const names = document.querySelectorAll(nameInputs),
        messages = document.querySelectorAll(nameInputs);

    names.forEach(name => {
        name.addEventListener('input', () => {
            if(name.value.length > 30) {
                name.value = name.value.slice(0, 30);
            }
        });

    });

    messages.forEach(message => {
        message.addEventListener('input', () => {
            if(message.value.length > 250) {
                message.value = message.value.slice(0, 250);
            }
        });

    });
};

export default inputs;
