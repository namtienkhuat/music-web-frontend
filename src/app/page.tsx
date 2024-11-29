"use client";

import Center from "@/components/Home/Center";
import Left from "@/components/Home/Left";
import Right from "@/components/Home/Right";

export default function Home() {
    console.log("Hello world");
    return (
        <main className="grid grid-cols-[20%_50%_30%]">
            {/* Left */}
            <Left></Left>
            <h3 className="text-white">Hello World!</h3>
            {/* Center */}
            <Center></Center>

            {/* Right */}
            <Right></Right>
        </main>
    );
}
