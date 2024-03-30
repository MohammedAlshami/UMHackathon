import { useState } from "react";

const useClientLogic = () => {
  const [audioChunks, setAudioChunks] = useState([]);
  const [mediaRecorderInstance, setMediaRecorderInstance] = useState(null);
  const [error, setError] = useState(null);
  const [transcribedText, setTranscribedText] = useState("");

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const chunks = [];

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data);
        }
      };

      recorder.onstop = () => {
        const audioBlob = new Blob(chunks, { type: "audio/wav" });
        const audioUrl = URL.createObjectURL(audioBlob);
        console.log("Audio URL:", audioUrl);
        textToAudio(audioUrl);
      };

      recorder.start();
      setMediaRecorderInstance(recorder);
      setAudioChunks(chunks);
      setError(null);
    } catch (err) {
      console.error("Error starting recording:", err);
      setError(
        "Unable to access microphone. Please grant permission and try again."
      );
    }
  };

  const stopRecording = () => {
    mediaRecorderInstance.stop();
  };

  const textToAudio = async (audioUrl) => {
    const apiKey = "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";
    const history = [];

    const audioBlob = await fetch(audioUrl).then((response) => response.blob());
    const formData = new FormData();
    formData.append("file", audioBlob, "audio.wav");
    formData.append("model", "whisper-1");

    const headers = new Headers({
      Authorization: `Bearer ${apiKey}`,
    });

    const transcriptionResponse = await fetch(
      "https://api.openai.com/v1/audio/transcriptions",
      {
        method: "POST",
        headers: headers,
        body: formData,
        language: "Arabic"
      }
    );

    const result = await transcriptionResponse.json();
    const message = result.text;
    setTranscribedText(message);
  };

  return {
    startRecording,
    stopRecording,
    error,
    transcribedText,
  };
};

export default useClientLogic;
