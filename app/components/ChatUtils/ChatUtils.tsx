import BarGraph from "../Charts/BarGraph";
import { BarChart } from "@mui/x-charts";
import ReactDOMServer from 'react-dom/server';

export const fetchOpenAIResponse = async (message: string): Promise<any> => {
  try {
    const response = await fetch(
      `http://127.0.0.1:5000/chat?message=${encodeURIComponent(message)}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data from the local API endpoint");
    }
    const responseData = await response.json();

    try {
      if (responseData["content"]["content"] === "None") {
        const barChart = (
          <BarChart
            series={[
            { data: responseData["content"]["data"][0] },
              { data: responseData["content"]["data"][1] },
              { data: responseData["content"]["data"][2] },
              { data: responseData["content"]["data"][3] },
            ]}
            height={290}
            xAxis={[{ data: responseData["content"]["xAxis"], scaleType: 'band' }]}
            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
          />
        );
        console.log();

        return {"content": barChart, "isGraph": true};
      }
    } catch (err) {
      console.error("Error fetching response from local API:", err);
      throw err;
    }

    return responseData;
  } catch (error) {
    console.error("Error fetching response from local API:", error);
    throw error;
  }
};
