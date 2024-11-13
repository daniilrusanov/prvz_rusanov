// 9. Перелік основних дисциплін для трьох освітніх програм
eduPrograms = new Array();

// Читання з хмарного середовища 
async function populate() {
    const requestURL = "https://api.jsonbin.io/v3/qs/6734e778acd3cb34a8a8107b";
    const request = new Request(requestURL);
    const response = await fetch(request);
    if (response.ok) {
        const prog = await response.json();
        
        newEduPrograms(prog.record);
        showHeader();
        showEduPrograms();
    }
    else 
        alert('Помилка');
}

// Створення масив об'єктів
function newEduPrograms(obj) {
    let prog = obj;
    for (let a of prog) {
        let progr = new eduProgram(a.programName, a.dyscpName);
        eduPrograms.push(progr);
    }
}

// Виведення заголовку
function showHeader() {
    const header = document.querySelector("header");
    const myH1 = document.createElement("h1");
    myH1.innerText = "Список освітніх програм";
    header.appendChild(myH1);
}

// Виведння даних
function showEduPrograms() {
    const main = document.querySelector("article");

    const divKN = document.createElement("div");
    const divKB = document.createElement("div");
    const divIPZ = document.createElement("div");

    const myH2KN = document.createElement("h2");
    const myH2KB = document.createElement("h2");
    const myH2IPZ = document.createElement("h2");

    myH2KN.textContent = "Спеціальність КН";
    myH2KB.textContent = "Спеціальність КБ";
    myH2IPZ.textContent = "Спеціальність ІПЗ";

    const myListKN = document.createElement("ul");
    const myListKB = document.createElement("ul");
    const myListIPZ = document.createElement("ul");

    for (a of eduPrograms) {
        const listItem = document.createElement("li");
        listItem.textContent = a.dyscpName;

        if(a.programName == "КН") {
            myListKN.appendChild(listItem);
        }
        else if(a.programName == "КБ") {
            myListKB.appendChild(listItem);
        }
        else if(a.programName == "ІПЗ") {
            myListIPZ.appendChild(listItem);
        }
    }

    divKN.appendChild(myH2KN);
    divKN.appendChild(myListKN);

    divKB.appendChild(myH2KB);
    divKB.appendChild(myListKB);

    divIPZ.appendChild(myH2IPZ);
    divIPZ.appendChild(myListIPZ);

    main.appendChild(divKN);
    main.appendChild(divKB);
    main.appendChild(divIPZ);
}
populate();