// utils/api.ts

interface OpenAIRequest {
    model: string;
    messages: { role: string; content: string }[];
  }
  
  export const fetchOpenAIResponse = async (userContent: string): Promise<any> => {
    const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
  
    if (!apiKey) {
      throw new Error('OpenAI API key not found. Please set NEXT_PUBLIC_OPENAI_API_KEY environment variable.');
    }
  
    const requestData: OpenAIRequest = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          "role": "system",
          "content": "You are a helpful assistant."
        },
        {
          "role": "user",
          "content": userContent
        }
      ]
    };
  
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(requestData)
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch data from OpenAI API');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error fetching OpenAI response:', error);
      throw error;
    }
  };
  