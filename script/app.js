const phoneInput = document.querySelector("#phone");
    const iti = window.intlTelInput(phoneInput, {
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
        preferredCountries: ['ru', 'us', 'kz'], 
        separateDialCode: true, 
        initialCountry: "ru", 
    });

    document.querySelector(".header__registration-window-form").addEventListener("submit", function (e) {
        // No preventDefault() here to allow form submission
        const phoneNumber = iti.getNumber(); // Get the formatted phone number
        document.querySelector('input[name="phone"]').value = phoneNumber; // Set the formatted phone number to the input
    });


    function openModal(videoSrc) {
      document.getElementById('modal-video').src = videoSrc;
      document.getElementById('videoModal').style.display = 'flex';
  }

  function closeModal() {
      document.getElementById('videoModal').style.display = 'none';
      document.getElementById('modal-video').src = "";
  }

  function updateStudent(clickedImg, name, studentClass, review, score, subjects, video) {
            let mainThumbnail = document.getElementById('video-thumbnail');
            let mainContainer = document.getElementById('video-thumbnail-container');
            let mainSrc = mainThumbnail.src;
            let mainVideo = mainContainer.getAttribute('onclick');

            mainThumbnail.src = clickedImg.src;
            clickedImg.src = mainSrc;

            mainContainer.setAttribute('onclick', `openModal('${video}')`);
            clickedImg.setAttribute('onclick', `updateStudent(this, '${document.getElementById('student-name').textContent}', '${document.getElementById('student-class').textContent}', '${document.getElementById('student-review').textContent}', '${document.getElementById('student-score').textContent.replace('Баллы: ', '')}', '${document.getElementById('student-subjects').textContent.replace('Предметы: ', '')}', '${mainVideo.match(/openModal\('(.+?)'\)/)[1]}')`);

            document.getElementById('student-name').textContent = name;
            document.getElementById('student-score').textContent = `Баллы: ${score}`;
            document.getElementById('student-subjects').textContent = `Предметы: ${subjects}`;
            document.getElementById('student-class').textContent = studentClass;
            document.getElementById('student-review').textContent = review;
        }
