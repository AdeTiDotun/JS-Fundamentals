const args = process.argv.slice(2);
const size = parseInt(args[0], 10);

if (isNaN(size)) {
  console.log("Missing size");
} else {
  const line = "X".repeat(size);
  let i = 0;
  while (i < size) {
    console.log(line);
    i++;
  }
}
