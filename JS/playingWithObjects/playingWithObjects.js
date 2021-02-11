var users = [
    {
        name: "Michael",
        age: 37
    },
    {
        name: "John",
        age: 30
    },
    {
        name: "David",
        age: 27
    }
];

for (var userIndex in users){
  console.log(`${users[userIndex].name} - ${users[userIndex].age}`);
}


