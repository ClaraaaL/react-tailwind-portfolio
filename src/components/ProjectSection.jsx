import { ExternalLink, Github , ArrowRight} from "lucide-react";

const projects = [
    {
        id: 1,
        title: "HerLuna",
        description: "A Period Tracking Web Application", 
        image: "/project/HerLuna.png",
        tags: ["Next.js", "TailwindCSS", "API Integration", "Firebase","React"],
        demoUrl:"her-luna-git-main-claraaals-projects.vercel.app",
        githubUrl:"https://github.com/ClaraaaL/HerLuna",
    },

    {
        id: 2,
        title: "MessyBuddy",
        description: "A House Task Management Web Application", 
        image: "/project/MessyBuddy.png",
        tags: ["Node.js", "BOLT", "Supabase","TypeScript"],
        demoUrl:"#",
        githubUrl:"https://github.com/ClaraaaL/MessyBuddies",
    },
]

export const ProjectSection = () => {
    return(
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                    {" "}
                    Featured <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
                    Here are some of my projects that I have worked on. You can find more of my projects on my GitHub profile.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) =>(
                        <div 
                        key={key} className="group bg-card rounded-lg shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 rounded-2xl" 
                                />
                            </div>
                            
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 border text-xs font-medium rounded-full bg-secondary-foreground ">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center ">
                                    <div className="flex space-x-3">
                                        <a href={project.demoUrl}
                                        target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20}/>
                                        </a>
                                        <a href={project.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <Github size={20}/>
                                        </a>
                                    </div>
                            </div>

                        </div>
                    ) )}

                </div>
                <div className="text-center mt-12">
                    <a 
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/ClaraaaL">
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};