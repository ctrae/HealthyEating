const counters = document.querySelectorAll('.counter');


counters.forEach(counter => {
    counter.innerText = '0';

    updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;


        const increment = target / 350;

        if (c < target){
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
});