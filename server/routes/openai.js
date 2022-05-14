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

const router = require('express').Router();

const OpenAI = require('openai-api');
const openai = new OpenAI(process.env.OPENAI_API_KEY);

module.exports = () => {

  router.get('/', async(req, res) => {
  let prompt = `Artist: ${req.search}\n\nLyrics:\n`;
  const gptResponse = await openai.complete({
    engine: 'curie',
    prompt: prompt,
    maxTokens: 50,
    temperature: 0.7,
    topP: 1,
    presencePenalty: 0,
    frequencyPenalty: 0.5,
    bestOf: 1,
    n: 1
});
res.status(200).json({response: `${gptResponse.data.choices[0].text}`})
});

router.post('/', async(req, res) => {
  let prompt = `Artist: ${req.search}\n\nLyrics:\n`;
  const gptResponse = await openai.complete({
    engine: 'curie',
    prompt: prompt,
    maxTokens: 50,
    temperature: 0.7,
    topP: 1,
    presencePenalty: 0,
    frequencyPenalty: 0.5,
    bestOf: 1,
    n: 1
});
return res.status(200).json({response: `${gptResponse.data.choices[0].text}`})
});

return router;
}