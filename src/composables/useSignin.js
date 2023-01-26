import { ref } from "vue";
import { projectAuth } from "../firebase/config";

const error = ref(null);
const isPending = ref(false);

const login = async (email, password) => {
  error.value = null;
  isPending.value = true;

  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password);
    error.value = null;
    isPending.value = false;
    return res;
  } catch (err) {
    error.value = err.code;
    console.log(err.code);
    if (err.code === "auth/wrong-password") {
      error.value = "Неверный пароль. Поробуйте еще раз.";
    } else if (err.code === "auth/user-not-found") {
      error.value = "Такого пользователя не существует.";
    } else if (err.code === "auth/invalid-email") {
      error.value = "Такого email не существует";
    } else if (err.code === "auth/network-request-failed") {
      error.value = "Неполадки с интернетом...";
    } else {
      error.value = "Что то пошло не так...";
    }
    isPending.value = false;
  }
};

const useLogin = () => {
  return { error, login, isPending };
};

export default useLogin;
