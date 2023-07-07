import {Configuration, OpenAIApi} from 'openai'
import {process} from './env';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{'role':'system','content':'You are a helpful teacher guiding students patiently and cheerfully.'},
{'role':'user','content':'Hello, who is this?'}]
})
console.log(completion.data.choices[0].message);