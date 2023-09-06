export const uploadFile = (e, options, callback) => {
    e.current.click();

    if (options.multiple) e.current.setAttribute('multiple', true);
    if (options.accept && Array.isArray(options.accept)) {
        e.current.setAttribute('accept', options.accept.join(','));
    }

    const handleChange = (event) => {
        if (!event.target.files.length) {
            return;
        }
        const files = Array.from(event.target.files);
        files.forEach((file) => {
            if (!file.type.match('image')) {
                return;
            }
            const reader = new FileReader();
            reader.onload = (ev) => {
                return ev.target.result;
            };
            reader.readAsDataURL(file);
            callback(file);
        });

        // удаляем обработчик события после выполнения функции
        e.current.removeEventListener('change', handleChange);
    };

    e.current.addEventListener('change', handleChange);
};
