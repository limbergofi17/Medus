import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Registrar = () => {
  const [body, setBody] = useState({});
  const handle = (e) => setBody({ ...body, [e.target.name]: e.target.value });
  const nav = useNavigate();
  const env = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("datos", JSON.stringify(body));
      nav("/Login");
    } catch (err) {
      console.log(err);
    }
  };

  const goBack = () => {
    nav("/Login");
  };

  return (
    <div>
      <div className="p-4"></div>
      <div className="d-flex justify-content-center">
        <div className="container">
          <form
            onSubmit={env}
            className="my-5 p-5 rounded shadow"
            style={{ backgroundColor: "#F3F1E9" }}
          >
            <h3 className="text-center mb-4">REGISTRARSE</h3>
            <div className="row mb-3">
              <div className="col">
                <label className="form-label">Nombre:</label>
                <input
                  type="text"
                  name="nombre"
                  className="form-control"
                  value={body.nombre}
                  onChange={handle}
                  required
                />
              </div>
              <div className="col">
                <label className="form-label">Apellido paterno:</label>
                <input
                  type="text"
                  name="apepat"
                  className="form-control"
                  value={body.apepat}
                  onChange={handle}
                  required
                />
              </div>
              <div className="col">
                <label className="form-label">Apellido materno:</label>
                <input
                  type="text"
                  name="apemat"
                  className="form-control"
                  value={body.apemat}
                  onChange={handle}
                  required
                />
              </div>
            </div>
            
            <div className="row mb-3">
              <div className="col">
                <label className="form-label">Teléfono:</label>
                <input
                  type="text"
                  name="telefono"
                  className="form-control"
                  value={body.telefono}
                  onChange={handle}
                  required
                />
              </div>
              <div className="col">
                <label className="form-label">Correo:</label>
                <input
                  type="text"
                  name="correo"
                  className="form-control"
                  value={body.correo}
                  onChange={handle}
                  required
                  pattern="^(\w|\d)*@(gmail|hotmail|outlook)\.(com|mx|es)$"
                />
              </div>
              <div className="col">
                <label className="form-label">Edad:</label>
                <input
                  type="text"
                  name="edad"
                  className="form-control"
                  value={body.edad}
                  onChange={handle}
                  required
                />
              </div>
            </div>
            
            <div className="row mb-3">
              <div className="col">
                <label className="form-label">Escribe una contraseña:</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={handle}
                  required
                />
              </div>
            </div>
            
            <div className="d-flex justify-content-between">
              <button
                className="btn btn-secondary"
                type="button"
                onClick={goBack}
              >
                Regresar
              </button>
              <button
                className="btn btn-primary"
                style={{
                  backgroundColor: "#FFB700",
                  borderRadius: "0.3rem",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#FFD700")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#FFB700")}
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};