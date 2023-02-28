const readFileDataAsBase64 = (e) => {
  const file = e.target.files[0];

  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      resolve(event.target.result);
    };

    reader.onerror = (err) => {
      reject(err);
    };

    reader.readAsDataURL(file);
  }).then((data) => {
    return data;
  });
};

export const uploadImage = (file) => {
  const newData = readFileDataAsBase64(file);
  return newData;
};
