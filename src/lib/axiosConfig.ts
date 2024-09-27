import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';  // Set your API base URL
// axios.defaults.headers.common['Authorization'] = 'Bearer token'; 
// axios.defaults.timeout = 10000;  // Timeout settings (optional)
axios.defaults.withCredentials = true;
axios.defaults.headers.common['Content-Type'] = 'application/json';

export default axios;
