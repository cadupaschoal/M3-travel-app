import { StyledRegister } from "./styled";

export const ModalRegister = () => {
  return (
    <StyledRegister>
      <div className="card">
        <div className="card-header">
          <div className="text-header">Register</div>
        </div>
        <div className="card-body">
          <form action="#">
            <div className="form-group">
              <label>Nome</label>
              <input
                className="form-control"
                name="username"
                id="username"
                type="text"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                name="email"
                id="email"
                type="text"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                className="form-control"
                name="password"
                id="password"
                type="password"
              />
            </div>
            <div className="form-group">
              <label>Confirmar Senha</label>
              <input
                className="form-control"
                name="confirm-password"
                id="confirm-password"
                type="password"
              />
            </div>
            <input type="submit" className="btn" value="Cadastrar" />{" "}
          </form>
        </div>
      </div>
    </StyledRegister>
  );
};
