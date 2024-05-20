// Write your code here!
const main = document.getElementById("main");
main.remove();
const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.textContent = "ABDIFATAH is the champion";
document.body.append(newHeader);
const newList = document.createElement("ul");
const student = ["mohamed", "ahmed", "hassan", "abdi"]

for (i=0; i<student.length; i++){
    const li = document.createElement("li");
    li.textContent = student[i];
    newList.append(li)

}
document.body.append(newList)
newList.style.listStyle = "none";