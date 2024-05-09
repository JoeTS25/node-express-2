/** Server for bank.ly. */


const app = require("./app");
const { PORT } = require("./config")

app.listen(PORT, () => {
  console.log(`Server starting on http://localhost:${PORT}`);
});
