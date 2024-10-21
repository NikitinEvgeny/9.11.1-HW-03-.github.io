
const Generation = document.querySelector('#Generation');
Generation.addEventListener('click', 
    function() {
        
        const initPerson = personGenerator.getPerson();
        const initPatronymic = personGenerator.getPatronymic();
        document.getElementById('firstNameOutput').innerText = initPerson.firstName;
        document.getElementById('surnameOutput').innerText = initPerson.firstSurname;
        document.getElementById('genderOutput').innerText = initPerson.gender;
        document.getElementById('birthYearOutput').innerText = initPerson.initYrs;
        document.getElementById('firstSurnamOutput').innerText = initPatronymic.patronymic;
        document.getElementById('profession').innerText = initPerson.profession;
        document.getElementById('randomMmonth').innerText = initPerson.month;
        document.getElementById('randomDay').innerText = initPerson.day;
      });

      const clear = document.querySelector('#clear');
      clear.addEventListener('click', 
    function() {
        document.getElementById('firstNameOutput').innerText = "Иван";
        document.getElementById('surnameOutput').innerText = "Иванов";
        document.getElementById('genderOutput').innerText = "Генерация пола";
        document.getElementById('birthYearOutput').innerText = "Генерация года рождения";
        document.getElementById('firstSurnamOutput').innerText = "Иванович";
        document.getElementById('profession').innerText ="Работник" ;
        document.getElementById('randomMmonth').innerText = "месяц";
        document.getElementById('randomDay').innerText = "День";
        

      });





