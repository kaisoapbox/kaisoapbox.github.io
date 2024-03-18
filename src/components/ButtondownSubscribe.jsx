export default function Subscribe(props) {
  return (
    <form
      action="https://buttondown.email/api/emails/embed-subscribe/kaisoapbox"
      method="post"
      target="popupwindow"
      onSubmit="window.open('https://buttondown.email/kaisoapbox', 'popupwindow')"
      className="embeddable-buttondown-form"
    >
      <label htmlFor="bd-email">
        {props.cta
          ? props.cta
          : "Subscribe to my highly infrequent newsletter!"}
      </label>
      <div>
        <input
          type="email"
          name="email"
          id="bd-email"
          placeholder="you@example.com"
        />
        <input type="submit" value="Subscribe" id="bd-submit" />
      </div>
      <p className="buttondown-plug">
        <a href="https://buttondown.email/refer/kaisoapbox" target="_blank">
          Powered by Buttondown.
        </a>
      </p>
    </form>
  );
}
