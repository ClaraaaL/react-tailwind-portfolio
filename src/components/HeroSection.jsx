import { ArrowDown } from "lucide-react";


export const HeroSection = () => {
    return (
        <section 
            id="hero" 
            className=" relative min-h-screen flex flex-col items-center justify-center px-4 "
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">

                    <div className="relative flex items-center mb-4">
                    <img src="/pic/meanddoudou.png" alt="meanddoudou" className="w-32 h-auto rounded-full mx-auto mb-4 animate-float mr-3" />
                    {/* Dialogue Box */}
                    <div className="ml-2 mb-45 bg-white dark:bg-gray-800 dark:text-white px-4 py-2 rounded-xl shadow-md relative max-w-xs text-left text-sm text-primary/100 opacity-50 animate-float">
                    <p className="text-black">I'm open to new projects. Let's build your custom website together!</p>
                    {/* Small Triangle */}
                    <div className="absolute left-[-6px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-white dark:border-r-gray-800"></div>
                </div>
                    </div>
                        
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hi I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">
                            {" "} Clara</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> 
                            {" "} Lee</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 ">
                        I craft responsive, intuitive web solutions with precision and creativity. My passion lies in translating complex requirements into elegant interfaces that delight users while solving real business challenges.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>

                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce ">
                <span className="test-sm text-muted-foreground mb-2"> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary " />
            </div>
        </section>
    );
}