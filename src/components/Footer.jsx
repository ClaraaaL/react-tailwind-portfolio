import { ArrowUp } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center flex flex-col items-center gap-2">
                
                {/* ArrowUp button */}
                <a href="#hero" className="p-1 rounded-full text-white hover:bg-white/10 transition">
                <ArrowUp />
                </a>

                {/* Footer text */}
                <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Clara Lee. All rights reserved.
                </p>
                {/* <p className="text-sm text-muted-foreground">
                Built with React and Tailwind CSS
                </p> */}

            </div>
            
        </footer>
    );
}