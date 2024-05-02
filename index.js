const {GoogleGenerativeAI} = require('@google/generative-ai')
require('dotenv').config()
const fs = require('fs')

const genAI = new GoogleGenerativeAI(process.env.API_KEY)

/*
async function run() {
    const model = genAI.getGenerativeModel({model: "gemini-pro"})
    //console.log(model)
    const prompt = "Write a story about a magic backpack."
    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()
    console.log(text)

}

run()*/



/*function fileToGenerativePart(path, mimeType) {

    return {
        inlineData: {
            data: Buffer.from(fs.readFileSync(path)).toString('base64'),
            mimeType
        }
    }
}

/*async function run() {
    const model = genAI.getGenerativeModel({model: "gemini-pro-vision"})

    const prompt = "What's different between thee pictures?"

    const imageParts = [
        fileToGenerativePart("cat.png", "image/png"),
        fileToGenerativePart("dog.png", "image/png")
    ]

    const result = await model.generateContent([prompt, ...imageParts])
    const response = await result.response
    const text = response.text()
    console.log(text)
}

run()*/

/*async function run() {
    const model = genAI.getGenerativeModel({model: "gemini-pro"})
    const chat = model.startChat({
        history: [
            {
                role: "user",
                parts: "Hello, I have 2 dogs in my house."
            },

            {
                role:"model",
                parts: "Great to meet you. What would you like to know?"
            }
        ]
    })

    const msg = "How many paws are in my house?"

    const result = await chat.sendMessage(msg)
    const response = await result.response
    const text = response.text()
    console.log(text)
}

run()*/