import { Model } from "axe-api";
import isLogged from "../Middlewares/isLogged";

class Blog extends Model {
  get fillable() {
    return ["title"];
  }

  get validations() {
    return {
      title: "required",
    };
  }

  get middlewares() {
    return [isLogged];
  }

  posts() {
    return this.hasMany("Post", "id", "blog_id");
  }

  owner() {
    return this.hasOne("User", "id", "owner_id");
  }
}

export default Blog;
