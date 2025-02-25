import Cookies from "js-cookie";

const cookieStorage = {
  // ✅ Set a Cookie
  setItem: (key: string, value: unknown, expires: number = 7) => {
    try {
      Cookies.set(key, JSON.stringify(value), { expires }); // Default expiry 7 days
    } catch (error) {
      console.error(`Error setting ${key} in cookies`, error);
    }
  },

  // ✅ Get a Cookie
  getItem: <T>(key: string): T | null => {
    try {
      const value = Cookies.get(key);
      return value ? JSON.parse(value) as T : null;
    } catch (error) {
      console.error(`Error getting ${key} from cookies`, error);
      return null;
    }
  },

  // ✅ Remove a Specific Cookie
  removeItem: (key: string) => {
    try {
      Cookies.remove(key);
    } catch (error) {
      console.error(`Error removing ${key} from cookies`, error);
    }
  },

  // ✅ Clear All Cookies (Not recommended for all cases)
  clear: () => {
    try {
      const allCookies = Cookies.get();
      Object.keys(allCookies).forEach((key) => Cookies.remove(key));
    } catch (error) {
      console.error("Error clearing cookies", error);
    }
  },
};

export default cookieStorage;
