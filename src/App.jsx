import './App.css';

function App() {
  const data = [
    {
      NRC: '58402',
      Curso: 'FHUM 1010',
      Titulo: 'Proyecto de Vida',
      Campus: 'COA ENGATIVA PRES',
      Creditos: '2.000',
      Nivel: 'UG',
      FechaInicio: 'May 20, 2024',
      FechaFin: 'Ago 31, 2024',
      Dias: 'M',
      Hora: '8:00 AM – 10:00 AM',
      Ubicacion: 'AP',
      Instructor: 'LORDUY FLOREZ',
    },
    {
      NRC: '15703',
      Curso: 'INFO 1010',
      Titulo: 'Ges Basi de la Información',
      Campus: 'COA ENGATIVA PRES',
      Creditos: '3.000',
      Nivel: 'UG',
      FechaInicio: 'May 20, 2024',
      FechaFin: 'Ago 31, 2024',
      Dias: 'J',
      Hora: '8:00 AM – 10:00 AM',
      Ubicacion: '201',
      Instructor: 'TRIANA TACUMA',
    },
    {
      NRC: '58141',
      Curso: 'LENG 1010',
      Titulo: 'Com Escrita y Proce Lect I',
      Campus: 'COA ENGATIVA PRES',
      Creditos: '2.000',
      Nivel: 'UG',
      FechaInicio: 'May 20, 2024',
      FechaFin: 'Ago 31, 2024',
      Dias: 'J',
      Hora: '10: 00 AM – 12:00 AM',
      Ubicacion: '206',
      Instructor: 'CARVAJAL OSPINA',
    },
    {
      NRC: '58403',
      Curso: 'TI BG061',
      Titulo: 'Introd a la Tecnología en Informática',
      Campus: 'COA ENGATIVA PRES',
      Creditos: '1.000',
      Nivel: 'UG',
      FechaInicio: 'May 20, 2024',
      FechaFin: 'Ago 31, 2024',
      Dias: 'L',
      Hora: '4: 00 PM – 6:00 PM',
      Ubicacion: '402',
      Instructor: 'MARTINEZ PEREZ',
    },
    {
      NRC: '58435',
      Curso: 'MATE 1038',
      Titulo: 'Algebra Lineal',
      Campus: 'COA ENGATIVA PRES',
      Creditos: '2.000',
      Nivel: 'UG',
      FechaInicio: 'May 20, 2024',
      FechaFin: 'Ago 31, 2024',
      Dias: 'M',
      Hora: '11: 00 AM – 1:00 PM',
      Ubicacion: '304',
      Instructor: 'ORTEGA DOMINGUEZ',
    },
    {
      NRC: '58404',
      Curso: 'MATE 1020',
      Titulo: 'Pre-cálculo',
      Campus: 'COA ENGATIVA PRES',
      Creditos: '3.000',
      Nivel: 'UG',
      FechaInicio: 'May 20, 2024',
      FechaFin: 'Ago 31, 2024',
      Dias: 'W',
      Hora: '4:00 PM – 5:00 PM',
      Ubicacion: '306',
      Instructor: 'MEDINA CARDENAS',
    },
    {
      NRC: '',
      Curso: '',
      Titulo: '',
      Campus: '',
      Creditos: '',
      Nivel: '',
      FechaInicio: 'May 20, 2024',
      FechaFin: 'Ago 31, 2024',
      Dias: 'S',
      Hora: '10:00 AM – 12:00PM',
      Ubicacion: '309',
      Instructor: 'MEDINA CARDENAS',
    },
    {
      NRC: '58436',
      Curso: 'TI BG051',
      Titulo: 'Programación básica',
      Campus: 'COA ENGATIVA PRES',
      Creditos: '3.000',
      Nivel: 'UG',
      FechaInicio: 'May 20, 2024',
      FechaFin: 'Ago 31, 2024',
      Dias: 'W',
      Hora: '2:00 PM – 4:00PM',
      Ubicacion: '404',
      Instructor: 'AGUDELO QUINTERO',
    },
    {
      NRC: '',
      Curso: '',
      Titulo: '',
      Campus: '',
      Creditos: '',
      Nivel: '',
      FechaInicio: 'May 20, 2024',
      FechaFin: 'Ago 31, 2024',
      Dias: 'S',
      Hora: '9: 00 AM – 10:00 AM',
      Ubicacion: '404',
      Instructor: 'AGUDELO QUINTERO',
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
      <header>
        <div className="images-container">
          <img src="Logo.webp.png" alt="logo" />

          <div className="line"></div>
          <img src="genesis.png" alt="logo" />
        </div>

        <button>Salir</button>
      </header>

      <div className="input-container">
        <img src="search.png" alt="" />
        <input type="text" placeholder="Encontrar una página." />
      </div>
      <br />

      <h1>Horario Conciso de Alumno</h1>

      <div className="student-info-container">
        <div className="info">
          <img src="back.png" alt="" />

          <div>
            <div>JENNY K. RAMÍREZ CARRILLO</div>

            <div>Pregrado Pres. 2024-2 </div>
          </div>
        </div>
      </div>

      <div className="tables-container">
        <div className="div-info">
          <img src="chat.png" alt="" />
          Esta página lista las clases en las que está inscrito para el período.
          Incluye toda la información detallada sobre las clases.
        </div>
        <table className="table-1">
          <tr>
            <th>Nombre:</th>
            <td> JENNY K. RAMÍREZ CARRILLO</td>
          </tr>
          <br />
          <tr>
            <th>Clasificación:</th>
            <td>Primer Cuatrimestre</td>
          </tr>
          <tr>
            <th>Nivel:</th>
            <td>Pregrado</td>
          </tr>
          <tr>
            <th>Escuela:</th>
            <td>Fac. Ingeniería</td>
          </tr>
          <tr>
            <th>Carrera:</th>
            <td>Tecnología en Informática</td>
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
      </div>
    </>
  );
}

export default App;
