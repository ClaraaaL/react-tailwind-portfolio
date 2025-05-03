import { Facebook, Github, Instagram, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";  
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

    const handleSubmit = (e) => {

        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID, 
            import.meta.env.VITE_TEMPLATE_ID, 
            e.target, 
            import.meta.env.VITE_PUBLIC_KEY).then(  
            () => {
                // alert("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            }
        ).catch(() => 
            alert("Oops! Something went wrong. Please try again.")
            
        );

        setIsSubmitting(true);

        setTimeout(() => {
          toast({
            title: "Message sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          });
          setIsSubmitting(false);
        }, 1500);

        
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get in <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center mb-12 text-muted-foreground max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? 
                    Feel free to reach out! I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                    {/* Left column: Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">{" "} Contact Information</h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <a href="mailto:babananacream@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </a>
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:babananacream@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        Click here to send an email to me
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <div className="text-muted-foreground transition-colors">
                                        Calgary, Alberta, Canada
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <a href="https://github.com/ClaraaaL" className="text-muted-foreground hover:text-primary transition-colors">
                                        <Github className="w-6 h-6 text-primary" />
                                    </a>
                                </div>
                                <div>
                                    <h4 className="font-medium">GitHub</h4>
                                    <a href="https://github.com/ClaraaaL" className="text-muted-foreground hover:text-primary transition-colors ">
                                    https://github.com/ClaraaaL
                                    </a>
                                </div>
                            </div>

                            
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/clara-lee-935531281/" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="hover:text-primary"/>
                                </a>
                                <a href="https://www.instagram.com/imcy_1995?igsh=cXpkcTBqNWpqcmoy&utm_source=qr" target="_blank" rel="noopener noreferrer">
                                    <Instagram className="hover:text-primary"/>
                                </a>
                                <a href="https://www.facebook.com/share/1DdjWb4oaD/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                                    <Facebook className="hover:text-primary"/>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right column: Contact Form */}
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="name" className="block text-sm mb-2 font-medium">Your Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    required 
                                    value={formData.name}
                                    className="py-3 rounded-md px-4 w-full bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary" 
                                    placeholder="Clara Lee"
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div className="flex flex-col space-y-2">
                                <label htmlFor="email" className="block text-sm mb-2 font-medium">Your Email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    required 
                                    value={formData.email}
                                    className="py-3 rounded-md px-4 w-full bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary" 
                                    placeholder="test@example.com"
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm mb-2 font-medium">Your Message</label>
                                <textarea 
                                    name="message" 
                                    id="message" 
                                    required 
                                    value={formData.message}
                                    className="py-3 rounded-md px-4 w-full bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary resize-none" 
                                    placeholder="Hello, I'd like to talk about..."
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
                            >
                                {isSubmitting ? "Sending... ": "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
