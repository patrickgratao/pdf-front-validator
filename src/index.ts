/* eslint-disable @typescript-eslint/no-explicit-any */
// Function to convert bytes to a hexadecimal string
function bytesToHex(bytes: Iterable<unknown> | ArrayLike<unknown>) {
  return Array.from(bytes)
    .map((byte: any) => ("0" + byte.toString(16)).slice(-2))
    .join("");
}

export const validateFilePDF = (file: any) => {
  const maxiSizeToVerify = 4;
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.onloadend = function (e: any) {
      const bytes = new Uint8Array(e.target.result);
      const header = bytesToHex(bytes.slice(0, maxiSizeToVerify));

      if (header.startsWith("25504446")) {
        if (file.type === "application/pdf") {
          resolve("application/pdf");
        } else {
          resolve(undefined);
        }
      } else {
        resolve(undefined);
      }
    };

    reader.onerror = function (e) {
      reject(e);
    };

    reader.readAsArrayBuffer(file.slice(0, maxiSizeToVerify));
  });
};
