export default function BlogLayout({ children }) {
  return (
    <section>
      <nav>
        <ul>
          <li>
            <a href="/blogs/1">Blog 1</a>
          </li>
          <li>
            <a href="/blogs/2">Blog 2</a>
          </li>
        </ul>
      </nav>
      <section>{children}</section>
    </section>
  );
}
