import React from 'react';

const Contact = () => {
  return (
    <section className="h-full px-4 py-20 bg-primary">
      <div className="container max-w-4xl mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center text-custom-heading">Contact Me</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="backdrop-blur-md bg-white/10 p-6 rounded-lg shadow-lg border border-white/20">
            <h3 className="mb-4 text-xl font-bold text-custom-heading">Contact Information</h3>
            <div className="space-y-3 text-custom-allText">
              <p className="flex items-center"><span className="w-20 font-semibold">Email:</span> griteshaditya@gmail.com</p>
              <p className="flex items-center"><span className="w-20 font-semibold">Phone:</span> +91 8895055405</p>
              <p className="flex items-center"><span className="w-20 font-semibold">LinkedIn:</span> 
                <a href="https://www.linkedin.com/in/riteshaditya02/" className="text-custom-allText hover:text-custom-blue">
                  riteshaditya02
                </a>
              </p>
            </div>
          </div>
          <form className="backdrop-blur-md bg-white/10 p-6 rounded-lg shadow-lg border border-white/20 space-y-6">
            <div>
              <label className="block mb-2 text-custom-allText">Name</label>
              <input type="text" className="w-full p-2 border rounded bg-white/5 text-custom-allText" />
            </div>
            <div>
              <label className="block mb-2 text-custom-allText">Email</label>
              <input type="email" className="w-full p-2 border rounded bg-white/5 text-custom-allText" />
            </div>
            <div>
              <label className="block mb-2 text-custom-allText">Message</label>
              <textarea className="w-full h-32 p-2 border rounded bg-white/5 text-custom-allText"></textarea>
            </div>
            <button type="submit" className="w-full py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
