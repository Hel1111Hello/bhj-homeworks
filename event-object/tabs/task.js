document.querySelectorAll('.tab__navigation').forEach(navigation => {
    const tabs = Array.from(navigation.querySelectorAll('.tab'));
    const contents = Array.from(navigation.nextElementSibling.querySelectorAll('.tab__content'));

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(tab1 => tab1.classList.remove('tab_active'));
            contents.forEach(content => content.classList.remove('tab__content_active'));

            tab.classList.toggle('tab_active');
            contents[index].classList.toggle('tab__content_active');
        });
    });
});