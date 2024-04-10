// import { create } from 'zustand'

// // Define your store
// const useStore = create(set => ({
//   currentloginID: sessionStorage.getItem('currentloginID') || '',
//   setcurrentloginID: (id) => {
//     sessionStorage.setItem('currentloginID', id);
//     set({ currentloginID: id });
//   },
//   removecurrentloginID: () => {
//     sessionStorage.removeItem('currentloginID');
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

// const useUniStore = create(set => ({
//   currentuniversity: sessionStorage.getItem('currentuniversity') || '',
//   setcurrentloginID: (id) => {
//     sessionStorage.setItem('currentuniversity', id);
//     set({ currentuniversity: id });
//   },
//   removecurrentloginID: () => {
//     sessionStorage.removeItem('currentuniversity');
//     set({ currentuniversity: '' });
//   },
//   removecurrentloginID: () => {
//     sessionStorage.removeItem('currentmajor');
//     set({ currentmajor: '' });
//   },

// }));

// const useMajorStore = create(set => ({
//   currentmajor: sessionStorage.getItem('currentmajor') || '',
//   setcurrentloginID: (id) => {
//     sessionStorage.setItem('currentmajor', id);
//     set({ currentmajor: id });
//   },
//   removecurrentloginID: () => {
//     sessionStorage.removeItem('currentmajor');
//     set({ currentmajor: '' });
//   },

// }));

export default useStore;



