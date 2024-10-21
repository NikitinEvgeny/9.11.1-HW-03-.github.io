const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,


    nameWomanJson:`{
        "count":15,
        "list": {
        "id_1":"Наталья",
        "id_2":"Александра",
        "id_3":"Татьяна",
        "id_4":"Алена",
        "id_5":"Валентина",
        "id_6":"Людмила",
        "id_7":"Елена",
        "id_8":"Наталья",
        "id_9":"Александра",
        "id_10":"Татьяна",
        "id_11":"Алена",
        "id_12":"Валентина",
        "id_13":"Людмила",
        "id_14":"Елена",
        "id_15":"Елена"
               }
        }`,


        workManJson:`{
        "count":9,
        "list": {
        "id_1":"Актер",
        "id_2":"Артист",
        "id_3":"Певец",
        "id_4":"Учитель",
        "id_5":"Слесарь",
        "id_6":"Машинист",
        "id_7":"Токарь",
        "id_8":"Строитель",
        "id_9":"Няня"
               }
        }`,


        
        workWomanJson:`{
            "count":9,
            "list": {
            "id_1":"Швея",
            "id_2":"Актриса",
            "id_3":"Певица",
            "id_4":"Учительница",
            "id_5":"Медсестра",
            "id_6":"Косметолог",
            "id_7":"Визажист",
            "id_8":"Воспитательница",
            "id_9":"Няня"
                   }
            }`,


            MmonthJson:`{
                "count":12,
                "list": {
                "id_1":"Января",
                "id_2":"Февраля",
                "id_3":"Марта",
                "id_4":"Майя",
                "id_5":"Июня",
                "id_6":"Июля",
                "id_7":"Август",
                "id_8":"Сентября",
                "id_9":"Октября",
                "id_10":"Ноября",
                "id_11":"Декабря",
                "id_12":"Января"
                       }
                }`,
            
        

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

   randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),
   ranDay: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),
 
    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`; 
        return obj.list[prop];
    },


    randomMmonth: function(){
        return  this.randomValue(this.MmonthJson)
       },

       randomDay: function(){
        if ( this.person.month === "Апрель"||this.person.month === "июнь"||this.person.month==="сентябрь"||this.person.month==="ноябрь")
           {
            console.log(this.ranDay(1, 30));
            return  this.ranDay(1, 30);
           }

           else if (this.person.month ==="Февраль") {
            console.log(this.ranDay(1, 30));
            return  this.ranDay(1, 29);
           }
           else
           {
            return  this.ranDay(1, 31);
           }

       },

    



    randomprofession: function () {
        if (this.person.gender  === 'Женщина'){
          return  this.randomValue(this.workWomanJson)
        }
        else  {
          return this.randomValue(this.workManJson)
        }


    },



    randomYers: function(){
        const yers = this.randomIntNumber(1985, 2024);
        console.log(yers);
        return  yers ;
        },
    
    
    
        randomGender:function(){
        return   this.randomIntNumber (7, 0)%2 == 0 ?  this.GENDER_MALE : this.GENDER_FEMALE;
         },

       
      
    

    randomFirstName: function( ) {

     if (this.person.gender  === 'Мужчина')
       {
        return this.randomValue(this.firstNameMaleJson)
       } 
       else if (this.person.gender  === 'Женщина')
         {
           
     return this.randomValue(this.nameWomanJson)
      }
    },


     randomSurname: function() {

        
       if (this.person.gender  === 'Мужчина')
       {
       return this.randomValue(this.surnameJson);
       } 
       else if (this.person.gender  === 'Женщина')
         {
     return this.randomValue(this.surnameJson) + "а";
      }
    },



    
       getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.firstSurname  = this.randomSurname();
        this.person.initYrs = this.randomYers();
        this.person.profession = this.randomprofession();
        this.person.month = this.randomMmonth();
        this.person.month = this.randomMmonth();
        this.person.day = this.randomDay();
        return this.person;
    },



//------------------------------------------------------------------------------------------------------

    randomPatronymic:function () {
  
            let mir =[];
           mir =  this.randomValue(this.firstNameMaleJson);
           let mirr = Array.from(mir);
         if (this.person.gender  === 'Мужчина')
            {     
                   
                      if   (mirr.at(-1)  === "й")
                         {
                                 mirr.push("евич");
                                let  mirrr = mirr.join('');
                                return   mirrr;
                                   }

                             else if (mirr.at(-1) === "а" ) {
                                mirr.pop();
                                mirr.push("ич");
                               let  mirrr = mirr.join('');
                               return   mirrr;
}
                       else {    

            return  mir  += "ович";
             }
            } 
         
          else  {

                 if   (this.person.gender  === 'Женщина')
                    {
                      if   (mirr.at(-1) === "й")
                         {
                                 mirr.push("евна");
                                let  mirrr = mirr.join('');
                                return   mirrr;
                                   }

                             else if (mirr.at(-1) === "а" ) {
                                mirr.pop()
                                mirr.push("ична");
                               let  mirrr = mirr.join('');
                               return   mirrr;
                                }
                       else {
             return mir  += "овна" ; 
             }        

         }  
     }
 },


    getPatronymic:function () {
     this.surname = {};
     this.surname.patronymic = this.randomPatronymic();
     return this.surname;
    },

   //--------------------------------------------------------------------------------------
};



