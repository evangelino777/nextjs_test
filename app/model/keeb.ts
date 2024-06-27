import mongoose, { Document, Model } from "mongoose";

// Define a schema
const keyboardSchema = new mongoose.Schema({
  Brand: String,
  Model: String,
  MCU: String,
  "Rebrand MCU": String,
  QMK: String,
  Backlight: String,
  Hotswap: String,
  Wireless: String,
  Layout: Number,
});

// Create an interface for the document
// interface IKeyboard extends Document {
//   Brand: string;
//   Model: string;
//   MCU: string;
//   'Rebrand MCU': string;
//   QMK: string;
//   Backlight: string;
//   Hotswap: string;
//   Wireless: string;
//   Layout: number;
// }

// Create a model
// const KeyboardModel: Model<IKeyboard> = mongoose.model('Keyboard', keyboardSchema);

const KeyboardModel = mongoose.model("Keyboard", keyboardSchema);

// Export the model
export default KeyboardModel;
