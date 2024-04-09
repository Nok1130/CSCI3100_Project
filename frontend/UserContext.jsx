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
}));

export default useStore;

