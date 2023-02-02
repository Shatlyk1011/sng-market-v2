import { ref } from "vue";
import { projectStorage } from "@/firebase/config";
import getUser from "@/composables/getUser";

const { user } = getUser();

const useStorage = () => {
  const error = ref(null);
  const url = ref(null);
  const filePath = ref(null);

  const uploadImage = async (image) => {
    filePath.value = `images/${user.value.uid}/${image.name}`;
    const storageRef = projectStorage.ref(filePath.value);

    try {
      const res = await storageRef.put(image);
      url.value = await res.ref.getDownloadURL();
    } catch (err) {
      error.value = err.message;
    }
  };

  const deleteImage = async (path) => {
    const storageRef = projectStorage.ref(path);

    try {
      await storageRef.delete();
    } catch (err) {
      error.value = `Ошибка: ${err.message}`;
    }
  };

  return { error, url, filePath, uploadImage, deleteImage };
};

export default useStorage;
