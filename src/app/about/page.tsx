import Link from "next/link";
import React from "react";
import {Metadata} from "next";




export default function About() {
    return (
    <div className="container">
        <Link href="/about/contacts">Contacts</Link>
        <Link href="/about/team">Team</Link>
    </div>
    )
}