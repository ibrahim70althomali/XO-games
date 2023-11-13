// نبدا ب
let  tuen = 'x';
// 
let title = document.querySelector('.tit');
//خطوه الثاني
let squares = [];
function winners(num1,num2,num3) 
       {
        //  الفايز هو num1
        title.innerHTML=`${squares[num1]} winner`;
        //   عنصر الي في id (num1)
        document.getElementById('item'+ num1).style.background="#ffff";
        document.getElementById('item'+ num2).style.background="#ffff";
        document.getElementById('item'+ num3).style.background="#ffff";
        // تطلع الفايز
        setInterval(function(){title.innerHTML+='.'},1000);
        // reload pag
        setTimeout(function(){location.reload()},4000);
        }
// مقانه 
 function winner() {
    for(let i= 1 ;i<10;i++)
    {
       squares[i]=document.getElementById('item' + i).innerHTML;
    }


    // بعرض
    if (squares[1]== squares[2] && squares[2]==squares[3] && squares[1]!= '')
    {
        // الفايزين
      winners(1,2,3);
    } 

    else if (squares[4]== squares[5] && squares[5]==squares[6] && squares[5]!= '')
    {

        winners(4,5,6);

    }
    else if (squares[7]== squares[8] && squares[8]==squares[9] && squares[8]!= '')
    {
        winners(7,8,9);
    }
       //بطول
    else if (squares[1]== squares[4] && squares[4]==squares[7] && squares[1]!= '')
    {
        winners(1,4,7);
    }
    else if (squares[2]== squares[5] && squares[5]==squares[8] && squares[2]!= '')
    {
        winners(2,5,8);

    }
     else if (squares[3]== squares[6] && squares[6]==squares[9] && squares[3]!= '')
    {
        winners(3,6,9);     
    }
    // كروس
    else if (squares[1]== squares[5] && squares[5]==squares[9] && squares[5]!= '')
    {
        winners(1,5,9);
    }
    else if (squares[3]== squares[5] && squares[5]==squares[7] && squares[5]!= '')
    {
        winners(3,5,7);
    }
    }
     //  main
    function game(id) {
        // ايدي المربع
    let element = document.getElementById(id);
        //  يكون فاضي 
    if (tuen === 'x' && element.innerHTML == ''){
        // اكتب جوته x
        element.innerHTML='X';
        // دور o
        tuen = 'o';
        // اكتب في العنوان دور o
        title.innerHTML = 'O';
    }
    else if (tuen === 'o' && element.innerHTML==''){
        element.innerHTML='O';
        tuen = 'x';
        title.innerHTML = 'X';
    }
    // مقارنه
    winner()
   }