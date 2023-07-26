app.component('web-inicio', {
    template: /*html*/ `
    <div class="row justify-content-center animate__animated animate__fadeIn">
      <div class="col-sm-11 col-lg-10 mx-auto my-5">
        <div class="row justify-content-center">
          <div class="col-sm-12 col-md-8 col-lg-8 col-xl-7 mx-auto">

            <div class="card border rounded bg-light p-5">
              <div class="card-body">
                
                <!-- Menu principal -->
                <h1 class="text-center mb-5">Menú</h1>
                <div class="row">
                  <div class="col-md-6 mx-auto my-3 text-center zoom">
                    <router-link class="a" to="/web-cotizaciones">
                      <img src="../img/generador.png" class="img-fluid">
                      <h4 class="mt-3">Generador</h4>
                    </router-link>                    
                  </div>
                  <div class="col-md-6 mx-auto my-3 text-center zoom">
                    <router-link class="a" to="/web-buscador">
                      <img src="../img/buscador.png" class="img-fluid">
                      <h4 class="mt-3">Buscador</h4>
                    </router-link>
                  </div>
                </div>
                <div class="mt-5 h3" style="text-align: right;">
                  <a href="../" class="a"><i class="fa-solid fa-power-off"></i> Salir</a>
                </div>
                <!-- Menu principal -->
                
              </div>
            </div>


          </div>
        </div>
      </div>
    </div> 
    `,
    data () {
        return {

        }
    },
    computed: {
        ...Vuex.mapState(['titulo'])
        
    },
    methods: {

    },
    created () {
      
    },
    mounted() {

    },
    
})

app.component('web-cotizaciones', {
    template: /*html*/ `
    <div class="row justify-content-center animate__animated animate__fadeIn">
      <div class="col-12 mx-auto my-5">
        <div class="row justify-content-center">
          <div class="col-12 mx-auto">

            <div class="card border rounded bg-light px-md-5">
              <div class="card-body">
                
                <!-- Cotizaciones -->
                
                
                <div class="row">
                  <div class="col-6 p-3">
                    <h3>Cotizaciones</h3>
                  </div>
                  <div class="col-6 p-3" style="text-align: right;">
                    <router-link class="a h3" to="/"><i class="fa-regular fa-circle-left"></i> Regresar</router-link> 
                  </div>
                </div>
                
                <div class="row">
                  <div class="col-md-6 col-lg-5 col-xl-4 mb-3">
                    <div class="card shadow p-3 bg-body-tertiary">
                      <div class="card-body">
                        <h3>Datos empresariales</h3>
                        <img src="../img/datos.png" class="img-fluid">
                        <br>
                        <br>

                        <!-- formulario -->
                        <form @submit.prevent="insertar">
                          <div class="form-group">
                            <label>Responsable:</label>
                            <div class="input-group">
                              <input type="text" class="form-control mb-3">
                            </div>
                          </div>

                          <div class="form-group">
                            <label>Nombre de la empresa:</label>
                            <div class="input-group">
                              <input type="text" class="form-control mb-3">
                            </div>
                          </div>

                          <div class="form-group">
                            <label>Fecha:</label>
                            <div class="input-group">
                              <input type="date" class="form-control mb-3">
                            </div>
                          </div>

                          <div class="form-group">
                            <label>PyME:</label>
                            <div class="input-group">
                              <select name="" class="form-control form-select mb-3">
                                <option value="">Micro</option>
                                <option value="">Pequeña</option>
                                <option value="">Mediana</option>
                                <option value="">Grande</option>
                              </select>
                            </div>
                          </div>

                          <div class="form-group">
                            <label>Monto propuesta economica:</label>
                            <div class="input-group">
                              <input type="text" class="form-control mb-3">
                            </div>
                          </div>

                          <div class="form-group">
                            <label>IMonto CEMEFI ('Numeros sin punto'):</label>
                            <div class="input-group">
                              <input type="text" class="form-control mb-3">
                            </div>
                          </div>

                          <div class="form-group">
                            <label>Duracion del curo en Horas:</label>
                            <div class="input-group">
                              <input type="text" class="form-control mb-3">
                            </div>
                          </div>

                          <p>Fecha clave 1</p>
                          <div class="form-group">
                            <label>Publicación de la convocatoria y Registro administrativo</label>
                            <div class="input-group">
                              <select v-model="fecha1" class="form-control form-select mb-3">
                                <option v-for="mes in meses" :key="mes.value" :value="mes.value">
                                  {{ mes.valorMes }}
                                </option>
                              </select>
                            </div>
                          </div>

                          <p>Fecha clave 2</p>
                          <div class="form-group">
                            <label>Cierre de la convocatoria y evidencias en plataforma</label>
                            <div class="input-group">
                              <select v-model="fecha2" class="form-control form-select mb-3">
                                <option v-for="mes in meses" :key="mes.value" :value="mes.value">
                                  {{ mes.valorMes }}
                                </option>
                              </select>
                            </div>
                          </div>

                          <p>Fecha clave 3</p>
                          <div class="form-group">
                            <label>Publicación de resultados y obtención de derechos para el uso del logo como ESR ®</label>
                            <div class="input-group">
                              <select v-model="fecha3" class="form-control form-select mb-3">
                                <option v-for="mes in meses" :key="mes.value" :value="mes.value">
                                  {{ mes.valorMes }}
                                </option>
                              </select>
                            </div>
                          </div>

                          <p>Fecha clave 4</p>
                          <div class="form-group">
                            <label>Reporte de resultados, Ceremonia de reconocimiento y entrega de estatuillas</label>
                            <div class="input-group">
                              <select v-model="fecha4" class="form-control form-select mb-3">
                                <option v-for="mes in meses" :key="mes.value" :value="mes.value">
                                  {{ mes.valorMes }}
                                </option>
                              </select>
                            </div>
                          </div>

                          <br>

                          <button class="btn btn-primary form-control"><i class="fa-solid fa-floppy-disk"></i> Guardar</button>


                        </form>
                        <!-- formulario -->
                        
                        

                      </div>
                    </div>
                  </div>

                  <!-- tabla -->
                  <div class="col-md-6 col-lg-7 col-xl-8 mb-3">
                    <div class="table-responsive">
                      <table class="table table-bordered" width="100%" cellspacing="0">
                        <thead class="bg-primary">
                          <tr>
                              <th>id</th>
                              <th>Responsable</th>
                              <th>Empresa</th>
                              <th>PyME</th>
                              <th></th>
                          </tr>
                      </thead>
                      <tbody>
                        <tr class="align-middle" style="font-size: .8em;">
                          <td style="text-align: center;">1</td>
                          <td>Erik Paredes Eligio</td>
                          <td>Universidad Tecnológica Fidel Velázquez</td>
                          <td>Pequeña</td>
                          <td style="text-align: center;">
                            <div class="btn-group">
                              <span class="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i></span>
                              <span class="btn btn-danger"><i class="fa-solid fa-trash"></i></span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                      </table>
                    </div>
                  </div>
                  <!-- tabla -->

                </div>

                <!-- Cotizaciones -->
                
              </div>
            </div>


          </div>
        </div>
      </div>
    </div> 
    `,
    data () {
        return {
          fecha1: '',
          fecha2: '',
          fecha3: '',
          fecha4: '',
          meses: [
            { valorMes: 'Enero', value: 'Enero' },
            { valorMes: 'Febrero', value: 'Febrero' },
            { valorMes: 'Marzo', value: 'Marzo' },
            { valorMes: 'Abril', value: 'Abril' },
            { valorMes: 'Mayo', value: 'Mayo' },
            { valorMes: 'Junio', value: 'Junio' },
            { valorMes: 'Julio', value: 'Julio' },
            { valorMes: 'Agosto', value: 'Agosto' },
            { valorMes: 'Septiembre', value: 'Septiembre' },
            { valorMes: 'Octubre', value: 'Octubre' },
            { valorMes: 'Noviembre', value: 'Noviembre' },
            { valorMes: 'Diciembre', value: 'Diciembre' }
          ]

        }
    },
    computed: {
        ...Vuex.mapState(['titulo'])
        
    },
    methods: {

    },
    created () {
      
    },
    mounted() {

    },
    
})

app.component('web-buscador', {
    template: /*html*/ `
    <div class="row justify-content-center animate__animated animate__fadeIn">
      <div class="col-sm-11 col-lg-10 mx-auto my-5">
        <div class="row justify-content-center">
          <div class="col-sm-12 col-md-8 col-lg-8 col-xl-7 mx-auto">

            <div class="card border rounded bg-light p-5">
              <div class="card-body">
                <form @submit.prevent="buscar">
                  <div class="form-group">
                      <label for="">Buscar:</label>
                      <div class="input-group">

                          <input type="text" class="form-control" maxlength="3" @keypress="soloNumeros" @keyup.enter="buscar" v-model="txtBuscador" placeholder="Buscar..." />
                          <button type="submit" class=" input-group-tex btn btn-primary"><i class="fas fa-search fa-sm me-1"></i>Buscar</button>

                      </div>
                      <div class="mt-5 h3" style="text-align: right;">
                        <router-link class="a" to="/"><i class="fa-regular fa-circle-left"></i> Regresar</router-link> 
                      </div>
                  </div>
              </form>
              </div>
            </div>

            <div v-for="(liDatos, index) in datos">

              <div class="card border rounded bg-light my-3" style="font-size: .8em;">
                <div class="card-body">

                  <div class="text-center mx-auto">
                    <img class="img-fluid rounded" src="../img/redmin9.jpeg" style="width: 200px;">
                  </div>

                  <h4><b>Id: {{liDatos.id}}</b></h4>
                  <h4><b>Teléfono: </b><b :class="[liDatos.registrado == 'si' ? 'text-success' : 'text-danger']">{{liDatos.sim}}</b></h4>
                  <div style="font-size: .9em;">
                    <p class="sinMargenButon"><b>Modelo: </b> {{liDatos.marca}} {{liDatos.modelo}}</p>
                    <p class="sinMargenButon"><b>Núm Serie: </b> {{liDatos.serie}}</p>
                    <p class="sinMargenButon"><b>Núm IMEI-1: </b> {{liDatos.imei1}}</p>
                    <p class="sinMargenButon"><b>Núm IMEI-2: </b> {{liDatos.imei2}}</p>
                    <p class="sinMargenButon"><b>Núm Compra: </b> {{liDatos.numCompra}}</p>
                    <p class="sinMargenButon"><b>Correo: </b> {{liDatos.correo}}</p>
                    <p class="sinMargenButon"><b>Plataforma: </b> {{liDatos.platafoma}}</p>
                    <p class="sinMargenButon"><b>Link Login: </b> <a :href="[liDatos.link]" target="_blank" rel="noopener noreferrer">{{liDatos.link}}</a></p>
                    <p class="sinMargenButon"><b>Fecha de recarga: </b> {{liDatos.fechaRecarga}}</p>
                    <hr>
                    <p>
                      <button class="btn btn-primary form-control" @click="btnEditar(liDatos.id, liDatos.fechaRecarga, liDatos.registrado, liDatos.asignado, liDatos.numEmpRespAsig, liDatos.nomRespAsig, liDatos.diviAsig, liDatos.numEmpRecib, liDatos.nombreRecib, liDatos.fechaRecib)">Editar</button>
                    </p>
                    <h3 class="sinMargenButon"><b>Registrado: </b> <b :class="[liDatos.registrado == 'si' ? 'text-success' : 'text-danger']">{{liDatos.registrado}}</b></h3>
                    <h3 class="sinMargenButon"><b>Asignado: </b> <b :class="[liDatos.asignado == 'si' ? 'text-success' : 'text-danger']">{{liDatos.asignado}}</b></h3>
                    <hr>
                    <p class="sinMargenButon"><b>Núm empleado Responsable: </b> {{liDatos.numEmpRespAsig}}</p>
                    <p class="sinMargenButon"><b>Nombre Responsable: </b> {{liDatos.nomRespAsig}}</p>
                    <p class="sinMargenButon"><b>División Académica: </b> {{liDatos.diviAsig}}</p>
                    <hr>
                    <p class="sinMargenButon"><b>Núm empleado de quien Recibió: </b> {{liDatos.numEmpRecib}}</p>
                    <p class="sinMargenButon"><b>Nombre de quien Recibió: </b> {{liDatos.nombreRecib}}</p>
                    <p class="sinMargenButon"><b>Fecha de entrega: </b> {{liDatos.fechaRecib}}</p>
                    <hr>
                  </div>

                  <div style="overflow: auto;">
                    <div style="display: inline-block;">

                      <div v-if="liDatos.registrado == 'no'">
                        <iframe name="window" src="https://mibait.com/registro.html#movilidad" style="width: 770px; height: 850px; overflow-y:hidden; overflow-x:scroll;"></iframe>
                      </div>
                      <div v-else>
                        <iframe name="window" src="https://mibait.com/login.html#movilidad" style="width: 770px; height: 850px; overflow-y:hidden; overflow-x:scroll;">
                        </iframe>
                      </div>

                    </div>
                  </div>
                  
                  

                </div>
              </div>

            </div>


          </div>
        </div>
      </div>
    </div> 
    `,
    data () {
        return {
          datos: [],
          txtBuscador: '',

          fechaRecarga: '',
          registrado: '',
          asignado: '',
          numEmpRespAsig: '',
          nomRespAsig: '',
          diviAsig: '',
          numEmpRecib: '',
          nombreRecib: '',
          fechaRecib: '',
        }
    },
    computed: {
        ...Vuex.mapState(['titulo']),
        
    },
    methods: {
        buscar () {
            axios.post('../buscador/buscar.app', {
                opcion: 4,
                txtBuscador: this.txtBuscador.toUpperCase(),
              })
              .then(response => {
                this.datos = response.data
                // console.log(response.data)               

            })
        },

        // Boton de Actualizar
        btnEditar (id,fechaRecarga,registrado,asignado,numEmpRespAsig,nomRespAsig,diviAsig,numEmpRecib,nombreRecib,fechaRecib) {
          Swal.fire({
              title: 'Editar',
              html: /*html*/ `
              <div class="row text-start">
                  <div class="form-group mb-3 col-md-12">
                      <label class="form-label" style="font-size: .8em;">Fecha de recarga:</label>
                      <input type="date" class="form-control" placeholder="Fecha de recarga..." value="${fechaRecarga}" id="fechaRecarga" />
                  </div>
                  <div class="form-group mb-3 col-md-6">
                    <label class="form-label" style="font-size: .8em;">Registrado:</label>
                      <select class="form-select" id="registrado">
                        <option value="${registrado}" selected disabled>${registrado}</option>
                        <option value="si">si</option>
                        <option value="no">no</option>
                      </select>
                  </div>
                  <div class="form-group mb-3 col-md-6">
                    <label class="form-label" style="font-size: .8em;">Asignado:</label>
                      <select class="form-select" id="asignado">
                        <option value="${asignado}" selected disabled>${asignado}</option>
                        <option value="si">si</option>
                        <option value="no">no</option>
                      </select>
                  </div>
                  <div class="form-group mb-3 col-md-4">
                    <label class="form-label" style="font-size: .8em;">Núm empleado:</label>
                      <input type="text" class="form-control" placeholder="Núm empleado Responsable..." value="${numEmpRespAsig}" id="numEmpRespAsig" />
                  </div>
                  <div class="form-group mb-3 col-md-8">
                    <label class="form-label" style="font-size: .8em;">Nombre Responsable:</label>
                      <input type="text" class="form-control" placeholder="Nombre Responsable..." value="${nomRespAsig}" id="nomRespAsig" />
                  </div>
                  <div class="form-group mb-3 col-md-12">
                    <label class="form-label" style="font-size: .8em;">División Académica:</label>
                      <input type="text" class="form-control" placeholder="División Académica..." value="${diviAsig}" id="diviAsig" />
                  </div>
                  <div class="form-group mb-3 col-md-4">
                    <label class="form-label" style="font-size: .8em;">Núm empleado:</label>
                      <input type="text" class="form-control" placeholder="Núm empleado de quien Recibió..." value="${numEmpRecib}" id="numEmpRecib" />
                  </div>
                  <div class="form-group mb-3 col-md-8">
                    <label class="form-label" style="font-size: .8em;">Nombre Recibió:</label>
                      <input type="text" class="form-control" placeholder="Nombre de quien Recibió..." value="${nombreRecib}" id="nombreRecib" />
                  </div>
                  <div class="form-group mb-3 col-md-12">
                    <label class="form-label" style="font-size: .8em;">Fecha de entrega:</label>
                      <input type="date" class="form-control" placeholder="Fecha de entrega..." value="${fechaRecib}" id="fechaRecib" />
                  </div>
              </div>
              `,
              showCancelButton: true,
              confirmButtonText: 'Guardar',
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33'
          })
          .then((result) => {
              if (result.value) {
                  fechaRecarga = document.getElementById('fechaRecarga').value,
                  registrado = document.getElementById('registrado').value,
                  asignado = document.getElementById('asignado').value,
                  numEmpRespAsig = document.getElementById('numEmpRespAsig').value,
                  nomRespAsig = document.getElementById('nomRespAsig').value,
                  diviAsig = document.getElementById('diviAsig').value,
                  numEmpRecib = document.getElementById('numEmpRecib').value,
                  nombreRecib = document.getElementById('nombreRecib').value,
                  fechaRecib = document.getElementById('fechaRecib').value

                  this.editar(id,fechaRecarga,registrado,asignado,numEmpRespAsig,nomRespAsig,diviAsig,numEmpRecib,nombreRecib,fechaRecib)
                  Swal.fire(
                      '¡Actualizado!',
                      'El registro ha sido actualizado.',
                      'success'
                  )
              }
          })
      },

      // PROCESOS

        // Proceso Editar
        editar (id,fechaRecarga,registrado,asignado,numEmpRespAsig,nomRespAsig,diviAsig,numEmpRecib,nombreRecib,fechaRecib) {
          axios.post('../buscador/buscar.app', {
              opcion: 2,
              id: id,
              fechaRecarga: fechaRecarga,
              registrado: registrado,
              asignado: asignado,
              numEmpRespAsig: numEmpRespAsig,
              nomRespAsig: nomRespAsig,
              diviAsig: diviAsig,
              numEmpRecib: numEmpRecib,
              nombreRecib: nombreRecib,
              fechaRecib: fechaRecib
          })
          .then(response => {
              // this.listaDatos()
              this.buscar()
              // console.log(response.data)
          })
      },

        // Restricción de Caracteres (solo numeros)
        soloNumeros() {
          if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false
      },
    },
    created () {
      
    },
    mounted() {

    },
    
})