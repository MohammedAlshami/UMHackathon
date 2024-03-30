import { BarChart, LineChart, PieChart } from "@mui/x-charts";
import ReactDOMServer from "react-dom/server";

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
        if (responseData["content"]["graph_type"] === "line") {          
          var barChart = (
          <LineChart
            xAxis={[{ data: responseData["content"]["X"] }]}
            series={[
              {
                data: responseData["content"]["Y"],
              },  
            ]}
            height={300}
            margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
            grid={{ vertical: true, horizontal: true }}
          />);
        } else if (responseData["content"]["graph_type"] === "pie") {
          const labels = responseData["content"]["X"];
          const values = responseData["content"]["Y"];
            // Create series data from labels and values lists
          const seriesData = labels.map((label, index) => ({
              id: index,
              value: values[index],
              label: label
            }));
          var barChart = (
                 <PieChart
            series={[{ data: seriesData,   
         
            }, ]}
            height={350}
            slotProps={{
              legend: {
                hidden: true
              }
            }}
          
          />
          );
        } else {
          var barChart = (
            <BarChart
              series={[
                { data: responseData["content"]["data"][0] },
                { data: responseData["content"]["data"][1] },
                { data: responseData["content"]["data"][2] },
                { data: responseData["content"]["data"][3] },
              ]}
              height={290}
              xAxis={[
                { data: responseData["content"]["xAxis"], scaleType: "band" },
              ]}
              margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            />
          );
        }
        console.log();

        return { content: barChart, isGraph: true };
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
