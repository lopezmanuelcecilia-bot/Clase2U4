import React, { useState } from 'react';

export default function ListaCompras() {
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState('');

  const agregarProducto = (e) => {
    e.preventDefault();
    if (!nuevoProducto.trim()) return;
    setProductos([...productos, nuevoProducto.trim()]);
    setNuevoProducto('');
  };

  const eliminarProducto = (indexEliminar) => {
    setProductos(productos.filter((_, index) => index !== indexEliminar));
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Lista de Compras</h2>
      
      <form onSubmit={agregarProducto} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          value={nuevoProducto}
          onChange={(e) => setNuevoProducto(e.target.value)}
          placeholder="Ej. Leche, Huevos..."
          style={{ flex: 1, padding: '8px' }}
        />
        <button type="submit" style={{ padding: '8px 16px' }}>Agregar</button>
      </form>

      {productos.length === 0 ? (
        <p>Tu lista está vacía. ¡Empieza a agregar productos!</p>
      ) : (
        <ul style={{ paddingLeft: '20px' }}>
          {productos.map((producto, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>
              <span style={{ marginRight: '15px' }}>{producto}</span>
              <button 
                onClick={() => eliminarProducto(index)} 
                 style={{ backgroundColor: '#ff4d4d', color: 'white', border: 'none', borderRadius: '4px', padding: '2px 8px', cursor: 'pointer' }}
              >
                Comprado
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
