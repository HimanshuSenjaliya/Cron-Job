module.export = async function handler(req, res) {
  console.log("Cron job is running");

  res.status(200).json({ message: "Cron job is running....." });
};
