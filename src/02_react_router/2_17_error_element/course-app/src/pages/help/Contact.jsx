export default function ContactPage() {
  return (
    <>
      <div id="contact">
        <h2>Contact</h2>
        <form>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea name="message"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
