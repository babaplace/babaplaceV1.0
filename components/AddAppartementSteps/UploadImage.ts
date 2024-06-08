import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { imagesStepSheme } from "../../src/types/appartement.sheme";
import { storageFirebase } from "@/lib/firebare/firebase";
import { prisma } from "@/lib/prisma";

export const uploadImage = async ({
  appartementId,
  image,
}: {
  appartementId: string;
  image: File;
}) => {
  const storage = getStorage(storageFirebase);

  let ImageUrl = "";

  // images.map((image) => {
  const storageRef = ref(
    storage,
    `/appartements/${appartementId}/${image.name}`
  );

  uploadBytes(storageRef, image).then((snapshot) => {
    getDownloadURL(ref(storage, `/appartements/${appartementId}/${image.name}`))
      .then((url) => {
        ImageUrl = url;
      })
      .catch((error) => {
        throw new Error(error);
      });
  });
  // });

  return {
    url: ImageUrl,
  };
};

export const uploadImages = ({
  appartementId,
  images,
}: {
  appartementId: string;
  images: {
    id: string;
    file: File;
  }[];
}) => {
  const storage = getStorage(storageFirebase);

  let ImageUrls: { url: string }[] = [];

  images.map((image) => {
    const storageRef = ref(
      storage,
      `/appartements/${appartementId}/${image.file.name}`
    );

    uploadBytes(storageRef, image.file).then((snapshot) => {
      getDownloadURL(
        ref(storage, `/appartements/${appartementId}/${image.file.name}`)
      )
        .then(async (url) => {
          await prisma.medias.create({
            data: {
              url,
              appartementId: appartementId,
              size: image.file.size,
            },
          });
        })
        .catch((error) => {
          throw new Error(error);
        });
    });
  });

  return ImageUrls;
};
