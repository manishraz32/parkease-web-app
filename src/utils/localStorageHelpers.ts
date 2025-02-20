// Utility functions for localStorage
const localStorageUtil = {
    // Save an item to localStorage
    setItem: (key: string, value: unknown) => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(`Error setting ${key} in localStorage`, error);
      }
    },
  
    // Get an item from localStorage
    getItem: <T>(key: string): T | null => {
      try {
        const value = localStorage.getItem(key);
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
  