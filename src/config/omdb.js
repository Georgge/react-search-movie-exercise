/* --- Enviroment --- */
let API_KEY = null;

if (process.env.NODE_ENV === 'development') {
  API_KEY= '3aaf6bc6';
} else {
  API_KEY = process.env.OMDB_KEY;
}

export const OMDB_API_KEY = API_KEY;
