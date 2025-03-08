# Mercado Pago

Fonder permite conectar tu cuenta de Mercado Pago para sincronizar automáticamente tus transacciones y mantener actualizados los ingresos recurrentes y movimientos financieros.

### ¿Cómo conectar Mercado Pago con Fonder?

1. Inicia sesión en **Fonder** y accede a la sección **Fuentes de Datos.**

2. Selecciona la opción **Mercado Pago** dentro de Integraciones.

3. Haz clic en **Conectar con Mercado Pago.**

4. Serás redirigido a la página de autenticación de Mercado Pago.

5. Ingresa tus credenciales y otorga los permisos necesarios para la integración.

6. Una vez autorizado, serás redirigido de vuelta a Fonder.

7. Confirma que la sincronización se realizó correctamente revisando los datos en el panel de métricas.

### ¿Cómo obtener las credenciales API de Mercado Pago?

Para que Fonder pueda acceder a tu cuenta de Mercado Pago y sincronizar los datos, necesitas obtener tus credenciales de API (Access Token y Public Key). Sigue estos pasos detallados:

#### 1. Inicia sesión en Mercado Pago

- Accede a [Mercado Pago Developers](https://www.mercadopago.com.ar/developers/es) con tu cuenta de Mercado Pago.

#### 2. Ir a la sección de credenciales

- En el menú lateral, haz clic en **Tu negocio > Configuración**.
- Luego selecciona **Credenciales de API**.

#### 3. Generar las credenciales

- Verás dos tipos de credenciales: **Modo Sandbox** y **Producción**.
- Para conectar Fonder y operar con datos reales, usa las credenciales de **Producción**.

#### 4. Copiar Public Key y Access Token

- **Public Key**: Identifica públicamente tu cuenta y permite que Fonder obtenga datos visibles.
- **Access Token**: Es la clave privada que autoriza a Fonder a acceder a tu información de pago.
- Copia ambas credenciales y guárdalas en un lugar seguro.

#### 5. Ingresar las credenciales en Fonder

- Vuelve a Fonder y accede a **Fuentes de Datos > Mercado Pago**.
- Pega el **Public Key** y el **Access Token** en los campos correspondientes.
- Guarda los cambios y confirma la integración.

#### 6. Verificar la conexión

- Una vez ingresadas las credenciales, revisa que los datos de Mercado Pago se reflejen correctamente en Fonder.

### Datos que se sincronizan con Mercado Pago

- Ingresos recurrentes (MRR).

- Pagos recibidos y pendientes.

- Estado de transacciones.

- Información sobre clientes y suscripciones.

Si experimentas problemas con la integración, consulta la sección **Solución de Problemas.**

### Próximos pasos

Ahora que configuraste Mercado Pago, puedes continuar con: ➡️ **Importación manual de CSV y Excel**
