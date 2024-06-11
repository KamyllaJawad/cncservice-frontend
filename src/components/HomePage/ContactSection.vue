<template>
  <section class="py-5" id="contact">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-8 col-xl-6 text-center mx-auto">
          <p class="fw-bold text-primary mb-2">Contato</p>
          <h2 class="fw-bold"><strong>Entre em contato por telefone, e-mail ou venha nos fazer uma visita!</strong></h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <form class="p-3 p-xl-4" @submit.prevent="submitForm">
            <div class="mb-3"><input class="form-control" type="text" v-model="formData.name" placeholder="Nome"></div>
            <div class="mb-3"><input class="form-control" type="email" v-model="formData.email" placeholder="Email"></div>
            <div class="mb-3"><textarea class="form-control" v-model="formData.message" rows="6" placeholder="Mensagem"></textarea></div>
            <div><button class="btn btn-primary shadow d-block w-100" type="submit">Enviar</button></div>
          </form>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <h6 class="fw-bold mb-0">Localização</h6>
            <p class="text-muted">Servidão Paulo Schubert 90 Floresta, Joinville(SC)</p>
                      <!-- Inserir o Iframe do Google Maps -->
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.905464867217!2d-48.8575835256604!3d-26.329560469089103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb0f3d9cbb9ab%3A0x7bd3a761f5f46cfa!2sCNC%20Service%20Assist%20T%C3%A9cnica%20Ltda.!5e0!3m2!1spt-BR!2sbr!4v1715615746500!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div class="mb-3">
            <h6 class="fw-bold mb-0">Telefones</h6>
            <p class="text-muted">(47) 3463-1592<br>(47) 99971-4400</p>
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
      },
      status: '',
      success: false
    }
  },
  methods: {
    async submitForm() {
      this.status = ''; // Limpa a mensagem de status anterior
      try {
        const response = await fetch('http://localhost:8000/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData)
        });

        if (response.ok) {
          this.status = 'Email enviado com sucesso!';
          this.success = true;
          // Limpa o formulário após sucesso
          this.formData = { name: '', email: '', message: '' };
        } else {
          this.status = 'Falha ao enviar email.';
          this.success = false;
        }
      } catch (error) {
        console.error('Erro ao enviar email:', error);
        this.status = 'Erro ao enviar email.';
        this.success = false;
      }
    }
  }
}
</script>
