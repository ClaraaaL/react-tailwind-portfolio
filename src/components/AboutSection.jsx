import { Briefcase, Code, Terminal, User, Database } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="relative py-24 px-4">
            {" "}
            <div className="container max-w-5xl mx-auto ">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 item-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Digital Experience Craftsman & Tech Innovator
                        </h3>
                        <p className="text-muted-foreground">
                            Hey there! I'm a full-stack developer with more than 2 years of hands-on experience building with React, Node.js, and modern web technologies. I love creating digital experiences that are both visually appealing and functionally seamless.
                        </p>
                        <p className="text-muted-foreground">
                            My journey through various leadership roles before diving into tech gives me a unique perspective on building solutions. I'm all about blending technical skills with creative thinking—turning tricky problems into elegant, user-friendly websites and apps that make an impact.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                            </a>


                            <a  href="/file/ClaraCV.pdf"
                                download="ClaraCV.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 duration-300 transition-colors">
                                {" "}
                                Download CV
                            </a>
                        </div>
                        <div className="flex justify-center">
                            <img src="/pic/clarabg.jpeg" alt="Clara pic" className="w-70 h-auto rounded-4xl shadow-lg opacity-60 py-3"/>
                        </div>    
                    </div>


                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="text-primary h-6 w-6"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">Building responsive web applications with React, Node.js, and modern frameworks that deliver exceptional user experiences.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="text-primary h-6 w-6"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UX Optimization</h4>
                                    <p className="text-muted-foreground">Creating intuitive user interfaces with a focus on accessibility and engaging user experiences that solve real business challenges.</p>
                                </div>
                            </div>

                        </div>
                        <div className="gradient-border p-6 card-hover">

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="text-primary h-6 w-6"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Project Management</h4>
                                    <p className="text-muted-foreground">Managing development projects from concept to completion with strong communication skills and attention to detail.</p>
                                </div>
                            </div>

                        </div>

                        <div className="gradient-border p-6 card-hover">

                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Terminal  className="text-primary h-6 w-6"/>
                            </div>
                            <div className="text-left">
                            <h4 className="font-semibold text-lg">AI Integration</h4>
                                <p className="text-muted-foreground">
                                Leveraging AI tools like BOLT to optimize development processes and create intelligent solutions for enhanced functionality.
                                </p>
                            </div>
                        </div>

                        </div>

                        <div className="gradient-border p-6 card-hover">

                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Database className="text-primary h-6 w-6"/>
                            </div>
                            <div className="text-left">
                            <h4 className="font-semibold text-lg">Database Solutions</h4>
                                    <p className="text-muted-foreground">
                                    Implementing efficient database architectures with SQL and modern solutions like Firebase and Supabase for optimized data management.
                                    </p>
                            </div>
                        </div>

                        </div>



                    </div>
                </div>    

            </div>
        </section>
    );
}