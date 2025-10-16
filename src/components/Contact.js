import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      className="max-w-3xl mx-auto py-16 px-4"
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="border rounded px-3 py-2" />
        <input type="email" placeholder="Your Email" className="border rounded px-3 py-2" />
        <textarea placeholder="Message" className="border rounded px-3 py-2" rows={4} />
        <button type="submit" className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">Send</button>
      </form>
      <div className="mt-4 flex gap-4">
        <a href="mailto:sharmapulkit43@gmail.com" className="underline">Email</a>
        <a href="https://linkedin.com/in/pulkit-vashistha-a2361482" className="underline">LinkedIn</a>
        <a href="https://experienceleaguecommunities.adobe.com/t5/user/viewprofilepage/user-id/16639683" className="underline">Adobe Advisor</a>
        <span>Gurugram, Haryana</span>
      </div>
    </motion.div>
  );
}
export default Contact;
