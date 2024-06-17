import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'openai';

const OPENAI_API_KEY: any = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
console.log(OPENAI_API_KEY);
const openai = new OpenAI(OPENAI_API_KEY);

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }
    
    try {
        const response = await openai.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "You are a helpful assistant designed to output JSON.",
                },
                { role: "user", content: "Who won the world series in 2020?" },
            ],
            model: "gpt-3.5-turbo-0125",
            response_format: { type: "json_object" },

            stream: true,
        });

    } catch (error) {

        res.status(500).json({ error: 'Internal Server Error' });
    }
    
}

