import { Model } from "axe-api";

class Post extends Model {
  get fillable() {
    return ["title", "content"];
  }

  get validations() {
    return {
      title: "required",
      content: "required",
    };
  }

  comments() {
    return this.hasMany("Comment", "id", "post_id");
  }

  blog() {
    return this.hasOne("Blog", "id", "blog_id");
  }
}

export default Post;
