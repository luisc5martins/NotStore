<template>
    
  <footer>
  <div class="footer-elements">
  <p>Politica de Privacidade</p>
  <p>Termos Legais</p>
  <p>Reemboloso</p>
  </div>
  
  <div class="footer-elements">
      <p>Ajuda</p>
      <p>Perguntas Frequentes</p>
      <p>Central de Atendimento</p>
  </div>
  
  <div class="footer-elements">
      <p>X(Twitter)</p>
      <p>Instagram</p>
      <p>Github</p>
  </div>
  </footer>

</template>

<style scoped>

footer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: #303030;
  margin-top: 20px;
  
}

.footer-elements {
  color: white;
  padding-top: 10px;
}

.footer-copyright {
display: flex;
justify-content: center;
font-size: 20px;
padding: 1.5rem;
font-weight: 100;
color: white;
}
</style>