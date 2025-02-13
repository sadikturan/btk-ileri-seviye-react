export const metadata = {
  title: "About",
};

export default function Page() {
  return <h1>About</h1>;
}

// localhost              => page.js
// localhost/blogs        => page.js
// localhost/blog/1       => page.js
// localhost/blog/2       => page.js
// localhost/about        => page.js
// localhost/account/login        => page.js
// localhost/account/register        => page.js
