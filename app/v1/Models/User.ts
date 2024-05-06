import { Model } from "axe-api";

class User extends Model {
  get fillable() {
    return ["email", "name", "password"];
  }

  get validations() {
    return {
      email: "required|email",
      name: "required",
      password: "required|min:6",
    };
  }

  get hiddens() {
    return ["password"];
  }
}

export default User;
