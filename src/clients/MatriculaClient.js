import axios from 'axios';

const consultarTodos = async () => {
    const data = axios.get('http://localhost:8081/matricula/api/v1.0/estudiantes')
        .then(r => r.data);
    console.log(data);
    return data;

}

const consultarPorId = async (id) => {
    const data = axios.get(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`)
        .then(r => r.data);
    console.log(data);
    return data;
}

const guardar = async (body) => {

    /*const objeto = {
            nombre: 'Byron',
            apellido: 'Flores'
    }*/

    const data = axios.post(`http://localhost:8081/matricula/api/v1.0/estudiantes`, body)
        .then(r => r.data);
    console.log(data);
    return data;
}

const actualizar = async (id, body) => {
    const response = await axios.put(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`, body);
    console.log('Respuesta de actualizar:', response);
    return response.data || { success: true };
}

const actualizarParcial = async (id, body) => {
    const response = await axios.patch(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`, body);
    console.log('Respuesta de actualizarParcial:', response);
    return response.data || { success: true };
}

const borrar = async (id) => {
    const response = await axios.delete(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`);
    console.log('Respuesta de borrar:', response);
    return response.data || { success: true };
}


//Fachada

export const consultarTodosFachada = async () => {
    return await consultarTodos();
}

export const consultarPorIdFachada = async (id) => {
    return await consultarPorId(id);
}

export const guardarFachada = async (body) => {
    return await guardar(body);
}

export const actualizarFachada = async (id, body) => {
    return await actualizar(id, body);
}

export const actualizarParcialFachada = async (id, body) => {
    return await actualizarParcial(id, body);
}

export const borrarFachada = async (id) => {
    await borrar(id);
}
