const mongoose = require("mongoose");

async function main() {
      try {
           await mongoose.connect("mongodb+srv://marcelalimadev:admin147@api-com-mongodb.ioawl.mongodb.net/?retryWrites=true&w=majority&appName=api-com-mongodb") 
      } catch (error) {
            console.log(`error: ${error}`)
      }
}

module.exports = main;