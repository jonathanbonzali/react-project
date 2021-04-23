const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3500,
  jwtSecret: process.env.JWT_SECRET || "softin_development.54644688888",
  mongoUri:
    process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    "mongodb://" +
      (process.env.IP || "localhost") +
      ":" +
      (process.env.MONGO_PORT || "27017") +
      "/sneventstore",
};

export default config;
