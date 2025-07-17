export default function Contact() {
  return (
    <div className="w-full px-6 py-12 flex flex-col items-center text-white">
      {/* Header */}
      <div className="w-full max-w-2xl text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Let’s Connect</h2>
        <p className="text-lg text-neutral-400">
          For bookings, collaborations, or just to say hi — drop me a message.
        </p>
      </div>

      {/* Contact Card */}
      <div className="w-full max-w-2xl bg-white/5 backdrop-blur-md p-8 rounded-lg shadow-xl">
        <form className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-transparent border border-neutral-600 p-3 rounded text-white placeholder:text-neutral-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-transparent border border-neutral-600 p-3 rounded text-white placeholder:text-neutral-400"
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            className="bg-transparent border border-neutral-600 p-3 rounded text-white placeholder:text-neutral-400"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition text-white py-3 px-6 rounded"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Optional Footer */}
      <div className="mt-12 text-neutral-500 text-sm text-center">
        Or reach me directly at:{" "}
        <a
          href="mailto:johnson@shutter.com"
          className="underline hover:text-white"
        >
          johnson@shutter.com
        </a>
      </div>
    </div>
  );
}
