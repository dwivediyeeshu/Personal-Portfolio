    const lightMode = document.querySelector('#theme-switch')

    lightMode.addEventListener('click', function (e){
        const bodyTheme = document.querySelector('body');

        if(bodyTheme.className === 'lightmode'){
            bodyTheme.className = '';
        } 
        else {
            bodyTheme.className = 'lightmode';
        }
        
    })