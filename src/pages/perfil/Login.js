import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export const Login = () => {
  const [cuerpo, setCuerpo] = useState({});
  const navigate = useNavigate();

  const handle = (e) => {
    setCuerpo({ ...cuerpo, [e.target.name]: e.target.value });
  };

  const handleRegistro = () => {
    navigate("/Registrar"); // Suponiendo que "/registrar" es la ruta de registro
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <form class="card p-5 bg-white rounded">
          <h3 className="text-center mb-4">Inicio de Sesión</h3>
          <div className="form-floating mb-3">
            <input
              className="form-control border-0 border-bottom rounded-0"
              type="text"
              // onChange={handle}
              name="correo"
              placeholder=" "
              autoComplete="off"
              required
            />
            <label htmlFor="correo">Usuario o correo electrónico</label>
          </div>
          <div className="form-floating mb-4">
            <input
              className="form-control border-0 border-bottom rounded-0"
              type="password"
              // onChange={handle}
              name="password"
              placeholder=" "
              autoComplete="off"
              required
            />
            <label htmlFor="password">Contraseña</label>
          </div>
          <Link to='/Medus'
            type="submit"
            className="btn btn-info btn-lg rounded-pill text-white w-100"
          >
            Iniciar sesión
          </Link>
          <p className="mt-3 text-center">
            ¿No tienes una cuenta?{"  "}
            <span
              className="text-info"
              style={{ cursor: "pointer", fontWeight: "bold"}}
              onClick={handleRegistro}
            >
              Registrate
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};
