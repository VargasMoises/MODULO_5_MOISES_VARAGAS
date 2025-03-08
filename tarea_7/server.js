import express from 'express'
import { readFileSync} from 'fs'

const app = express();
const PORT = 3002;
const studentsFile = 'estudiantes.json';
const getStudents = () => {
    const data = readFileSync(studentsFile);
    return JSON.parse(data);
};

app.get('/students', (req, res) => {
    const students = getStudents();
    res.json(students);
});

app.get('/students/:id', (req, res) => {
    const students = getStudents();
    const student = students.find(s => s.id === parseInt(req.params.id));

    if (!student) {
        return res.status(404).json({ error: 'Estudiante no encontrado' });
    }

    res.json(student);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
