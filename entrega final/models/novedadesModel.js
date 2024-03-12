var pool = require('./bd');


async function getNovedades() {
    var query = 'select * from novedades';
    var rows = await pool.query(query);
    return rows;
}

async function deleteNovedadesById(id) {
    var query = 'delete from novedeades where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

async function insertNovedad(obj) {
    try {
        var query = "insert into novedades set ?";
        var rows = await pool.query(query, [obj])
        return rows;

    } catch (error) {
        console.log(error);
        throw error;
    } // cierra catch
} //cierra insert


/*cargar los datos de una sola novedad en el diseño*/
async function getNovedadById(id) {
    var query = 'select * from novedades where id = ? ';
    var rows = await pool.query(query, [id]);
    return rows[0];
}

/* para modificar UPDATE de los datos*/
async function modificarNovedadById(obj, id) {
    try {
        var query = 'update novedades set ? where id=?';
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = { getNovedades, deleteNovedadesById, insertNovedad, getNovedadById, modificarNovedadById }
