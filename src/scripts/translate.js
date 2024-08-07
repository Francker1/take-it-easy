import OpenAI from 'openai';


const apiKey = import.meta.env.OPENAI_API_KEY;

if (!apiKey) {
  throw new Error('The OPENAI_API_KEY environment variable is missing or empty.');
}

const openai = new OpenAI({
  apiKey,
});

export async function translateText(text) {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: `Transform the following angry text into a polite and correct text: ${text}` },
    ],
    model: 'gpt-4o-mini',
  });

  return completion.choices[0].message.content.trim();
}

