<template>
  <section class="py-5" id="contact">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-8 col-xl-6 text-center mx-auto">
          <p class="fw-bold text-primary mb-2">Contato</p>
          <h2 class="fw-bold"><strong>Entre em contato por telefone, e-mail ou venha nos fazer uma visita!</strong></h2>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-md-6 col-xl-4">
          <div>
            <form class="p-3 p-xl-4" @submit.prevent="submitForm">
              <div class="mb-3"><input class="form-control" type="text" v-model="formData.name" placeholder="Nome"></div>
              <div class="mb-3"><input class="form-control" type="email" v-model="formData.email" placeholder="Email"></div>
              <div class="mb-3"><textarea class="form-control" v-model="formData.message" rows="6" placeholder="Mensagem"></textarea></div>
              <div><button class="btn btn-primary shadow d-block w-100" type="submit">Enviar</button></div>
            </form>
          </div>
        </div>
        <div class="col-md-4 col-xl-4 d-flex justify-content-center justify-content-xl-start">
          <div class="d-flex flex-wrap flex-md-column justify-content-md-start align-items-md-start h-100">
            <div class="d-flex align-items-center p-3">

                <i class="bi bi-telephone-inbound-fill"></i>

              <div class="px-2">
                <h6 class="fw-bold mb-0">Telefones</h6>
                <p class="text-muted mb-0">(47) 3463-1592<br>(47) 99971-4400</p>
              </div>
            </div>
            <div class="d-flex align-items-center p-3">
              <div class="bs-icon-md bs-icon-circle bs-icon-primary shadow d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon bs-icon-md">
           
              </div>
              <div class="px-2">
                <h6 class="fw-bold mb-0">Email</h6>
                <p class="text-muted mb-0">atendimentocnc@terra.com.br</p>
              </div>
            </div>
            <div class="d-flex align-items-center p-3">
              <div class="bs-icon-md bs-icon-circle bs-icon-primary shadow d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon bs-icon-md">
               
              </div>
              <div class="px-2">
                <h6 class="fw-bold mb-0">Localização</h6>
                <p class="text-muted mb-0">Servidão Paulo Schubert 90<br>Floresta, Joinville(SC)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Aqui você pode manipular os dados do formulário
      console.log('Dados do formulário:', this.formData);
    }
  }
}
</script>
