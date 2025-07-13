import Image from "next/image";
import { Button } from "./ui/button";

const Banner = () => {
    return (
        <section className="relative h-screen bg-[#F4F6F6] overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-1 space-y-8">
                        <h2 className="text-green-800 text-sm md:text-xl bg-green-800/20 p-1 px-2 rounded-sm inline-block font-semibold">Wellcome to Fresh Harvest</h2>
                        <h1 className="text-4xl md:text-7xl font-bold text-black30">Fresh Fruits and <br /> Vegetables</h1>
                        <p>At Fresh Harvests, we are passionate about providing you with the freshest <br /> and most  flavorful fruits and vegetables</p>
                        <Button className="bg-primaryColor  py-4 px-8">Shop Now</Button>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <Image
                            src="/banner.png"
                            alt="banner image"
                            width={400}
                            height={500}
                            className=""

                        />
                    </div>

                </div>  
            </div>
            {/* offer card */}
            <div className="offer absolute top-[440px] left-[30px] md:top-[570px] md:left-[330px] flex bg-[#EBEBEB] p-4 rounded-2xl">
                <div className=""><h2>special offer </h2>
                    <h2>Fresh Salad</h2>
                    <h2>Up to 70% off </h2>
                    <h2>code: FRESH25</h2>
                    <div className="">

                    </div>

                </div>
                <div className="">
                    <Image
                            src="/salad.jpg"
                            alt=" image"
                            width={100}
                            height={100}
                            className=" rounded-full"

                        />
                </div>
            </div>
        </section>
    );
};

export default Banner;