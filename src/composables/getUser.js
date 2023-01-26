import { ref } from "vue";
import { projectAuth } from "../firebase/config";

const user = ref(projectAuth.currentUser);

// auth changes
projectAuth.onAuthStateChanged((_user) => {
  console.log("текущий пользователь:", _user);
  user.value = _user;
});

const getUser = () => {
  return { user };
};

export default getUser;
