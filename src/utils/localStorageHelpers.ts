// Utility functions for localStorage
const localStorageUtil = { // localStorageUtil ke name se ek object banaye hai
    // Save an item to localStorage
    setItem: (key: string, value: unknown) => { // setItem ek call back fution le raha hai jisme key (uername, email ye sab ayeha), value(karishma, kuamri@gmail.com ye sab ayega)
      try { // try catch ka use error handling ke liye karte hai jab ham call karte hai
        localStorage.setItem(key, JSON.stringify(value)); // localStrorage me ja kar setItem se set kar denge o key lega or value set kar dega jaise karishma kumari
      } catch (error) {
        console.error(`Error setting ${key} in localStorage`, error); // nahi to  use key pe error de dega
      }
    },
  
    // Get an item from localStorage
    getItem: <T>(key: string): T | null => {
      try {
        const value = localStorage.getItem(key); // localStorage.getItem(usename,email )
        return value ? JSON.parse(value) as T : null;
      } catch (error) {
        console.error(`Error getting ${key} from localStorage`, error);
        return null;
      }
    },
  
    // Remove an item from localStorage
    removeItem: (key: string) => {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.error(`Error removing ${key} from localStorage`, error);
      }
    },
  
    // Clear all localStorage data
    clear: () => {
      try {
        localStorage.clear();
      } catch (error) {
        console.error("Error clearing localStorage", error);
      }
    },
  };
  
  export default localStorageUtil;
  