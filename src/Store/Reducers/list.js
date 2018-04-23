export let randomUid = Math.round(Math.random() * 100 + 1);

export const defaultPersons = () => {
  return [
    { name: "Kamil", age: 25, id: randomUid + "a" + 0, role: "user" },
    { name: "Mariusz", age: 35, id: randomUid + "a" + 1, role: "user" },
    { name: "Jarek", age: 26, id: randomUid + "a" + 2, role: "user" },
    { name: "Olaf", age: 32, id: randomUid + "a" + 3, role: "user" },
    { name: "Ania", age: 29, id: randomUid + "a" + 4, role: "user" },
    { name: "Darek", age: 19, id: randomUid + "a" + 5, role: "admin" },
    { name: "Paulina", age: 35, id: randomUid + "a" + 6, role: "user" },
    { name: "Tomasz", age: 32, id: randomUid + "a" + 7, role: "user" },
    { name: "Janusz", age: 15, id: randomUid + "a" + 8, role: "user" }
  ];
};
