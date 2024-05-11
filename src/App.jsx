import './App.css';

function App() {
  const data = [
    {
      NRC: '4301',
      Curso: 'FHUM 1010 11',
      Titulo: 'Proyecto de Vida',
      Campus: 'COA ENGATIVA PRES',
      Creditos: 2.0,
      Nivel: 'UG',
      FechaInicio: 'Ago 10, 2020',
      FechaFin: 'Nov 28, 2020',
      Dias: 'J',
      Hora: '7:00 AM - 8:29 AM',
      Ubicacion: 'PA',
      Instructor: 'LORDUY FLOREZ',
    },
    {
      NRC: '1607',
      Curso: 'FHUM 1120 1',
      Titulo: 'Constitución Política',
      Campus: 'COA ENGATIVA PRES',
      Creditos: 2.0,
      Nivel: 'UG',
      FechaInicio: 'Ago 10, 2020',
      FechaFin: 'Nov 28, 2020',
      Dias: 'J',
      Hora: '8:30 AM - 9:59 AM',
      Ubicacion: 'PA',
      Instructor: 'PEÑA RIVERA',
    },
    {
      NRC: '',
      Curso: '',
      Titulo: '',
      Campus: '',
      Creditos: '',
      Nivel: '',
      FechaInicio: 'Ago 10, 2020',
      FechaFin: 'Nov 28, 2020',
      Dias: 'J',
      Hora: '8:30 AM - 9:59 AM',
      Ubicacion: 'PA',
      Instructor: 'PEÑA RIVERA',
    },
    {
      NRC: '1607',
      Curso: 'FHUM 1120 1',
      Titulo: 'Constitución Política',
      Campus: 'COA ENGATIVA PRES',
      Creditos: 2.0,
      Nivel: 'UG',
      FechaInicio: 'Ago 10, 2020',
      FechaFin: 'Nov 28, 2020',
      Dias: 'J',
      Hora: '8:30 AM - 9:59 AM',
      Ubicacion: 'PA',
      Instructor: 'PEÑA RIVERA',
    },
    {
      NRC: '',
      Curso: '',
      Titulo: '',
      Campus: 'Total Créditos:',
      Creditos: '16.000',
      Nivel: '',
      FechaInicio: '',
      FechaFin: '',
      Dias: '',
      Hora: '',
      Ubicacion: '',
      Instructor: '',
    },
  ];

  return (
    <>
      <table className="table-1">
        <tr>
          <th>Clasificación:</th>
          <td>Primer Semestre</td>
        </tr>
        <tr>
          <th>Nivel:</th>
          <td>Pregrado</td>
        </tr>
        <tr>
          <th>Escuela:</th>
          <td>Fac Ciencias Humanas y Sociale</td>
        </tr>
        <tr>
          <th>Carrera:</th>
          <td>
            Psicología
            <br />
            Fac Ciencias Humanas y Sociale
          </td>
        </tr>
      </table>

      <br />
      <br />

      <table className="table-2">
        <thead>
          <tr>
            <th>NRC</th>
            <th>Curso</th>
            <th>Título</th>
            <th>Campus</th>
            <th>Créditos</th>
            <th>Nivel</th>
            <th>Fecha Inicio</th>
            <th>Fecha Fin</th>
            <th>Días</th>
            <th>Hora</th>
            <th>Ubicación</th>
            <th>Instructor</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.NRC}</td>
              <td>{row.Curso}</td>
              <td>{row.Titulo}</td>
              <td>{row.Campus}</td>
              <td>{row.Creditos}</td>
              <td>{row.Nivel}</td>
              <td>{row.FechaInicio}</td>
              <td>{row.FechaFin}</td>
              <td>{row.Dias}</td>
              <td>{row.Hora}</td>
              <td>{row.Ubicacion}</td>
              <td>{row.Instructor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
