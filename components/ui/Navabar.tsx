'use client'
import { useEffect, useState } from "react";
import { Button } from "./button";
import { motion } from "motion/react";
import { Heart, Menu, ShoppingCart, X } from "lucide-react";
import { AuthDialog } from "../auth-dialog";
import Link from "next/link";

const Navabar = () => {
    const [isSrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isAuthDialogOpen, setIsAuthDialogOpen] = useState<boolean>(false);
    const NavItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "Shop", href: "#shop" },
        { name: "Blog", href: "#blog" },

    ]



    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)

            } else {
                setIsScrolled(false)

            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)

    }, [])
    return (
        <div>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`
                fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSrolled ? "bg-background/80 backdrop-blur-md shadow-md " : "bg-transparent"
                    } `}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16 md:h-20">

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center"
                        >
                            <div className="grid grid-cols-2 gap-0.5">
                                <div className="bg-green-800 rounded-full w-4 h-4 rounded-br-none"></div>
                                <div className="bg-green-800 rounded-full w-4 h-4 rounded-bl-none"></div>
                                <div className="bg-green-800 rounded-full w-4 h-4 rounded-tr-none"></div>
                                <div className="bg-green-800 rounded-full w-4 h-4 rounded-tl-none"></div>
                            </div>
                            <span className="font-bold text-xl ml-2">
                                Fresh Harvests<span className="text-primary">.</span>
                            </span>
                        </motion.div>
                        <nav className='hidden md:flex items-center space-x-1'>
                            {
                                NavItems.map((item, index) => (
                                    <div key={index}>

                                      <Link href={item.href}>
                                        <Button variant={"ghost"} className='text-sm font-medium'>

                                            {item.name}
                                        </Button></Link>
                                    </div>
                                ))
                            }
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.7 }}
                            >

                            </motion.div>
                        </nav>

                        <div className="hidden md:flex items-center space-x-2">
                            <Button variant="ghost" className="flex items-center gap-1">
                                <Heart /> Favorites
                            </Button>
                            <Button variant="ghost" className="flex items-center gap-1">
                                <ShoppingCart /> Cart
                            </Button>
                            <Button variant={'ghost'} onClick={() => setIsAuthDialogOpen(true)}>
                                Sign In
                            </Button>
                        </div>
                        <div className="flex items-center md:hidden">

                            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-2">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </div>

                    </div>
                </div>
            </motion.header>
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, x: "100%" }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: "100%" }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-50 bg-background md:hidden"
                >
                    <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between p-4 border-b">
                            <div className="font-bold text-xl">
                                Fresh Harvests<span className="text-primary">.</span>
                            </div>
                            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                                <X className="h-6 w-6" />
                            </Button>
                        </div>
                        <nav className="flex flex-col p-4 space-y-4">
                            {NavItems.map((item) => (
                                <Button
                                    key={item.name}
                                    variant="ghost"
                                    className="justify-start text-lg"

                                >
                                    {item.name}
                                </Button>
                            ))}
                            <Button
                                variant="ghost"
                                className="justify-start text-lg"
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    setIsAuthDialogOpen(true);
                                }}
                            >
                                Sign In
                            </Button>
                        </nav>
                    </div>

                </motion.div>
            )}

            <AuthDialog isOpen={isAuthDialogOpen} onClose={() => setIsAuthDialogOpen(false)} />

        </div>
    );
};

export default Navabar;