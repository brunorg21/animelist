import * as S from './style'

export const LoginTemplate = () => {
  return (
    <S.LoginContainer>
      <S.Register>
        <h1>Cadastrar-se</h1>
        <S.FormContainer action="">
          <div>
            <label htmlFor="">Usuário:</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">E-mail:</label>
            <input type="email" />
          </div>
          <div>
            <label htmlFor="">Senha:</label>
            <input type="password" />
          </div>
        </S.FormContainer>
      </S.Register>
    </S.LoginContainer>
  )
}
