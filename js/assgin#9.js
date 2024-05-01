        // // Task # 1
        // var students = ["Ali","kashif", "Ahad", "Adil"]
        // // // Task # 2
        // var students  = ["Ali","kashif", "Ahad", "Adil"]
        // // Task # 3
        // var strArray = ["This", "is" , "a" , "String", "array"]
        // Task # 4
        // var points = [70, 50, 60, 20,]
        // Task # 5
        // var isTrue = [true,false]

        // Task # 6
        //  var studentInfo = ["Ali", "GBH School dadu", false, 8]

        // Task # 7
        //  var qualify = ["SSC", "HSC", "BCS","BS",'BCOM', "MS","M.Phil","PhD"] 
        // document.write("<h1>Qualifications:</h1>")
        // for(var i = 0; i < qualify.length ; i++){
        //     document.write(`<h3>${i+1}) ${qualify[i]}</h3>`)
        // }

        //  Task # 8
        // var students = ["Ali","Adil", "Imran"]
        // var marks = [320,430,420]
        // for(var i = 0; i <students.length; i++){
        //     document.write(`<h3>Score of ${students[i]} is ${marks[i]}. Percentage: ${marks[i]/500 * 100}% </h3>`)
        // }
        // 
        // Task # 9 
        // var colors = ["Green", "Red", "Brown","Purple","white","yellow","black", "pink","Gray"]
        // document.write("<b>Original Array:</b> ",colors, "<br>")

        // // A):> 
        // var start_color = prompt("Enter color you want to Add in begnning: " )
        // colors.unshift(start_color)
        // document.write("<b>After adding color: </b>", colors , "<br>")

        // // B):>
        // var end_color = prompt("Enter color you want to Add in Ending: ")
        // colors.push(colors)
        // document.write("<b>After Adding color in the End:</b> ",colors , "<br>")

        // // C):> 
        // colors.unshift("blue", "Purple")
        // document.write("<b>After Adding two more colors: </b>",colors, "<br>")

        // // D):>
        // colors.shift()
        // document.write("<b>After deleting first color from colors list: </b>",colors, "<br>")
        // 
        // // E):>
        // colors.pop()
        // document.write("<b>After deleting last color from colors list: </b>",colors, "<br>")

        // // F):> 
        // var index_num = +prompt("Enter Index you want to add color: ",`length of Original color list is  ${colors.length}`)
        // var color_name = prompt("Enter Color Name you want to add: ")
        // colors.splice(index_num, 0, color_name)
        // document.write("<b>After set index value and color name: </b>", colors ,"<br>")

        // // G):> 
        // var index_num = +prompt("Enter Index delete colors: ",`length of Original color list is  ${colors.length}`)
        // colors.splice(index_num,1)
        // document.write("<b>After Removing color from colo list:</b> ", colors)
        
        // Task # 10
        // var stdntScore = [10,90,70,80]
        // document.write("Scores of students (Unsorted): ",stdntScore, "<br>")
        // stdntScore.sort()
        // document.write("Scores of students (sorted): ",stdntScore, "<br>")


        // Task # 11

        // var cities  =["Karachi", "Lahore", "Islambad","Quetta", "Peshawar"]
        // var selectedCities = cities.slice(2,4)
        // document.write("Cities list: <br>", cities ,"<br>")
        // document.write("Selected cities list: <br>", selectedCities ,"<br>")

        // Task # 12
        // var arr = ["This", "is", "my", "cat" ]
        // var joinedArr = arr.join(" ")
        // document.write("Array:<br> ", arr ,"<br>")
        // document.write("String:<br> ", joinedArr ,"<br>")
        // Task  # 13
        // var devices = ["keyboard", "mouse", "printer", "mointor"]
        // document.write("Devices: " ,devices ,"<br>")
        // for(var i =0; i <devices.length; i++){
        //     document.write(`Out: <br> ${devices[i]} <br>`)
        // }

        // Task # 14
        // var devices = ["keyboard", "mouse", "printer", "mointor"]
        // document.write("Devices: " ,devices ,"<br>")
        // for(var i =(devices.length-1); i >= 0; --i){
        //     document.write(`Out: <br> ${devices[i]} <br>`)
        // }
        
        // Task # 15
        //  var mobileCompanys = ["Apple", "Samsung", "Motrola", "Nokia","Haier"]
        //  document.write(`
        //  <div class="dropdown">
        //     <button class="dropbtn">Dropdown</button>
        //     <div class="dropdown-content">
        //         <a href="#">${mobileCompanys[0]}</a>
        //         <a href="#">${mobileCompanys[1]}</a>
        //         <a href="#">${mobileCompanys[2]}</a>
        //         <a href="#">${mobileCompanys[3]}</a>
        //         <a href="#">${mobileCompanys[4]}</a>
        //     </div>
        // </div>
        //  `)