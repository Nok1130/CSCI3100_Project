// import { create } from 'zustand'

// // Define your store
// const useStore = create(set => ({
//   currentloginID: localStorage.getItem('currentloginID') || '',
//   setcurrentloginID: (id) => {
//     localStorage.setItem('currentloginID', id);
//     set({ currentloginID: id });
//   },
//   removecurrentloginID: () => {
//     localStorage.removeItem('currentloginID');
//     set({ currentloginID: '' });
//   },
// }));

// export default useStore;

// import { atom, useRecoilState } from 'recoil';
// import Cookies from 'js-cookie'; // You need to install js-cookie

// // Define your atom
// const currentloginIDState = atom({
//   key: 'currentloginIDState',
//   default: Cookies.get('currentloginID') || '',
// });

// // Define your hook
// const useCurrentLoginID = () => {
//   const [currentloginID, setCurrentloginID] = useRecoilState(currentloginIDState);

//   const setcurrentloginID = (id) => {
//     Cookies.set('currentloginID', id);
//     setCurrentloginID(id);
//   };

//   const removecurrentloginID = () => {
//     Cookies.remove('currentloginID');
//     setCurrentloginID('');
//   };

//   return { currentloginID, setcurrentloginID, removecurrentloginID };
// };

// export default useCurrentLoginID;

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
}));

export default useStore;



