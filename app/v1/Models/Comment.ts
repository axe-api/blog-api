import { Model } from "axe-api";
import isLogged from "../Middlewares/isLogged";

class Comment extends Model {
  get fillable() {
    return ["content"];
  }

  get validations() {
    return {
      content: "required",
    };
  }

  get middlewares() {
    return [isLogged];
  }

  post() {
    return this.hasOne("Post", "id", "post_id");
  }

  author() {
    return this.hasOne("User", "id", "author_id");
  }
}

export default Comment;
