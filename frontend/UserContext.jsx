import { create } from 'zustand'

// Define your store
const useStore = create(set => ({
  currentloginID: localStorage.getItem('currentloginID') || '',
  setcurrentloginID: (id) => {
    localStorage.setItem('currentloginID', id);
    set({ currentloginID: id });
  },
  removecurrentloginID: () => {
    localStorage.removeItem('currentloginID');
    set({ currentloginID: '' });
  },

  currentusername: localStorage.getItem('currentusername') || '',
  setcurrentusername: (id) => {
    localStorage.setItem('currentusername', id);
    set({ currentusername: id });
  },
  removecurrentusername: () => {
    localStorage.removeItem('currentusername');
    set({ currentusername: '' });
  },

  currentuniversity: localStorage.getItem('currentuniversity') || '',
  setcurrentuniversity: (id) => {
    localStorage.setItem('currentuniversity', id);
    set({ currentuniversity: id });
  },
  removecurrentuniversity: () => {
    localStorage.removeItem('currentuniversity');
    set({ currentuniversity: '' });
  },

  currentmajor: localStorage.getItem('currentmajor') || '',
  setcurrentmajor: (id) => {
    localStorage.setItem('currentmajor', id);
    set({ currentmajor: id });
  },
  removecurrentmajor: () => {
    localStorage.removeItem('currentmajor');
    set({ currentmajor: '' });
  },

}));

// const useUniStore = create(set => ({
//   currentuniversity: localStorage.getItem('currentuniversity') || '',
//   setcurrentloginID: (id) => {
//     localStorage.setItem('currentuniversity', id);
//     set({ currentuniversity: id });
//   },
//   removecurrentloginID: () => {
//     localStorage.removeItem('currentuniversity');
//     set({ currentuniversity: '' });
//   },
//   removecurrentloginID: () => {
//     localStorage.removeItem('currentmajor');
//     set({ currentmajor: '' });
//   },

// }));

// const useMajorStore = create(set => ({
//   currentmajor: localStorage.getItem('currentmajor') || '',
//   setcurrentloginID: (id) => {
//     localStorage.setItem('currentmajor', id);
//     set({ currentmajor: id });
//   },
//   removecurrentloginID: () => {
//     localStorage.removeItem('currentmajor');
//     set({ currentmajor: '' });
//   },

// }));

export default useStore;

