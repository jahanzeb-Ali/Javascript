    
    // let get_age = prompt("Enter Your Birthday: ", "June  25, 2002")
    // let now = new Date();
    // let findAge =  new Date(get_age); 
    // let cal_age = now - findAge
    // let day = Math.floor(cal_age /  (1000 * 60 * 60 * 24)%365%30) 
    // let month = Math.floor(cal_age /  (1000 * 60 * 60 * 24)%365/30)
    // let year = Math.floor(cal_age /  (1000 * 60 * 60 * 24*365))
    // console.log(day)
    // console.log(month)
    // console.log(year)


    function now(){
        var time = new Date();
        console.log(time.getFullYear())
        console.log(time.getMonth())
        console.log(time.getHours())
        console.log(time.getMinutes())
    }
    now()