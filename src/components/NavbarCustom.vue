<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container" id="navbar">
      <!-- Logo centralizada à esquerda -->
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/CNC.png" alt="Logo" height="60">
      </router-link>

      <!-- Botão de menu responsivo -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Itens da navbar centralizados à direita -->
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <!-- Tabs -->
          <li class="nav-item">
            <router-link class="nav-link" to="/about">Sobre Nós</router-link>
          </li>
          <!-- Serviços (Dropdown) -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Serviços
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><router-link class="dropdown-item" to="/products">Produtos</router-link></li>
              <li><a class="dropdown-item" href="#">Assistência Técnica</a></li>
              <li><a class="dropdown-item" href="#">Automação Industrial</a></li>
              <li><a class="dropdown-item" href="#">Reforma e Retrofitting</a></li>
              <li><a class="dropdown-item" href="#">Manutenção Corretiva</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Representações</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contato</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
};
</script>

<style scoped>

.navbar-brand {
  margin-right: auto;
}
.navbar {
  background-color: #f8f9fa;
}
</style>
