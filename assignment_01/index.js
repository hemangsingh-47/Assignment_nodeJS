const express = require("express");

const cors=require('cors')
const app = express();
app.use(express.json()); //This middleware allows your server to read JSON data from request body.
app.use(cors())
const students = [
  {
    id: 1,
    name: "Aarav Sharma",
    branch: "CSE",
    semester: 8,
    cgpa: 9.3
  },
  {
    id: 2,
    name: "Ishita Verma",
    branch: "IT",
    semester: 7,
    cgpa: 8.9
  },
  {
    id: 3,
    name: "Rohan Kulkarni",
    branch: "ECE",
    semester: 6,
    cgpa: 8.4
  },
  {
    id: 4,
    name: "Meera Iyer",
    branch: "CSE",
    semester: 8,
    cgpa: 9.1
  },
  {
    id: 5,
    name: "Kunal Deshmukh",
    branch: "IT",
    semester: 5,
    cgpa: 7.8
  },
  {
    id: 6,
    name: "Ananya Reddy",
    branch: "CSE",
    semester: 6,
    cgpa: 8.7
  },
  {
    id: 7,
    name: "Vikram Patil",
    branch: "ECE",
    semester: 7,
    cgpa: 8.2
  },
  {
    id: 8,
    name: "Priyanka Nair",
    branch: "AI",
    semester: 4,
    cgpa: 8.8
  },
  {
    id: 9,
    name: "Harsh Mehta",
    branch: "Data Science",
    semester: 5,
    cgpa: 8.0
  },
  {
    id: 10,
    name: "Neha Gupta",
    branch: "CSE",
    semester: 6,
    cgpa: 7.9
  }
];




app.get("/", (req, res) => {
  res.send("Express server is running");
});

//1. GET /students....

app.get("/students", (req, res) => {
  res.status(200).json(students);
});

//2. GET /students/topper

app.get("/students/topper",(req,res)=>{

    if (!students) {
    return res.status(404).json({ message: "User not found" });
  }

    let topper=students.sort((a,b)=>b.cgpa-a.cgpa)[0];       //using sort.
    res.status(200).json(topper);
})


//3. GET /students/average

app.get("/students/average",(req,res)=>{

    if (!students) {
    return res.status(404).json({ message: "User not found" });
  }

  let sum=0;

for(let i=0;i<students.length;i++){
sum=sum+students[i].cgpa;
}

let avg=sum/students.length;

let average=[{
    _avg:avg
}]

    res.status(200).json(average);
})


//GET /students/count

app.get("/students/count",(req,res)=>{

    if (!students) {
    return res.status(404).json({ message: "User not found" });
  }

let con=[{
    count:students.length
}]

    res.status(200).json(con);
})


app.get("/students/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = students.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});


app.get("/students/branch/:branchName", (req, res) => {
  const branchName = String(req.params.branchName);
  const user = students.filter(u => u.branch === branchName);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});



app.listen(3000, () => {
  console.log("Server started on port 3000");
});