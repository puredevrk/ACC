function processVideo() {
    const videoInput = document.getElementById('videoInput');
    const videoSection = document.getElementById('videoSection');
    const outputVideo = document.getElementById('outputVideo');
    const downloadLink = document.getElementById('downloadLink');

    if (videoInput.files.length > 0) {
        const file = videoInput.files[0];
        const url = URL.createObjectURL(file);

        outputVideo.src = url;
        downloadLink.href = url;
        videoSection.style.display = 'flex';
    } else {
        alert('Please select a video file to upload.');
    }
}



// function processVideo() {
//     const videoInput = document.getElementById('videoInput');
//     const videoSection = document.getElementById('videoSection');
//     const outputVideo = document.getElementById('outputVideo');
//     const downloadLink = document.getElementById('downloadLink');

//     if (videoInput.files.length > 0) {
//         const formData = new FormData();
//         formData.append('video', videoInput.files[0]);

//         // Sending the video file to the server for processing
//         fetch('/upload', {
//             method: 'POST',
//             body: formData
//         })
//         .then(response => response.json())
//         .then(data => {
//             const processedVideoUrl = data.processed_video_url; // URL of the processed video

//             // Display the processed video
//             outputVideo.src = processedVideoUrl;
//             downloadLink.href = processedVideoUrl;
//             videoSection.style.display = 'flex'; // Show the video section
//         })
//         .catch(error => {
//             alert('Error during video processing.');
//         });
//     } else {
//         alert('Please select a video file to upload.');
//     }
// }
