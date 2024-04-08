import { atom } from 'recoil';
const currentUser = atom({
  key: 'currentUserID',
  default: '', 
});