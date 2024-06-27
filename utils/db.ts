import mongoose, { Connection } from "mongoose";

const connectToDatabase = async (): Promise<Connection> => {
  try {
    // Replace with your MongoDB Atlas connection URL
    const uri = "mongodb+srv://su:asd123@cluster0.eaubqul.mongodb.net/test";

    const connection = await mongoose.connect(uri);

    console.log("Connected to MongoDB Atlas");
    return connection.connection;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

export default connectToDatabase;
