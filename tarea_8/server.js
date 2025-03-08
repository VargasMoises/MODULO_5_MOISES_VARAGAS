import express from 'express';
import {readFileSync, writeFileSync} from 'fs';

const express = require("express");
const app = express();
const PORT = 3002;
const DATA_FILE = "estudiantes.json";

app.use(express.json());

const readStudents = () => {
    try {
        const data = readFileSync(DATA_FILE, "utf8");
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};

const writeStudents = (students) => {
    writeFileSync(DATA_FILE, JSON.stringify(students, null, 2), "utf8");
};

app.get("/students", (req, res) => {
    const students = readStudents();
    res.json(students);
});

app.get("/students/:id", (req, res) => {
    const students = readStudents();
    const student = students.find(s => s.id === parseInt(req.params.id));

    if (!student) {
        return res.status(404).json({ message: "Estudiante no encontrado" });
    }
    res.json(student);
});

app.post("/students", (req, res) => {
    const { name, age, major } = req.body;

    if (!name || !age || !major) {
        return res.status(400).json({ message: "Faltan datos obligatorios" });
    }

    let students = readStudents();
    const newStudent = {
        id: students.length > 0 ? students[students.length - 1].id + 1 : 1,
        name,
        age,
        major
    };

    students.push(newStudent);
    writeStudents(students);

    res.status(201).json(newStudent);
});

app.put("/students/:id", (req, res) => {
    const { name, age, major } = req.body;
    const students = readStudents();
    const index = students.findIndex(s => s.id === parseInt(req.params.id));

    if (index === -1) {
        return res.status(404).json({ message: "Estudiante no encontrado" });
    }

    if (name) students[index].name = name;
    if (age) students[index].age = age;
    if (major) students[index].major = major;

    writeStudents(students);
    res.json(students[index]);
});

app.delete("/students/:id", (req, res) => {
    let students = readStudents();
    const newStudents = students.filter(s => s.id !== parseInt(req.params.id));

    if (students.length === newStudents.length) {
        return res.status(404).json({ message: "Estudiante no encontrado" });
    }

    writeStudents(newStudents);
    res.json({ message: "Estudiante eliminado exitosamente" });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


