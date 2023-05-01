import { StyledRegister } from "../Register/styled";


export const ModalLogin = () => {
  return (
    <StyledRegister>
      <div className="card">
        <div className="card-header">
          <div className="text-header">Login</div>
        </div>
        <div className="card-body">
          <form>
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
              <label>Senha</label>
              <input
                className="form-control"
                name="password"
                id="password"
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
