import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSent(true);
    }, 1000);
  };
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
      {!sent ? (
        <div className="w-full max-w-2xl bg-white/5 backdrop-blur-md p-8 rounded-lg shadow-xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="bg-transparent border border-neutral-600 p-3 rounded text-white placeholder:text-neutral-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="bg-transparent border border-neutral-600 p-3 rounded text-white placeholder:text-neutral-400"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
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
      ) : (
        <h1> Message Sent! </h1>
      )}

      {/* Optional Footer */}
      <div className="mt-12 text-neutral-500 text-sm text-center">
        Or reach me directly at:{" "}
        <a
          href="mailto:johnson@shutter.com"
          className="underline hover:text-white"
        >
          jenny@shutter.com
        </a>
      </div>
    </div>
  );
}
