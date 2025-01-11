import { Form, useActionData, useNavigation } from "react-router";
import { redirect } from "react-router";
import { isRequiredCheck, isValidImage } from "../../utils/validations";

export default function CourseForm({ method, data }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const errors = useActionData();

  return (
    <Form method={method}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          defaultValue={data ? data.title : ""}
        />
        {errors && errors.title && <p>{errors.title}</p>}
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          name="image"
          id="image"
          defaultValue={data ? data.image : ""}
        />
        {errors && errors.image && <p>{errors.image}</p>}
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          rows={5}
          defaultValue={data ? data.description : ""}
        ></textarea>
        {errors && errors.description && <p>{errors.description}</p>}
      </div>
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Kayıt Ediliyor" : "Kaydet"}
      </button>
    </Form>
  );
}

export async function courseAction({ request, params }) {
  const data = await request.formData();
  const method = request.method;

  let url = "http://localhost:5000/courses";

  if (method === "PUT") {
    const courseid = params.courseid;
    url = url + "/" + courseid;
  }

  const formData = {
    title: data.get("title"),
    image: data.get("image"),
    description: data.get("description"),
  };

  const errors = {};

  if (!isRequiredCheck(formData.title)) {
    errors.title = "Title alanı zorunlu";
  }

  if (!isValidImage(formData.image)) {
    errors.image = "Image alanı zorunlu ve resim uzantısı .jpg olmalıdır.";
  }

  if (!isRequiredCheck(formData.description)) {
    errors.description = "Description alanı zorunlu";
  }

  if (Object.keys(errors).length) {
    console.log(errors);
    return errors;
  }

  const response = await fetch(url, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    return redirect("/courses");
  }
}
