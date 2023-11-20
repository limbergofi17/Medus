import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "../../../services/Axios";
import Barramenu from "../../../components/Barramenu/Barramenu"

const variables = {
    _id: "",
    nombre: "",
    precio: "",
    cantidad: "",
    descripcion: "",
    image: "",
};

const obtenerProducto = async (id) => {
    return Axios.get("/producto/oneProducto/" + id);
};

const loadFileFromPath = async (path) => {
    const fileResponse = await fetch(path);
    const blob = await fileResponse.blob();

    const file = new File([blob], "image.jpg", { type: "image/jpeg" });

    const dT = new DataTransfer();
    dT.items.add(file);

    return dT;
};

const urlImages = "http://localhost:4001/images/";



function EditarServicio() {
    const { id } = useParams();

    const navigate = useNavigate();

    const [saveDatos, setSaveDatos] = useState(variables);

    const onChange = (e) => {
        const { name, value } = e.target;
        setSaveDatos({ ...saveDatos, [name]: value });
    };

    const onChangeImage = (e) => {
        const { name, files } = e.target;
        setSaveDatos({ ...saveDatos, [name]: files[0] });
    };

    const EditarForm = async (e) => {
        e.preventDefault();
        const formu = document.getElementById("form-producto");
        const formData = new FormData(formu);
        await Axios.patch("producto/updateProducto/" + id, formData).then(() => {
            navigate("/Medus");
        });
    };

    useEffect(() => {
        obtenerProducto(id).then(async (response) => {
            const filename = response.data.filename;
            const imageField = document.querySelector("#image");
            imageField.files = (
                await loadFileFromPath(`${urlImages}/${filename}`)
            ).files;

            setSaveDatos({
                ...response.data,
            });
        });
    }, []);

    return (
        <div>
            <Barramenu/>
            <div class="container">
                <br/>
                <div class="card p-6">
                    <div class="card-body">
                        <form class="row g-3" onSubmit={EditarForm} id="form-producto">
                            <div class="col-md-12">
                                <label for="validationDefault01" class="form-label">
                                    Nombre del producto
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="validationDefault01"
                                    placeholder="Nombre del producto"
                                    name="nombre"
                                    value={saveDatos.nombre}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                            <div class="col-md-12">
                                <label for="validationDefault02" class="form-label">
                                    Precio
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="validationDefault02"
                                    placeholder="Precio del producto"
                                    name="precio"
                                    value={saveDatos.precio}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                            <div class="col-md-12">
                                <label for="validationDefault02" class="form-label">
                                    Cantidad
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="validationDefault02"
                                    placeholder="Cantidad de productos"
                                    name="cantidad"
                                    value={saveDatos.cantidad}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                            <div class="col-md-12">
                                <label for="validationDefault02" class="form-label">
                                    Descripcion
                                </label>
                                <textarea
                                    type="text"
                                    class="form-control"
                                    id="validationDefault02"
                                    placeholder="Redacta una descripción"
                                    name="descripcion"
                                    value={saveDatos.descripcion}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                            <div class="col-md-12">
                                <input
                                    type="file"
                                    accept="image/*"
                                    class="form-control"
                                    id="image"
                                    placeholder="Ingresa la imagen"
                                    name="image"
                                    onChange={onChangeImage}
                                    required
                                />
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary" type="submit">
                                    Editar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditarServicio
