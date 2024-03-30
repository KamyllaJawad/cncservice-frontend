<template>
  <section class="py-4 py-xl-5" style="color: var(--bs-primary);" id="customers">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-8 col-xl-6 text-center mx-auto">
          <p class="fw-bold text-success mb-2">Representações</p>
          <h2 class="fw-bold">Empresas que fornecemos excelência em nossa prestação de serviços</h2>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 d-sm-flex justify-content-sm-center">
        <div v-for="(company, index) in companies" :key="index" class="col mb-4">
          <div class="d-flex flex-column align-items-center align-items-sm-start">
            <p class="text-dark bg-body-tertiary border rounded border-0 border-light p-4">{{ company.description }}</p>
            <div class="d-flex">
              <img class="flex-shrink-0 me-3 fit-cover" :src="require(`../assets/${company.logoSrc}`)" :alt="company.name" :width="company.logoWidth" :height="company.logoHeight">
              <button @click="showMore(index)" class="btn btn-primary">Saiba Mais</button>
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
      companies: [
        {
          name: "Doosan",
          description: "Doosan é um conglomerado industrial sul coreano, suas atividades predominam na área de maquinário pesado e construção.",
          logoSrc: "Doosan-Logo.png",
          logoWidth: 206,
          logoHeight: 54
        },
        {
          name: "HISION",
          description: "HISION é uma empresa líder na indústria de ferramentaria, com diversas bases de produção, incluindo instalações modernas.",
          logoSrc: "hision.jpg",
          logoWidth: 224,
          logoHeight: 46
        },
        {
          name: "AMADA",
          description: "AMADA atua na área de fabricação, venda, reparação, manutenção, verificação e inspeção de máquinas e dispositivos para metalurgia em geral.",
          logoSrc: "Amada-Logo.png",
          logoWidth: 210,
          logoHeight: 52
        }
      ]
    };
  },
  methods: {
    showMore(index) {
      // Adicione o código para mostrar mais informações sobre a empresa, se necessário
      console.log("Saiba mais sobre a empresa:", this.companies[index].name);
    }
  }
};
</script>
