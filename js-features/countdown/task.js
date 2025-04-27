const timerElement = document.getElementById("timer");

function parseTimeToSeconds(timeString) {
    const [hours, minutes, seconds] = timeString.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  }
  

  function formatSecondsToTime(totalSeconds) {
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }
  
  let remainingSeconds = parseTimeToSeconds(timerElement.textContent);

  const countdownInterval = setInterval(() => {
    remainingSeconds--;
  
    timerElement.textContent = formatSecondsToTime(remainingSeconds);
  
    if (remainingSeconds <= 0) {
      clearInterval(countdownInterval);
      alert("Вы победили в конкурсе!");
  
      fetch("https://steamuserimages-a.akamaihd.net/ugc/922556277778598470/AACEBE18B90A9894DB56A17457C580A05A1EF0FC/?imw=512&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true")
      .then(res => res.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "prize.jpg";
        link.click();
        URL.revokeObjectURL(url);
      });
    }
  }, 1000);