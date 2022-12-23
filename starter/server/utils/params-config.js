const { v4: uuidv4 } = require("uuid");

const params = (fileName) => {
  const myFile = fileName.originalname.split(".");
  const fileType = myFile[myFile.length - 1];

  const imageParams = {
    Bucket: "user-images-198b125a-22ed-4ad6-95d2-2a64e221b9e2",
    Key: `${uuidv4()}.${fileType}`,
    Body: fileName.buffer,
    ACL: "public-read",
  };

  return imageParams;
};

module.exports = params;