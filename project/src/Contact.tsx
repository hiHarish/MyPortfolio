import { Mail, Phone, Linkedin, Instagram, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <p className="text-center mb-8 text-gray-300">
          Let's connect! Reach out via phone, email, or social media.
        </p>

        {/* Contact Details */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Phone */}
          <a href="tel:+919550003011" className="flex items-center gap-3 text-gray-300 hover:text-white">
            <Phone className="w-6 h-6 text-blue-500" /> +91 9550003011
          </a>

          {/* WhatsApp */}
          <a href="https://wa.me/9550003011" target="_blank" className="flex items-center gap-3 text-gray-300 hover:text-white">
            <MessageCircle className="w-6 h-6 text-green-500" /> Chat on WhatsApp
          </a>

          {/* Email */}
          <a href="mailto:hiharishpeddi@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-white">
            <Mail className="w-6 h-6 text-red-500" /> hiharishpeddi@gmail.com
          </a>

          {/* LinkedIn */}
          <a href="https://linkedin.com/in/harish-kumar-peddi" target="_blank" className="flex items-center gap-3 text-gray-300 hover:text-white">
            <Linkedin className="w-6 h-6 text-blue-500" /> LinkedIn Profile
          </a>

          {/* Instagram */}
          <a href="https://instagram.com/harishpeddi_04" target="_blank" className="flex items-center gap-3 text-gray-300 hover:text-white">
            <Instagram className="w-6 h-6 text-pink-500" /> Instagram Profile
          </a>
        </div>
        <br></br>
        
          
        

        {/* Contact Form */}
      </div> <div><p className="text-center text-gray-400">Designed by Harish Peddi</p></div>
    </section>
  );
};

export default Contact;
