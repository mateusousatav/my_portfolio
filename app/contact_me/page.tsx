"use client";

export default function ContactPage() {

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Message Sent!");
    e.currentTarget.reset();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-center caption2">Have an inquiry?</p>
      <p className="text-center heading2 mb-10">CONTACT ME</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        
        <div className="flex flex-col">
          <label className="caption2 mb-1">Your Name</label>
          <input 
            type="text"
            placeholder="John Doe"
            className="border border-gray-300 rounded-lg px-4 py-2 paragraph focus:outline-none focus:ring-2 focus:ring-[#BFD8AC]"
          />
        </div>

        <div className="flex flex-col">
          <label className="caption2 mb-1">Your Email</label>
          <input 
            type="email"
            placeholder="you@example.com"
            className="border border-gray-300 rounded-lg px-4 py-2 paragraph focus:outline-none focus:ring-2 focus:ring-[#BFD8AC]"
          />
        </div>

        <div className="flex flex-col">
          <label className="caption2 mb-1">Message</label>
          <textarea 
            rows={5}
            placeholder="Write your message here..."
            className="border border-gray-300 rounded-lg px-4 py-2 paragraph focus:outline-none focus:ring-2 focus:ring-[#BFD8AC]"
          ></textarea>
        </div>

        <div className="flex justify-center mt-4">
          <button type="submit" className="myButton text-[16px] px-8 py-3">
            Send Message
          </button>
        </div>

      </form>
    </div>
  );
}

