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
    const students = [
        {
          name: 'Анастасия',
          description: '10 класс, сдавал ЕГЭ по математике и информатике.',
          photo: 'path-to-photo1.jpg',
          video: 'path-to-video1.mp4',
        },
        {
          name: 'Иван',
          description: '11 класс, сдал ОГЭ по русскому и математике.',
          photo: 'path-to-photo2.jpg',
          video: 'path-to-video2.mp4',
        },
        {
          name: 'Мария',
          description: '11 класс, сдала ЕГЭ по биологии.',
          photo: 'path-to-photo3.jpg',
          video: 'path-to-video3.mp4',
        },
        {
          name: 'Петр',
          description: '10 класс, сдавал ОГЭ по физике и химии.',
          photo: 'path-to-photo4.jpg',
          video: 'path-to-video4.mp4',
        },
      ];
    
      function changeStudent(index) {
        const student = students[index - 1];
        document.getElementById('student-photo').src = student.photo;
        document.getElementById('student-name').innerText = student.name;
        document.getElementById('student-description').innerText = student.description;
        document.getElementById('student-video').src = student.video;
      }
