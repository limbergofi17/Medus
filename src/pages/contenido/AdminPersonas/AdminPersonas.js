import React, { useState, useEffect } from "react";
import Axios from "../../../services/Axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Barramenu from "../../../components/Barramenu/Barramenu";

function AdminPersonas() {
  const datos = {
    id: "",
    nombre: "",
    apellidos: "",
    edad: "",
    telefono: "",
    email: "",
    image: "",
  };

  const urlImages = "http://localhost:4001/images/";

  const [saveDatos, setSaveDatos] = useState(datos);
  const [almacenarDatos, setAlmacenarDatos] = useState([]);
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setSaveDatos({ ...saveDatos, [name]: value });
  };

  const GuardarDatos = async (e) => {
    e.preventDefault();
    const formu = document.getElementById("form-persona");
    const formData = new FormData(formu);
    await Axios.post("persona/guardarPersona", formData).then(() => {
      console.log("Registros guardados correctamente");
    });
    consultarInformacion();
    setSaveDatos(datos);
  };

  const consultarInformacion = async () => {
    const consultar = await Axios.get("persona/consultarPersona");
    setAlmacenarDatos(consultar.data);
  };

  const Eliminar = async (id) => {
    const eliminar = await Axios.delete(`persona/eliminarPersona/${id}`);
    console.log("Los datos se eliminaron correctamente: " + eliminar);
    consultarInformacion();
  };

  useEffect(() => {
    consultarInformacion();
  }, []);

  const listarPersona = almacenarDatos.map((persona, index) => {
    return (
      <tbody key={index}>
        <tr className="text-center">
          <th scope="row">{index + 1}</th>
          <td>{persona.nombre}</td>
          <td>{persona.apellidos}</td>
          <td>{persona.edad}</td>
          <td>{persona.telefono}</td>
          <td>{persona.email}</td>
          <td>
            <img
              src={urlImages + persona.filename}
              className="img-thumbnail"
              alt="..."
              style={{ width: "50px" }}
            />
          </td>
          <td>
            <button
              className="btn btn-info"
              onClick={() => navigate(`/EditarPersonas/${persona._id}`)}
            >
              <i className="bi bi-pencil"></i>
            </button>
          </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => Eliminar(persona._id)}
            >
              <i className="bi bi-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    );
  });

  return (
    <div>
      <Barramenu />

      <div className="section p-4">
        <div className="text-center text-warning">
          <h1>Administración de Personas</h1>
          <br />
          <center>
            <button type="button" className="btn btn-warning">
              <Link className="dropdown-item" to="/Formulario de Personas">
                Agregar Personas
              </Link>
            </button>
          </center>
        </div>
      </div>

      <table className="table table-bordered border-primary table-dark table-hover">
        <thead>
          <tr className="text-center">
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Edad</th>
            <th scope="col">Telefono</th>
            <th scope="col">Email</th>
            <th scope="col">Imagen</th>
            <th scope="col">Editar</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>

        {listarPersona}
      </table>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content bg-info">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Registro de personas
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              ></button>
            </div>
            <div class="modal-body">
              <form
                class="row g-3"
                onSubmit={GuardarDatos}
                id="form-persona"
                encType="multipart/form-data"
              >
                <div class="col-md-12">
                  <label for="validationDefault01" class="form-label">
                    Nombre del persona
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="nombre"
                    placeholder="Ingrese nombre"
                    name="nombre"
                    value={saveDatos.nombre}
                    onChange={onChange}
                    required
                  />
                </div>
                <div class="col-md-12">
                  <label for="validationDefault02" class="form-label">
                    Apellidos
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="precio"
                    placeholder="Ingrese apellidos"
                    name="precio"
                    value={saveDatos.precio}
                    onChange={onChange}
                    required
                  />
                </div>

                <div class="col-md-12">
                  <label for="validationDefault02" class="form-label">
                    Email
                  </label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="descripcion"
                    placeholder="Ingrese Email"
                    name="descripcion"
                    value={saveDatos.descripcion}
                    onChange={onChange}
                    required
                  />
                </div>
                <div class="col-md-12">
                  <input
                    type="file"
                    class="form-control"
                    id="image"
                    placeholder="Ingresa la imagen"
                    name="image"
                    value={saveDatos.image}
                    onChange={onChange}
                    required
                  />
                </div>
                <div class="col-12">
                  <center>
                    <button class="btn btn-primary" type="submit">
                      Guardar
                    </button>
                  </center>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminPersonas
