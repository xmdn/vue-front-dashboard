import { reactive, watch } from 'vue';


console.log(localStorage.getItem('isAuthenticated'));
const storedAuthState = localStorage.getItem('isAuthenticated');

export const authState = reactive({
  isAuthenticated: storedAuthState
});

watch(() => authState.isAuthenticated, (newValue) => {
    console.log('changed ', newValue);
    localStorage.setItem('isAuthenticated', newValue);
});

export function login(credentials) {
  return axios.post('http://localhost:5542/login', credentials)
    .then((response) => {
      if (response.status === 200) {
        authState.isAuthenticated = true;
        store.commit('SET_AUTH_TOKEN', response.data.token); 
        localStorage.setItem('isAuthenticated', 'true');
        return true; 
      }
    })
    .catch((error) => {
      console.error('Login error:', error);
      return false; 
    });
}

export function logout() {
  return axios.post('http://localhost:5542/logout')
    .then((response) => {
      if (response.status === 200) {
        authState.isAuthenticated = false;
        return true;
      }
    })
    .catch((error) => {
      console.error('Login error:', error);
      return false; 
    });
}
