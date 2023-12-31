const obsorver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if (entry.isIntersecting)
        {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElemnts = document.querySelectorAll('.hidden');
hiddenElemnts.forEach((el)=> obsorver.observe(el));