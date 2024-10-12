const fs = require("fs");

/**
 * [Reading a file using the `fs` module and storing the data in a buffer]
 * ? `readFile` reads the content of `input.txt` asynchronously and returns the data as a Buffer.
 */
fs.readFile("input.txt", (err, data) => {
  if (err) {
    console.error("Error reading file", err); // !Logs an error if reading fails
    return;
  }
  // [Working with buffer]

  console.log("buffer data", data); // ? Logs the raw binary data from the file as a Buffer.
  console.log("Data as string:", data.toString()); // *  * Converts the buffer data to a readable string format.

  // [ Modifying the buffer data and writing it to a new file ]
  // * Here, we convert the data to uppercase before writing.
  const modifiedData = Buffer.from(data.toString().toUpperCase());

  // [ Writing the modified buffer to `output.txt` ]
  // ? `writeFile` writes the modified buffer data into `output.txt` asynchronously.
  fs.writeFile("output.txt", modifiedData, (err) => {
    if (err) {
      console.error("Error writing to file:", err); // ! Logs an error if writing fails
      return;
    }

    console.log("Data successfully written to output.txt"); // * Indicates that the write operation was successful.
  });
});
