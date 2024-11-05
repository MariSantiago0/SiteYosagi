function transicao(secao){
    switch (secao) {
        case 'menu':
            window.scrollTo({
                top: 0, 
                behavior: 'smooth', 
            });
            break;
            
        case 'jogos':
            window.scrollTo({
                top: 1450, 
                behavior: 'smooth' 
            });

            break;
        case 'aplicativo':
            window.scrollTo({
                top: 2300,
                behavior: 'smooth' 
            });
            break;

        case 'equipe':
            window.scrollTo({
                top: 3400,
                behavior: 'smooth' 
            });
            break;

        case 'local':
            window.scrollTo({
                top: 20000, 
                behavior: 'smooth' 
            });
            break;

    }
}