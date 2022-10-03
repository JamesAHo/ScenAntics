import decode from 'jwt-decode';

class Auth {
    getUser() {
        return decode(this.getToken());
    }
    loggedIn() {
        const token = this.getToken();
        // check to see if token is still valid
        return !!token & !this.toTokenExpired(token)
    }
    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if(decoded.exp < Date.now() / 1000) {
                return true
            } else return false;
        } catch (error) {
            return false
        }
    }
    getUser() {
        return localStorage.getItem('id_token');
    }
    login(idToken) {
        localStorage.setItem('id_token', idToken);
        window.location.assign('/')
    }
    logout() {
        localStorage.removeItem('id_token');
        window.location('/')
    }
} 

export default new Auth()