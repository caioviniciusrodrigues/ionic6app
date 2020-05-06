export class Util {

    logout = () => {
        localStorage.removeItem('token');
        /*
        localStorage.removeItem('usuario.codigo');
        localStorage.removeItem('usuario.nome');
        localStorage.removeItem('usuario.login');
        localStorage.removeItem('usuario.logado');*/
    }

}

