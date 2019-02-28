(function() {
    const board = [
    {
        "title": "President",
        "name": "Kirsten Reddish",
        "desc": "Major incidents and member inquiries",
        "email": "socpoolpres@gmail.com"
    },
    {
        "title": "Vice President",
        "name": "Janet Palfey",
        "desc": "Guard issues, information, and help",
        "email": "socpoolvice@gmail.com"
    },
    {
        "title": "Treasurer",
        "name": "Bruce Waxman",
        "desc": "Payroll, invoices, and payments",
        "email": "socpooltrea@gmail.com"
    },
    {
        "title": "Secretary",
        "name": "Elizabeth Brigham",
        "desc": "Board meeting minutes and website information",
        "email": "socpoolsecr@gmail.com"
    },
    {
        "title": "Membership Director",
        "name": "Wendy Wander",
        "desc": "New/potential members, member inquiries, and snack passes",
        "email": "socpoolmemb@gmail.com"
    },
    {
        "title": "Social Chair",
        "name": "Mark Gibson",
        "desc": "Questions, suggestions, and feedback on social events",
        "email": "socpoolsoc@gmail.com"
    },
    {
        "title": "Volunteer Coordinator",
        "name": "Greta Gosnell",
        "desc": "Volunteer opportunities and credited hours",
        "email": "socpoolvol@gmail.com"
    },
    {
        "title": "Operations Coordinators",
        "name": "Amy Woods and Stephen Lorenzetty",
        "desc": "Pool, building, and grounds maintenance issues",
        "email": "socpoolops@gmail.com"
    },
    {
        "title": "Media Coordinator",
        "name": "Mark Gibson",
        "desc": "Website, Facebook, Twitter, and entrance sign inquiries",
        "email": "socpoolweb@gmail.com"
    },
    {
        "title": "Pavilion Coordinator",
        "name": "Kim Waxman",
        "desc": "Pavilion reservations and use questions. Reservations can be made online",
        "email": "socpoolpav@gmail.com"
    }
];

function createCard(obj)
{
    let card = document.createElement("div");
    card.classList.add("row");
    card.classList.add("card");

    let title = document.createElement("div");
    title.classList.add("title");
    let position = document.createElement("span");
    position.classList.add("uppercase");
    position.innerText = obj["title"] + ": ";
    let name = document.createElement("span");
    name.classList.add("name");
    name.innerText = obj["name"];
    title.appendChild(position);
    title.appendChild(name);
    card.appendChild(title);
    
    let body = document.createElement("div");
    body.className = "body";

    let caption = document.createElement("div");
    caption.classList.add("caption");
    caption.innerText = obj["desc"];
    body.appendChild(caption);

    let mail = document.createElement("div");
    let anchor = document.createElement("a");
    anchor.href = "mailto:"+obj["email"];
    anchor.innerText = obj["email"];
    mail.appendChild(anchor)
    body.appendChild(mail);

    card.appendChild(body);
    return card;
}

function populate() {
    const mid = Math.ceil(board.length / 2);
    const placehodler = document.getElementById("board_members").parentElement;

    let col = document.createElement("div");
    col.classList.add("col-lg");
    for(let i = 0;i < mid;i++)
    {
        col.appendChild(createCard(board[i]));        
    }
    placehodler.appendChild(col);

    col = document.createElement("div");
    col.classList.add("col-lg");
    for(let i = mid;i < board.length;i++)
    {
        col.appendChild(createCard(board[i]));        
    }
    placehodler.appendChild(col);
}

populate();
})()