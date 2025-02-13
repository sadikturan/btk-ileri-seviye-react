export default async function Page({ params }) {
  const blog_id = (await params).id;
  return <h1>Blog {blog_id}</h1>;
}
