import axios from 'axios';

// const axiosConfig = axios.create();

// axiosConfig.defaults.baseURL = 'https://apirest.poliert.com.br';

// export default axiosConfig;

export default axios.create({
  baseURL: 'https://apirest.poliert.com.br',
});
