import { CabecalhoContainer, Logo } from "./Cabecalho.style"

const Cabecalho = function() {
  return (
    <CabecalhoContainer>
      <div>
        <Logo src="/images/myteacher.png" />

        <p>Encontre o professor perfeito!</p>
      </div>
    </CabecalhoContainer>
  )
}

export { Cabecalho }