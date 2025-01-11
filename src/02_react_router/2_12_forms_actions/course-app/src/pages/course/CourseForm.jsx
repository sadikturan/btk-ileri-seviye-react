import { Form } from "react-router";

export default function CourseForm({ data }) {
  return (
    <Form method="post">
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          required
          defaultValue={data ? data.title : ""}
        />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          name="image"
          id="image"
          required
          defaultValue={data ? data.image : ""}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          required
          rows={5}
          defaultValue={data ? data.description : ""}
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </Form>
  );
}
