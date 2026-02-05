# 🧪 Guía de Prueba - Autenticación Dinámmica

## Cómo Probar

### Paso 1: Asegúrate de que los servidores estén corriendo
```bash
# Servidor de autenticación (puerto 8082)
http://localhost:8082/auth/token?user=jahir78&password=Elpepe72

# Servidor de matrícula (puerto 8081)
http://localhost:8081/matricula/api/v1.0/estudiantes
```

### Paso 2: Ejecuta la aplicación Vue
```bash
npm run serve
```

Deberías ver:
- ✅ Mensaje "Obteniendo credenciales..."
- ✅ Después de 2-3 segundos → Aparece la navegación
- ✅ Muestra "👤 jahir78" en la esquina superior derecha

---

## Pruebas en la Consola del Navegador

### Abrir DevTools (F12) → Console

#### 1. Verificar que el token se guardó
```javascript
localStorage.getItem('auth_token')
// Deberías ver un token JWT largo
```

#### 2. Verificar que el usuario se guardó
```javascript
localStorage.getItem('auth_usuario')
// Deberías ver: "jahir78"
```

#### 3. Verificar la función de autenticación
```javascript
import { estaAutenticado, obtenerTokenGuardado } from '/src/auth.js'

estaAutenticado()
// Deberías ver: true

obtenerTokenGuardado()
// Deberías ver el token JWT
```

---

## Flujo Paso a Paso (Lo que sucede automáticamente)

```
1. App.vue monta (mounted)
   ↓
2. Llama a iniciarSesion()
   ↓
3. obtenerToken('jahir78', 'Elpepe72') en auth.js
   ↓
4. Hace GET a http://localhost:8082/auth/token?user=jahir78&password=Elpepe72
   ↓
5. Recibe respuesta: {accessToken: "JWT...", expiresAt: 123456, role: "admin"}
   ↓
6. Guarda en localStorage:
   - auth_token = "JWT..."
   - auth_usuario = "jahir78"
   - auth_expiracion = "123456"
   ↓
7. Verifica estaAutenticado() = true
   ↓
8. Renderiza la navegación y el contenido
```

---

## Cómo el Token se Usa en MatriculaClient

Cuando haces clic en "Listar Todos":

```
1. ListarTodos.vue llama a consultarTodosFachada()
   ↓
2. MatriculaClient.js: consultarTodos()
   ↓
3. getHeaders() obtiene el token de localStorage
   ↓
4. axios.get(URL, { headers: { Authorization: `Bearer ${token}` } })
   ↓
5. API recibe la request con el token en el header
   ↓
6. API retorna los estudiantes
```

---

## Prueba Manual de Llamadas API

En la consola del navegador:

```javascript
import { consultarTodosFachada } from '/src/clients/MatriculaClient.js'

// Obtener todos los estudiantes
consultarTodosFachada().then(data => console.log(data))
```

Deberías ver un array de estudiantes.

---

## Si Algo Falla

### ❌ "Obteniendo credenciales..." se queda infinito
- Verifica que `http://localhost:8082` está disponible
- Abre la URL en el navegador para ver el error

### ❌ Token undefined en MatriculaClient
- Abre DevTools → Console
- Ejecuta: `localStorage.getItem('auth_token')`
- Si está vacío, la autenticación falló

### ❌ Error 401 en las llamadas a matrícula
- El token expiró o es inválido
- Recarga la página para obtener uno nuevo

---

## Estructura de Archivos

```
src/
├── auth.js                          ← Funciones de token
├── App.vue                          ← Obtiene token en mounted
├── clients/
│   ├── AutorizationClient.js       ← Obtiene token del servidor
│   └── MatriculaClient.js          ← Usa token de localStorage
└── ...resto de archivos
```

Sin composables, todo es simple y fácil de debuggear. ✅
