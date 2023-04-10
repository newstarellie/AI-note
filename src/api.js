import axios from 'axios';

const API_KEY = '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';
const url = 'https://api.openai.com/v1/chat/completions';

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${API_KEY}`
};
const generateCode = async (requestContent) => {
  const data = {
    "model": "gpt-3.5-turbo",
    "messages": [{ "role": "user", "content": `${requestContent}` }],
    "temperature": 0.7
  };

  try {
    const response = await axios.post(url, data, { headers });
    return response.data.choices[0].message.content;
  } catch (error) {
    console.log(error);
  }
};
export default generateCode;
