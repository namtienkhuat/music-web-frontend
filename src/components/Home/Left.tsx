import Image from "next/image";

export default function Left() {
    return (
        <>
            <div>
                <Image
                    src="../public/importFromFigma/Vector.svg"
                    width={41}
                    height={43}
                    alt=""
                    className="h-[658px]"
                />
                <h1 className="text-white">Hello World!</h1>
            </div>
        </>
    );
}
