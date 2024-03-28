export const fetchOpenAIResponse = async (message: string): Promise<any> => {
  try {
    const response = await fetch(`http://127.0.0.1:5000/chat?message=${encodeURIComponent(message)}`);

    if (!response.ok) {
      throw new Error('Failed to fetch data from the local API endpoint');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching response from local API:', error);
    throw error;
  }
};
