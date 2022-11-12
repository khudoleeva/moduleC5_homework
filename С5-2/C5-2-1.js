//Задание1

const parser = new DOMParser();
const xmlString = `
  <list>
    <student>
      <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
      </name>
      <age>35</age>
      <prof>teacher</prof>
    </student>
    <student>
      <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
      </name>
      <age>58</age>
      <prof>driver</prof>
    </student>
  </list>
`;
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const listNode = xmlDOM.querySelector("list");
const nameNode = listNode.querySelectorAll("name");
const firstnameNode = listNode.querySelectorAll("first");
const secondnameNode = listNode.querySelectorAll("second");
const ageNode = listNode.querySelectorAll("age");
const profNode = listNode.querySelectorAll("prof");
let list = [];
let result = {list:list};
for (let i of [0,1]) {
	let obj = {
		name: firstnameNode[i].textContent +" "+ secondnameNode[i].textContent,
		age: Number(ageNode[i].textContent),
		prof: profNode[i].textContent,
		lang: nameNode[i].getAttribute("lang"),
	}
	list.push(obj);
}
console.log(result);

