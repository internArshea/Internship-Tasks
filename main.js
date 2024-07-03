    let inputfield = document.querySelector('#inputText');
    let output = document.querySelector('#outputText');
    let historylist = document.querySelector('#list');
    let button = document.querySelectorAll('.sci-ops, .arth-ops, .num, .remove, .parenOpen, .parenClose, .equals');

    let operators =['+', '-', 'x','/','^'];
    let string="";
    let history = [];
    let arr = Array.from(button);

    arr.forEach(btn =>{
        btn.addEventListener('click', (v) =>{
            if(v.target.textContent == '='){
                let answer = parseString(string);
                output.value = answer;
                addHistory(inputfield.value + '=' + output.value);

            }
            else if(v.target.textContent == 'Del'){
                string = string.substring(0, string.length - 1);
                inputfield.value = string;
            }
            else if(v.target.textContent == 'AC'){
                string = "";
                inputfield.value = string;
                output.value = string;
            }
            else{
            string += v.target.textContent;
            inputfield.value = string;
            }
        })
    })
    
    function parseString(string){
    
        let stack =[null];
        let prefix = "";

        if(string.startsWith('sin(') && string.endsWith(')')){return Math.sin(Number(string.slice(4, -1)))}
        if(string.startsWith('cos(') && string.endsWith(')')){return Math.cos(Number(string.slice(4, -1)))}
        if(string.startsWith('tan(') && string.endsWith(')')){return Math.tan(Number(string.slice(4, -1)))}
        if(string.startsWith('sqrt(') && string.endsWith(')')){return Math.pow(Number(string.slice(5, -1)), 1/2)}

        string = string.replace(/pi/g, '3.1415');
        string = string.replace(/e/g, '2.7182');

        for(let i=0; i<string.length; i++){
            if(/[-0-9]/.test(string[i]) || string[i] === '.'){
                let num = "";
            while (i < string.length && (/[-0-9]/.test(string[i]) || string[i] === '.')) {
                num += string[i];
                i++;
            }
            i--; 
                prefix += `[${num}]`;
            }
            else if(string[i]==='('){
                stack.unshift(string[i]);
            }
            else if(string[i] === ')'){
                while(stack[0] != null && stack[0] != '('){
                    prefix += stack[0];
                    stack.splice(0, 1);
                }
                if(stack[0] === '('){
                    stack.splice(0,1);
                }
            }
            else if(operators.includes(string[i])){
                console.log("enter");
                if(stack[0]===null){
                    stack[0] = string[i];
                }
                else{
                    if(precedence(string[i])>precedence(stack[0])){
                        stack.unshift(string[i]);
                    }
                    else if(precedence(string[i]===precedence(stack[0]))){
                        stack.unshift(string[i]);
                    }
                    else{
                        while(stack[0] !== null && stack[0] !== '(' && precedence(string[i] <= precedence(stack[0]))){
                            prefix += stack[0];
                            stack.splice(0,1);
                        }
                        stack.unshift(string[i]);
                    }
                }
            }
            else{
                output.value = "Wrong Expression";
            }
       }
       while(stack[0] != null){
        prefix += stack[0];
        stack.splice(0,1);
        }
        let prefixExpression = prefix.split('').reverse().join('');
        let result = parsePrefix(prefixExpression);

        return result;
    }
     
    function parsePrefix(prefixExp){
        let stack=[]
        for(let i=prefixExp.length-1; i>=0; i--){
            if(/[-0-9]/.test(prefixExp[i])){
                let num="";
                while(i>=0 && (/[-0-9]/.test(prefixExp[i]) || prefixExp[i] ==='.')){
                    num += prefixExp[i];
                    prefixExp.replace(i+2, "");
                    i--;
                    }
                i++;
                stack.push(parseFloat(num));
            }
            else if(operators.includes(prefixExp[i])){
                let operand2, operand1, result;
                if(prefixExp[i]==='sqrt' || prefixExp[i]==='sin' || prefixExp[i]==='cos' || prefixExp[i]==='tan'){
                    operand1 = Number(stack.pop());
                    result = performOperation(prefixExp[i], operand1, null);
                }
                else{
                operand2 = Number(stack.pop());
                operand1 = Number(stack.pop());
                result = performOperation(prefixExp[i], operand1, operand2);
                }
                stack.push(result.toFixed(4));
            }

        }
        return stack[0];
    }

    function performOperation(operator, operand1, operand2){
        switch(operator){
            case '+':
                return operand1 +  operand2;

            case '-':
                return operand1 - operand2;

            case 'x':
                return operand1 * operand2;

            case '/':
                if(operand2 === 0){
                    return "Error";
                }
                else{
                return operand1 / operand2;
                }
                    
            case '^':
                return Math.pow(operand1, operand2);
       }
    }

    function addHistory(expression){
        let list = document.createElement('li');
        list.innerHTML = `<div class="expression">${expression}</div> <button id="delHistory" onclick="deleteHistoryExp(this)">Del</button>`;
        historylist.prepend(list);
    }

    function deleteHistoryExp(button){
        let list = button.parentNode;
        historylist.removeChild(list);
    }

    function clearAllHistory(){
        historylist.textContent = "";
    }
    function precedence(c){
        if(c=Number)
            return -1;
        switch(c){
            case '-':
                return 1;
            case '+':
                return 2;
            case 'x':
                return 3;
            case '/':
                return 4;
            case '^':
                return 5;
        }
    }

