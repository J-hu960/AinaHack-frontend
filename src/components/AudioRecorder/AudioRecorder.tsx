// AudioRecorder.js
import React, { useState, useRef } from "react";
import axios from "axios";

function AudioRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);

    mediaRecorderRef.current.ondataavailable = (event) => {
      audioChunksRef.current.push(event.data);
    };

    mediaRecorderRef.current.onstop = () => {
      const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
      setAudioBlob(audioBlob);
      audioChunksRef.current = [];
    };

    mediaRecorderRef.current.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  const sendAudio = async () => {
    if (!audioBlob) return;

    const formData = new FormData();
    formData.append("audio", audioBlob, "recording.wav");

    try {
        console.log("uploaded",formData)
      // const response = await axios.post("http://localhost:8000/cb/audio", formData, {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // });
      // console.log(response.data)
      // console.log("Transcription:", response.data.transcription);
       //quiero forzar un refresh aqui para que el componente vuelva a su estado inicial
       setAudioBlob(null)
    } catch (error) {
      console.error("Error uploading audio:", error);
    }
  };

  return (
    <div>
      <button onClick={isRecording ? stopRecording : startRecording}>
        {isRecording ? "Stop Recording" : "Start Recording"}
      </button>
      {audioBlob && (
        <>
          <audio controls src={URL.createObjectURL(audioBlob)} />
          <button onClick={sendAudio}>Send Audio</button>
        </>
      )}
    </div>
  );
}
export default AudioRecorder;
