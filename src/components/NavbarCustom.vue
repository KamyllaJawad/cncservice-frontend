<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container" id="navbar">
      <!-- Logo centralizada à esquerda -->
      <a class="navbar-brand" href="#">
        <img src="@/assets/CNC.png" alt="Logo" height="60">
      </a>

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
            <a class="nav-link" href="#">Sobre Nós</a>
          </li>
          <!-- Serviços (Dropdown) -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Serviços
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Produtos</a></li>
              <li><a class="dropdown-item" href="#">Assistência Técnica</a></li>
              <li><a class="dropdown-item" href="#">Automação Industrial</a></li>
              <li><a class="dropdown-item" href="#">Reforma e Retrofitting</a></li>
              <li><a class="dropdown-item" href="#">Manutenção Corretiva</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Representações</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contato</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  // Se necessário, você pode adicionar lógica aqui
};
</script>

<style scoped>
/* Estilos personalizados podem ser adicionados aqui */
.navbar-brand {
  margin-right: auto;
}
.navbar {
  background-color: #f8f9fa;
}


</style>
