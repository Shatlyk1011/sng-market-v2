import { ref } from "vue";
import { projectAuth } from "../firebase/config";

const error = ref(null);
const isPending = ref(false);

const signup = async (email, password, name) => {
  error.value = null;
  isPending.value = true;

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    console.log("res", res.user);
    await res.user.updateProfile({ displayName: name });
    error.value = null;
    isPending.value = false;

    return res;
  } catch (err) {
    error.value = err.code;
    console.log(err.code);
    if (err.code === "auth/email-already-in-use") {
      error.value = `${email} уже используется`;
    } else {
      error.value = `Ошибка: ${err.message}`;
    }
    isPending.value = false;
  }
};

const useSignup = () => {
  return { error, signup, isPending };
};

export default useSignup;
