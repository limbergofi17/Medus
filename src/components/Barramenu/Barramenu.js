import React from 'react'
import { Link } from 'react-router-dom'
import "./navar.css"

function Barramenu() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-warning">
    <div class="container-fluid">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe3XeMXq5Txs-OopjUw2yG6FjotIPwHKb3bA&usqp=CAU" alt="Bootstrap" width="30" height="24" /> 
      <a class="navbar-brand" to="/Medus">MEDUS</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/Medus">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" aria-current="page" to="/servocen">Mis Citas</Link>
            
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Administración de servicio
            </a>
            <ul class="dropdown-menu">
              <li><Link class="dropdown-item" to="/TablaPersonas">Admin personas</Link></li>
              <li><Link class="dropdown-item" to="/Tabla">Admin servicios</Link></li>
              <li><hr class="dropdown-divider"/></li>
              <li><Link class="dropdown-item" to="/tipos">Usuarios</Link></li>
            </ul>
          </li>
        </ul> 
      </div>
      
    </div>
  </nav>
  )
}

export default Barramenu
