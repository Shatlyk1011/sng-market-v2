import { ref } from "vue";
import { projectAuth } from "../firebase/config";

const user = ref(projectAuth.currentUser);

// auth changes
projectAuth.onAuthStateChanged((currentUser) => {
  console.log("текущий пользователь:", currentUser);

  user.value = currentUser;
});

const getUser = () => {
  return { user };
};
export default getUser;
