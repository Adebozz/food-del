import mongoose from 'mongoose';

 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://greatAdeboss:8022767313@cluster0.kitrt88.mongodb.net/food-del').then(()=>console.log("DB Connected"));
} 