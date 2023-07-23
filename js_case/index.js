
        var firstValue = parseInt(prompt("enter first Value:"));
        var secValue = parseInt(prompt("enter second Value:"));
        var result;
        var uinput = prompt("Do +,-,*,/,% :");
        switch (uinput){
            case '+' :
                result = firstValue +secValue;
                console.log("Addition is:" + result);
                break;

            case '-' :
                result = firstValue  - secValue;
                console.log("Substraction is:" + result);
                break;

            case '*' :
                result = firstValue  * secValue;
                console.log("Multiplication is:" + result);
                break;

            case '/' :
                result = firstValue  / secValue;
                console.log("Divison is:" + result);
                break;

            case '%' :
                result = firstValue  % secValue;
                console.log("Modulous is:" + result);
                break;

            default :
                console.log("wrong input");
                
        }
    