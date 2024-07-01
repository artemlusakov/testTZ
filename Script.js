document.querySelector('.burger').addEventListener('click',function (){
    this.classList.toggle('active');

    if(document.querySelector('.clos-menu').classList.contains('disaibl')) {
        document.querySelector('.clos-menu').classList.remove('disaibl')
    }
    else {
        document.querySelector('.clos-menu').classList.add("disaibl")
    }

    if(document.querySelector('.open-menu').classList.contains('vorks')) {
        document.querySelector('.open-menu').classList.add('no-vorks')
        document.querySelector('.open-menu').classList.remove('vorks')
    }
    else {
        document.querySelector('.open-menu').classList.remove("no-vorks")
        document.querySelector('.open-menu').classList.add('vorks')
    }
})
