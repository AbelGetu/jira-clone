import Image from "next/image";
import Link from "next/link";

import { DottedSeparator } from "./dotted-separator";
import { Navigation } from "./navigation";

export const Sidebar = () => {
    return (
        <aside className="h-full bg-neutral-100 w-full">
            <Link href="/" className="">
                <Image src="/logo.svg" alt="logo" width={164} height={48} className="p-2"/>
            </Link>
            <DottedSeparator className="my-4"/>

            <Navigation />
        </aside>
    );
};