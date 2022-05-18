// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// ;(async ()=>{
// const completion = await openai.createCompletion("text-curie-001", {
//   prompt: "Hello world",
// });
// console.log(completion.data.choices[0].text);
// })();

// const router = require('express').Router();

// const OpenAI = require('openai-api');
// const openai = new OpenAI(process.env.OPENAI_API_KEY);

// module.exports = () => {

//   router.get('/', async(req, res) => {
//   let prompt = `Artist: ${req.search}\n\nLyrics:\n`;
//   const gptResponse = await openai.complete({
//     engine: 'curie',
//     prompt: prompt,
//     maxTokens: 50,
//     temperature: 0.7,
//     topP: 1,
//     presencePenalty: 0,
//     frequencyPenalty: 0.5,
//     bestOf: 1,
//     n: 1
// });
// res.status(200).json({response: `${gptResponse.data.choices[0].text}`})
// });

// router.post('/', async(req, res) => {
//   let prompt = `Artist: ${req.search}\n\nLyrics:\n`;
//   const gptResponse = await openai.complete({
//     engine: 'curie',
//     prompt: prompt,
//     maxTokens: 50,
//     temperature: 0.7,
//     topP: 1,
//     presencePenalty: 0,
//     frequencyPenalty: 0.5,
//     bestOf: 1,
//     n: 1
// });
// return res.status(200).json({response: `${gptResponse.data.choices[0].text}`})
// });

// return router;
// }

// (async () => {
//   const gptResponse = await openai.complete({
//       engine: 'curie',
//       prompt: 'this is a test',
//       maxTokens: 5,
//       temperature: 0.9,
//       topP: 1,
//       presencePenalty: 0,
//       frequencyPenalty: 0,
//       bestOf: 1,
//       n: 1,
//       stream: false,
//       stop: ['\n', "testing"]
//   });

//   console.log(gptResponse.data);
// })();

// (async () => {
//   const gptResponse = await openai.search({
//       engine: 'curie',
//       documents: ["White House", "hospital", "school"],
//       query: "the president"
//   });

//   console.log(gptResponse.data);
// })();

// (async () => {
//   const gptResponse = await openai.answers({
//     "documents": ["Puppy A is happy.", "Puppy B is sad."],
//     "question": "which puppy is happy?",
//     "search_model": "curie",
//     "model": "curie",
//     "examples_context": "In 2017, U.S. life expectancy was 78.6 years.",
//     "examples": [["What is human life expectancy in the United States?", "78 years."]],
//     "max_tokens": 5,
//     "stop": ["\n", "<|endoftext|>"],
//   });

//   console.log(gptResponse.data);
// })();

