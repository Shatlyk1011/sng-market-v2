import { ref } from "vue";
import { projectAuth } from "../firebase/config";
import useStorageForUserPhoto from "./useStorageForUserPhoto";

const error = ref(null);
const isPending = ref(false);
const { uploadImage, url: imageUrl } = useStorageForUserPhoto();

const signup = async (email, password, name, photo) => {
  error.value = null;
  isPending.value = true;

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    await uploadImage(photo);
    console.log("imageUploaded");
    console.log("res", res.user);
    await res.user.updateProfile({
      displayName: name,
      photoURL: imageUrl.value,
    });
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
