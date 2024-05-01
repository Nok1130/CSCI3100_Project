import { create } from 'zustand'

// Define your store
const useStore = create(set => ({
  currentloginID: sessionStorage.getItem('currentloginID') || '',
  setcurrentloginID: (id) => {
    sessionStorage.setItem('currentloginID', id);
    set({ currentloginID: id });
  },
  removecurrentloginID: () => {
    sessionStorage.removeItem('currentloginID');
    set({ currentloginID: '' });
  },

  currentusername: sessionStorage.getItem('currentusername') || '',
  setcurrentusername: (id) => {
    sessionStorage.setItem('currentusername', id);
    set({ currentusername: id });
  },
  removecurrentusername: () => {
    sessionStorage.removeItem('currentusername');
    set({ currentusername: '' });
  },

  currentuniversity: sessionStorage.getItem('currentuniversity') || '',
  setcurrentuniversity: (id) => {
    sessionStorage.setItem('currentuniversity', id);
    set({ currentuniversity: id });
  },
  removecurrentuniversity: () => {
    sessionStorage.removeItem('currentuniversity');
    set({ currentuniversity: '' });
  },

  currentmajor: sessionStorage.getItem('currentmajor') || '',
  setcurrentmajor: (id) => {
    sessionStorage.setItem('currentmajor', id);
    set({ currentmajor: id });
  },
  removecurrentmajor: () => {
    sessionStorage.removeItem('currentmajor');
    set({ currentmajor: '' });
  },

}));

export default useStore;



