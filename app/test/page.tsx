'use client';
import { useState } from 'react';

const IndexPage = () => {
  const [text, setText] = useState('');
  const [audioUrl, setAudioUrl] = useState('');
  const [audio, setAudio] = useState(null);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://api.openai.com/v1/audio/speech', {
        method: 'POST',
        headers: {
          Authorization: `Bearer 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`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'tts-1',
          input: text,
          voice: 'alloy',
        }),
      });
      const audioData = await response.arrayBuffer();
      const blob = new Blob([audioData], { type: 'audio/mpeg' });
      setAudioUrl(URL.createObjectURL(blob));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const togglePlayback = () => {
    if (audio && !audio.paused) {
      audio.pause();
    } else if (audio) {
      audio.play();
    }
  };

  const handlePlay = () => {
    if (!audioUrl) return;

    if (!audio) {
      const newAudio = new Audio(audioUrl);
      setAudio(newAudio);
      newAudio.addEventListener('ended', () => {
        setAudio(null);
      });
      newAudio.play();
    } else {
      togglePlayback();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea value={text} onChange={handleChange} />
        <button type="submit">Generate TTS</button>
      </form>
      {audioUrl && (
        <div>
          <button onClick={handlePlay}>
            {audio && !audio.paused ? 'Pause Audio' : 'Play Audio'}
          </button>
        </div>
      )}
    </div>
  );
};

export default IndexPage;
