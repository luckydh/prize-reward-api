const config = {
  env: process.env.NODE_ENV || "development",
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  port: process.env.PORT || 3000,
  mongoUri:
    process.env.MONGODB_URI ||
    "mongodb+srv://prize:reward@cluster0.rwdxc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
};
module.exports = { config };
